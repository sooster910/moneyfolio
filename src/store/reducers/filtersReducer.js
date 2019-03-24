const initState={
    text :'',
    sortBy: 'date',
    category:'null',
    startDate :undefined,
    endDate: undefined
}

const filtersReducer = (state = initState, action) => {
    console.log(' state from filterReducer:', state);
   
    switch(action.type){
        case 'SET_TEXT_FILTER':
           return{
               ...state,
               text:action.text
           };
        case 'SET_CATEGORY_FILTER':
           return{
               ...state,
               text:action.category
           }
        case 'SORT_BY_AMOUNT':
           return{
               ...state,
               sortBy: 'amount'
           }
       
       case 'SORT_BY_DATE':
           return{
               ...state,
               sortBy:'date'
           }
       case 'SET_START_DATE':
       return{
           ...state,
           startDate: action.startDate
       }
       case 'SET_END_DATE':
       return{
           ...state,
           endDate:action.endDate
       }
           default:
             return state;
           }

}

export default filtersReducer;