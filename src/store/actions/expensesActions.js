
// //working 
export const addExpense=(expense)=>{
  console.log('from action ')
  return(dispatch,getState,{getFirebase,getFirestore})=>{
    //make async call to db
    const firestore = getFirestore();
    const uid= getState().auth.uid
    firestore.collection("users").doc(`${uid}`).collection("expenses").add({
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
 const uid = getState().auth.uid;
 return firestore.collection('users').doc(`${uid}`).collection('expenses').get().then(collection=>{
 console.log("collection",collection)
  const expense=[]  
   collection.docs.map((doc)=>expense.push({...doc.data(), id:doc.id}))
   dispatch(setExpense(expense))
 })
}

};

export const setExpense=(expense)=>({
type:'SET_EXPENSE',
expense
})

  // REMOVE_EXPENSE
  export const removeExpense = ( {id} = {}) => {
   return(dispatch,getState,{getFirestore}) =>{
     const firestore = getFirestore()
      const uid = getState().auth.uid;
   firestore.collection('users').doc(`${uid}`).collection('expenses').doc(id).delete()
      dispatch({type:'REMOVE_EXPENSE', id})
      
  };
}
  // EDIT_EXPENSE
  export const editExpense = (id, updates) => {
   return (dispatch, getState,{getFirestore})=>{
      const firestore=getFirestore()
      const uid = getState().auth.uid;      
      firestore.collection('users').doc(`${uid}`).collection('expenses').doc(id).update({
        ...updates
      }).then(()=>dispatch({type:'EDIT_EXPENSE',id,updates})
      )
   } 
  };

