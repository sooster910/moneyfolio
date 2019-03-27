const initState =[]

  const expenseReducer = (state = initState, action) => {
     switch (action.type) {
       case 'ADD_EXPENSE':
        return [...state, action.expense]
        
        case 'EDIT_EXPENSE':
        return state;
      
        case 'GET_EXPENSE':
        console.log('GETEXPENSE STATE:', state);
        return action.expense;

      
        default:
        return state;
        
      
      } 

  };
  
  export default expenseReducer;