import * as yup from 'yup';
import 'core-js/es6/promise'
import 'core-js/es6/set'
import 'core-js/es6/map'



const ItemSchema = yup.object().shape({
    type: yup.string().required('Especifique o tipo de item'),
    title: yup.string().required('Insira um título'),
    amount: yup.number().required('Insira a quantia').typeError('Você deve especificar um número na quantia'),
    createdAt: yup.number(),
    note: yup.string()
})

export default ItemSchema