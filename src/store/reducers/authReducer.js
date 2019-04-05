const initState = {}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN':
    
    return {
      uid:action.uid
      
    };

   case 'LOGOUT':
   return{};
   
    default:
    return state;
}
  
};
export default authReducer
