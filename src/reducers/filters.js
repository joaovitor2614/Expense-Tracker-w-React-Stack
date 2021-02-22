import moment from 'moment'
const defaultFilterState = {
    text: '',
    sortBy: 'date',
    typeSort: 'all',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

export default (state = defaultFilterState, action) => {
    switch (action.type) {
        case 'SET_CLEAR_FILTERS':
            return {
                text: '',
                sortBy: 'date',
                typeSort: 'all',
                startDate: moment().startOf('month'),
                endDate: moment().endOf('month')
            }

        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }

        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        case 'SORT_BY_TYPE':
            return {
                ...state,
                typeSort: action.typeSort
            }
        default:
            return state
    }
}