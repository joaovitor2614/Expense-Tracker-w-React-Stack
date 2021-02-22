import React from 'react'
import { connect } from 'react-redux'
import { setClearFilters } from '../../actions/filters'
import selectItems from '../../selectors/items'
import Item from '../Item'
import ListFilters from '../ListFilters'

export class ItemList extends React.Component {
    state = {
        listPosition: 'list-default',
        filtersPosition: 'filters-default'
    }

    onShowFilters = () => {
        if (this.state.filtersPosition === 'filters-hide') {
            this.setState(() => ({ filtersPosition: 'filters-default' }))
            this.setState(() => ({ listPosition: 'list-default' }))
        } else {
            return
        }
    }

    onHideFilters = () => {
        this.props.setClearFilters()
        if (this.state.filtersPosition === 'filters-default') {

            this.setState(() => ({ filtersPosition: 'filters-hide' }))
            this.setState(() => ({ listPosition: 'list-up' }))
        } else {
            return
        }
        console.log(this.state.listPosition)
        console.log(this.state.filtersPosition)
    }

    render() {
        return (
            <div>
                <h1>Lista dos items</h1>
                <button onClick={this.onShowFilters}>Mostrar filtros</button>
                <button onClick={this.onHideFilters}>Remover filtros</button>
                <ListFilters className={this.state.filtersPosition} />
                {this.props.items.length === 0 ? <p className={this.state.listPosition}>Sem itens</p> : (
                    this.props.items.map((item) => {
                        console.log(item)
                        return <Item className={this.state.listPosition} key={item.id} item={item} />
                    })
                )}

            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    items: selectItems(state.items, state.filters)
})

const mapDispatchToProps = (dispatch) => ({
    setClearFilters: () => dispatch(setClearFilters())
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)