//filter logic 

const filteredExpense=(expenses,{text, sortBy, startDate, endDate,category,amount})=>{
    return expenses.filter((filteringExpense)=>{
          const startDateMatch = typeof startDate!== 'number' || filteringExpense.createdAt>=startDate;
          const endDateMatch =typeof endDate!=='number' || filteringExpense.createdAt<=endDate;
          const textMatch= filteringExpense.description.toLowerCase().includes(text.toLowerCase());
        
          return startDateMatch && endDateMatch && textMatch;
        })
    }
  export default filteredExpense;