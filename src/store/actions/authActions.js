import firebase from "../../config/fbConfig";
import { dispatch } from "rxjs/internal/observable/pairs";



export const Login = (uid) => {
    console.log("login action:", uid)
    return {
        type: 'LOGIN',
        uid
    }
}

export const LogOut = () => {
    return firebase.auth().signOut().then(() => {

        return dispatch({ type: 'LOGOUT' })
    })

}





