import * as yup from 'yup';




const ItemSchema = yup.object().shape({
    type: yup.string().required('Especifique o tipo de item'),
    title: yup.string().required('Insira um título'),
    amount: yup.number().required('Insira a quantia').typeError('Você deve especificar um número na quantia'),
    createdAt: yup.number(),
    note: yup.string()
})

export default ItemSchema