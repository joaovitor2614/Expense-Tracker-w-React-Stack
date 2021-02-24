import React from 'react'
import { connect } from 'react-redux'
import { setClearFilters } from '../../actions/filters'
import selectItems from '../../selectors/items'
import Item from '../Item'
import ListFilters from '../ListFilters'

export class ItemList extends React.Component {
    state = {
        shouldFilters: 'show-filters',
        shouldList: 'down-list'
    }

    hideFilters = () => {
        this.setState(() => ({ shouldFilters: 'hide-filters' }))
        this.setState(() => ({ shouldList: 'up-list' }))
        this.props.setClearFilters()
    }

    showFilters = () => {
        this.setState(() => ({ shouldFilters: 'show-filters' }))
        this.setState(() => ({ shouldList: 'down-list' }))

    }







    render() {
        return (
            <div className='bg-color'>
                <div className='content-container'>
                    <div className='button-gp'>
                        <button onClick={this.showFilters} className='button button--show'>
                            Mostrar filtros
                        </button>
                        <button onClick={this.hideFilters} className='button button--hide'>Remover filtros</button>

                    </div>


                </div>

                <div className={this.state.shouldFilters}>
                    <ListFilters />
                </div>

                <div className='content-container'>
                    <div className={this.state.shouldList}>
                        <div className='list__header'>
                            <div className='show-for-desktop'>Título</div>
                            <div className='show-for-desktop'>Quantia</div>
                            <div className='show-for-mobile'>Items</div>
                        </div>

                    </div>


                    <div className={this.state.shouldList}>
                        <div className='z-index-low'>
                            {this.props.items.length === 0 ? <p >Sem itens</p> : (
                                this.props.items.map((item) => {

                                    return <Item key={item.id} item={item} />
                                })
                            )}

                        </div>

                    </div>
                </div>




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