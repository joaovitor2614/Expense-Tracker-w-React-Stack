import * as yup from 'yup';


function missingArea(text) {
    return `Por favor insira ${text}`
}

const ItemSchema = yup.object().shape({
    type: yup.string().required(missingArea('o tipo do item')),
    title: yup.string().required(missingArea('o título')),
    amount: yup.number().required(missingArea('a quantia')).typeError('Você deve especificar um número na quantia'),
    createdAt: yup.number(),
    note: yup.string()
})

export default ItemSchema