// SET_TEXT_FILTER
export const setTextFilter=(text)=>{
    return {
        type:'SET_TEXT_FILTER',
        text
    }
}
//SORT_BY_CATEGORY
export const setCategoryFilter =(category)=>{
    return{
        type:'SET_CATEGORY_FILTER',
        category
    }
}

// SORT_BY_DATE
export const sortByDate=()=>({
    type:'SORT_BY_DATE',
    
});

// SORT_BY_AMOUNT
export const sortByAmount=()=>({
    type:'SORT_BY_AMOUNT',
    
})
// SET_START_DATE
export const setStartDate=(startDate)=>({
    type:'SET_START_DATE',
    startDate
})
// SET_END_DATE
export const setEndDate=(endDate)=>({
    type:'SET_END_DATE',
    endDate
})