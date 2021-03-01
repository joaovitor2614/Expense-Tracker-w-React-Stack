
import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'





export default class ItemForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: props.item ? props.item.type : '',
            title: props.item ? props.item.title : '',
            amount: props.item ? (props.item.amount).toString() : '',
            createdAt: props.item ? moment(props.item.createdAt) : moment(),
            note: props.item ? props.item.note : '',
            focused: null,
            error: ''
        }
        this.onSubmit = this.onSubmit.bind(this)


    }
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }))
    }

    onTypeChange = (e) => {
        const type = e.target.value;
        if (type === 'none') {
            this.setState(() => ({ type: '' }))
        } else {
            this.setState(() => ({ type }))
        }
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    }

    onDateChange = (date) => {
        this.setState(() => ({ createdAt: date }))
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ focused }))
    }

    onSubmit(e) {
        e.preventDefault()

        console.log(this.state.title)
        const newItem = {
            type: this.state.type,
            title: this.state.title,
            amount: parseFloat(this.state.amount, 10),
            createdAt: this.state.createdAt.valueOf(),
            note: this.state.note,
        }
        if (!this.state.type || !this.state.title || !this.state.amount) {
            this.setState(() => ({ error: 'Preencha os campos não marcados como opcionais' }))
        } else {
            this.setState(() => ({ error: '' }))

            this.props.onSubmit(newItem)
        }
    }

    render() {

        return (
            <div className='form-center'>

                <form className='form' onSubmit={this.onSubmit}>
                    {this.state.error && <p className='form-error'>{this.state.error}</p>}
                    <div className='form-group form-group--first'>
                        <label className='radio-group form-group__m-r'>
                            Tipo:
                            <div onChange={this.onTypeChange}>
                                <label className='text-margin-r-l'>
                                    Nenhum
                                    <input type='radio' value='none' defaultChecked name='type' />
                                </label>
                                <label className='text-margin-r'>
                                    Renda
                                    <input type='radio' value='income' name='type' />
                                </label>
                                <label >
                                    Despesa
                                    <input type='radio' value='expense' name='type' />
                                </label>


                            </div>
                        </label>
                        <label>
                            Título:
                            <input className='input' type='text' value={this.state.title} onChange={this.onTitleChange}
                                placeholder="Insira título..." />
                        </label>
                    </div>

                    <div className='form-group'>
                        <label className='form-group__m-r'>
                            Quantia:
                            <input value={this.state.amount} className='input'
                                onChange={this.onAmountChange}
                                placeholder="Insira quantia..." />
                        </label>
                        <SingleDatePicker
                            date={this.state.createdAt}
                            focused={this.state.focused}
                            onDateChange={this.onDateChange}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            withPortal={true}

                        />

                    </div>

                    <div className='form-group'>
                        <label className='form-group__m-r'>
                            Nota:
                            <textarea
                                className='input input--big'
                                value={this.state.note}
                                onChange={this.onNoteChange}
                                placeholder="Insira nota(opcional)..."
                            />
                        </label>

                        <button className='button button--app'>Salvar</button>

                    </div>



                </form>
            </div>
        )
    }
}


