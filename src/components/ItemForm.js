
import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import ItemSchema from '../validation/items'




export default class ItemForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: props.item ? props.item.type : '',
            title: props.item ? props.item.title : '',
            amount: props.item ? (props.item.amount * 100).toString() : '',
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

    async onSubmit(e) {
        e.preventDefault()

        console.log(this.state.title)
        const newItem = {
            type: this.state.type,
            title: this.state.title,
            amount: parseFloat(this.state.amount, 10),
            createdAt: this.state.createdAt.valueOf(),
            note: this.state.note,
        }
        console.log(newItem)

        const isValid = await ItemSchema.validate(newItem).then((value) => {
            this.setState(() => ({ errors: '' }))
            this.props.onSubmit(newItem)
        }).catch((err) => {
            console.log(err)
            console.log(err.erros)
            this.setState(() => ({ error: err.errors }))
        })


    }

    render() {

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {this.state.error && <p className='form-error'>{this.state.error}</p>}
                    <label>
                        Tipo:
                       <div onChange={this.onTypeChange}>
                            <label>
                                Nenhum
                            <input type='radio' value='none' defaultChecked name='type' />
                            </label>
                            <label>
                                Renda
                            <input type='radio' value='income' name='type' />
                            </label>
                            <label>
                                Despesa
                            <input type='radio' value='expense' name='type' />
                            </label>


                        </div>
                    </label>
                    <label>
                        Título:
                       <input type='text' value={this.state.title} onChange={this.onTitleChange}
                            placeholder="Insira título..." />
                    </label>
                    <label>
                        Quantia:
                       <input value={this.state.amount} onChange={this.onAmountChange}
                            placeholder="Insira quantia..." />
                    </label>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        focused={this.state.focused}
                        onDateChange={this.onDateChange}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        placeholder="Insira nota(opcional)..."
                    />
                    <button>Salvar</button>


                </form>
            </div>
        )
    }
}


