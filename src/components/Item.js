import React from 'react'
import moment from 'moment'
import numeral from 'numeral'
import { Link } from 'react-router-dom'

// packages para portugues-br
moment.locale('pt-br');
export function numeralConfig() {

    const config = numeral.register('locale', 'br', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            return number === 1 ? 'real' : 'reais';
        },
        currency: {
            symbol: 'R$'
        }
    });
    return config
}
numeralConfig()
numeral.locale('br')


const Item = ({ item }) => {

    return (

        <Link className='list__item' to={`/edit/${item.id}`}>

            <p className='list__title'>{item.title}</p>
            <div className='list__sub-title-group'>
                <p className='list__sub-title'>{numeral(item.amount).format('$0,0.00')}</p>
                <p className='list__sub-title'>{moment(item.createdAt).format('ll')}</p>

            </div>


        </Link>


    )
}

export default Item