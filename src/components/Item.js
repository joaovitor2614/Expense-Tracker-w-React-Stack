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
        <Link to={`/edit/${item.id}`}>
            <h1>{item.title}</h1>
            <p>{numeral(item.amount).format('$0,0.00')} - {moment(item.createdAt).format('ll')}</p>
        </Link>
    )
}

export default Item