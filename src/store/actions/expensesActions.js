
// //working 
export const addExpense=(expense)=>{
  console.log('from action ')
  return(dispatch,getState,{getFirebase,getFirestore})=>{
  //make async call to db
    const firestore = getFirestore();
   
    firestore.collection('expenses').add({
    
      ...expense
    })
    .then(()=>{
      console.log('ADD_EXPENSE:', expense );
     dispatch({type:'ADD_EXPENSE', expense})

    }).catch((e)=>{
        console.log("something wrong with ADD EXPENSE", e);
    })
  }
}

export const getExpense = () => {
  return (dispatch, getState, { getFirestore }) => {
 const firestore = getFirestore()
   firestore.collection('expenses').get().then(function(querySnapshot) {
    const expense=[];
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
    expense.push({
      id: doc.id,
      ...doc.data()
    })
      
       // const data=doc.data()
       // console.log(doc.id, " => ",doc.data() );
        //dispatch({type:'getExpenseReducer', doc})
    });
    console.log('GET_EXPENSE:', expense)
    
    dispatch({type:'GET_EXPENSE',expense})
  })
}};

export const getExpenseReducer=(expenses)=>({
  type:'SET_EXPENSES',
  expenses
})
// export const addExpenseReducer =(expense)=>({
//   type:'ADD_EXPENSE',
//   expense

// })
// //test
// export const addExpense=(expense)=>{
//   console.log('from action ')
//   return(dispatch,getState,{getFirebase,getFirestore})=>{
//   //make async call to db

//   // const {description='',note='',amount=0,createdAt=0}= expenseData;
//   //  const expense={description,note,amount,createdAt}
//     const firestore = getFirestore();
//     console.log('firebase start');
    
//     firestore.collection('expenses').add({
//       ...expense
//     })
//     .then(()=>{
//      dispatch(addExpenseReducer({
//        ...expense
//      }));

//     }).catch((e)=>{
//         console.log("something wrong with ADD EXPENSE", e);
//     })
//   }
// }

// //SET_EXPENSES
// export const getExpenseReducer =(expense)=>({
//   type:'GET_EXPENSES',
//   expense

// })
// export const getExpense=(expense)=>{
//   console.log('from action ')
//   return(dispatch,getState,{getFirebase,getFirestore})=>{
//   //make async call to db

//   // const {description='',note='',amount=0,createdAt=0}= expenseData;
//   //  const expense={description,note,amount,createdAt}
//     const firestore = getFirestore();
//     console.log('firebase start');
    
//     firestore.collection('expenses').get({
//       ...expense
//     })
//     .then(()=>{
//      dispatch(addExpenseReducer({
//        ...expense
//      }));

//     }).catch((e)=>{
//         console.log("something wrong with get EXPENSE", e);
//     })
//   }

