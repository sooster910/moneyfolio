import moment from 'moment';


//filter logic 


const filteredExpense = (expenses, { text, sortBy, startDate, endDate, category, amount }) => {

  return expenses.filter((filteringExpense) => {

    const MomentCreatedAt = moment(filteringExpense.createdAt).toDate().getTime()
    const startDateMatch = startDate ? startDate.isSameOrBefore(MomentCreatedAt, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(MomentCreatedAt, 'day') : true;
    const textMatch = filteringExpense.description.toLowerCase().includes(text.toLowerCase());
    const categoryMatch = filteringExpense.category.includes(category);

    return categoryMatch && startDateMatch && endDateMatch && textMatch;

  })
}

 export default filteredExpense;


