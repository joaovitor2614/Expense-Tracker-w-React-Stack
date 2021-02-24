import React from 'react'
import { connect } from 'react-redux'
import {
    setTextFilter, sortByDate,
    sortByAmount, setEndDate,
    setStartDate, sortByType

} from '../actions/filters'
import { DateRangePicker } from 'react-dates'



export class ListFilters extends React.Component {
    state = {
        focusedInput: null
    }
    onTextFilter = (e) => {
        const text = e.target.value
        this.props.setTextFilter(text)
    }
    onSortBy = (e) => {
        const sort = e.target.value;

        if (sort === 'date') {
            this.props.sortByDate()
        } else if (sort === 'amount') {
            this.props.sortByAmount()
        }
    }

    onTypeSort = (e) => {
        const typeSort = e.target.value;
        this.props.sortByType(typeSort)
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusInput = (focusedInput) => {
        this.setState(() => ({ focusedInput }))
    }
    render() {

        return (
            <div className='content-container'>
                <div className='filters__header'>Procurar por</div>
                <div className='filters__group'>
                    <label>
                        Procurar por nome:
                    <input className='input' type='text' value={this.props.filters.text} onChange={this.onTextFilter} />
                    </label>
                    <div className='radio-group'>
                        <label>
                            Procurar por tipo:
                            <div value={this.props.filters.typeSort} onChange={this.onTypeSort}>
                                <label>
                                    Todos:
                                <input type='radio' value='all' defaultChecked name='typeSort' />
                                </label>
                                <label>
                                    Renda:
                                <input type='radio' value='income' name='typeSort' />
                                </label>
                                <label>
                                    Despesa:
                                <input type='radio' value='expense' name='typeSort' />
                                </label>

                            </div>

                        </label>

                    </div>


                </div>

                <div className='filters__header'>Organizar por</div>
                <div className='filters__group'>
                    <label>
                        Organizar por:
                    <select className='input' value={this.props.filters.sortBy} onChange={this.onSortBy}>
                            <option value='date'>Data</option>
                            <option value='amount'>Quantidade</option>
                        </select>
                    </label>
                    <label>
                        Organizar por período de data:
                <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            focusedInput={this.state.focusedInput}
                            onDatesChange={this.onDatesChange}
                            onFocusChange={this.onFocusInput}
                            isOutsideRange={() => false}
                            showClearDates={true}
                            withPortal={true}

                        />
                    </label>

                </div>

            </div>
        )
    }
}




const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    sortByType: (typeSort) => dispatch(sortByType(typeSort)),

})

const mapStateToProps = (state) => ({
    filters: state.filters
})

export default connect(mapStateToProps, mapDispatchToProps)(ListFilters)