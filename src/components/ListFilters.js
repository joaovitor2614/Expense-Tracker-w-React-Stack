import React from 'react'
import { connect } from 'react-redux'
import {
    setTextFilter, sortByDate,
    sortByAmount, setEndDate,
    setStartDate
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
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusInput = (focusedInput) => {
        this.setState(() => ({ focusedInput }))
    }
    render() {

        return (
            <div>
                <label>
                    Procurar por nome:
               <input type='text' value={this.props.filters.text} onChange={this.onTextFilter} />
                </label>
                <label>
                    Organizar por:
                    <select value={this.props.filters.sortBy} onChange={this.onSortBy}>
                        <option value='date'>Data</option>
                        <option value='amount'>Quantidade</option>
                    </select>
                </label>
                <label>
                    Procurar por período de data:
                <DateRangePicker
                        startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                        focusedInput={this.state.focusedInput}
                        onDatesChange={this.onDatesChange}
                        onFocusChange={this.onFocusInput}
                        showClearDates={true}

                    />
                </label>
            </div>
        )
    }
}




const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

const mapStateToProps = (state) => ({
    filters: state.filters
})

export default connect(mapStateToProps, mapDispatchToProps)(ListFilters)