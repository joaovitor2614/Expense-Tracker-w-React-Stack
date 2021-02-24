import React from 'react'
import { connect } from 'react-redux'
import selectItemTotal from '../selectors/item-total'
import numeral from 'numeral'
import { numeralConfig } from './Item'
import { XYPlot, RadialChart } from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'


numeral.locale('br')

export class Balance extends React.Component {
    state = {
        totalIncome: this.props.totalData.incomeTotal,
        totalExpense: this.props.totalData.expenseTotal,
        totalState: ''
    }

    onTotalStateColor = (total) => {
        if (total === 0) {
            this.setState(() => ({ totalState: '' }))
        } else if (total > 0) {
            this.setState(() => ({ totalState: 'balance__total--positive' }))
        } else if (total < 0) {
            this.setState(() => ({ totalState: 'balance__total--negative' }))
        }
        console.log(this.state.totalState)
    }

    componentDidMount() {
        this.onTotalStateColor(this.props.totalData.totalBalance)

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
            <div className='balance-container'>
                <div className='balance__total'>
                    <div className='balance__total-amount'>
                        <FontAwesomeIcon icon={faCoins} />
                        <h1 className='balance__total'>
                            Balanço total:<div className={`${this.state.totalState}`}>
                                {numeral(this.props.totalData.totalBalance).format('$0,0.00')}</div>
                        </h1>
                    </div>

                    <div className='balance__total-amount'>
                        <p className='balance__income'>Renda total: {numeral(this.props.totalData.incomeTotal).format('$0,0.00')}</p>
                        <p>Despesa total: {numeral(this.props.totalData.expenseTotal).format('$0,0.00')}</p>
                    </div>
                </div>
                <div className='balance__graph'>
                    <RadialChart
                        data={myData}
                        colorType="literal"
                        animation={'gentle'}
                        width={210}
                        height={230}
                        margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        showLabels={true}
                        labelsRadiusMultiplier={0.5}
                        labelsAboveChildren={true}
                    />
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    totalData: selectItemTotal(state.items)
})

export default connect(mapStateToProps)(Balance)