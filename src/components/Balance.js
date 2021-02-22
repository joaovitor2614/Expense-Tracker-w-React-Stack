import React from 'react'
import { connect } from 'react-redux'
import selectItemTotal from '../selectors/item-total'
import numeral from 'numeral'
import { numeralConfig } from './Item'
import { XYPlot, RadialChart } from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';


numeral.locale('br')

export class Balance extends React.Component {
    state = {
        totalIncome: this.props.totalData.incomeTotal,
        totalExpense: this.props.totalData.expenseTotal
    }
    render() {
        const showAmountIncome = (this.state.totalIncome).toString()
        const showAmountExpense = (this.state.totalExpense).toString()

        const myData = this.state.totalExpense !== 0 || this.state.totalIncome !== 0 ? [{
            angle: this.state.totalIncome, label: 'Renda',
            radius: 10, color: "lightgreen"
        },
        {
            angle: this.state.totalExpense, label: 'Despesa',
            radius: 10, color: "#b11226"
        }] : [{ angle: 100, color: 'grey' }]



        return (
            <div>
                <h1>Balanço total: {numeral(this.props.totalData.totalBalance).format('$0,0.00')}</h1>
                <p>Renda total: {numeral(this.props.totalData.incomeTotal).format('$0,0.00')}</p>
                <p>Despesa total: {numeral(this.props.totalData.expenseTotal).format('$0,0.00')}</p>
                <RadialChart
                    data={myData}
                    colorType="literal"
                    animation={'gentle'}
                    width={250}
                    height={250}
                    showLabels={true}
                    labelsRadiusMultiplier={0.5}
                    labelsAboveChildren={true}

                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    totalData: selectItemTotal(state.items)
})

export default connect(mapStateToProps)(Balance)