

export default (items) => {
    console.log('começou')
    let totalBalance = 0, incomeTotal = 0, expenseTotal = 0;

    items.map((item) => {

        if (item.type === 'income') {
            incomeTotal += item.amount
        } else if (item.type === 'expense') {
            expenseTotal += item.amount
        }
        totalBalance = incomeTotal - expenseTotal


    })
    console.log(totalBalance, incomeTotal, expenseTotal)
    return {
        totalBalance,
        incomeTotal,
        expenseTotal
    }
}