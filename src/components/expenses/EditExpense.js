import React from 'react'

const EditExpense=(props)=>{
    console.log(props);

    return(<div>
        <h1>EditExpense</h1>
        <h3>id: {props.match.params.id}</h3>
        </div>
    )

}

export default EditExpense;