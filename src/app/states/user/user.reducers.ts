import { createReducer,on } from "@ngrx/store"
import * as userActions from "./user.actions"


 export interface userState{
    token:String|null;
    error:String|null;
    loading:boolean;
    name:string|null;
    place:string|null
}
export interface signUpState{
    message:String|null;
    error:string|null;
    signingUp:boolean
}
export const initialState:userState={
    token:null,
    error:null,
    loading:false,
    name:null,
    place:null
}

export const initialSignUpState:signUpState={
    message:null,
    error:null,
    signingUp:false
}

export const userReducer=createReducer(initialState,
    on(userActions.login,state=>({...state,loading:true,error:null})),
    on(userActions.loginFailure,(state:any,{error})=>({...state,loading:false,error:error})),
    on(userActions.loginSuccess,(state,{token,name,place})=>({...state,loading:false,error:null,token:token,name:name,place:place}))
)
export const signUpReducer=createReducer(initialSignUpState,
    on(userActions.signUp,state=>({...state,signingUp:true})),
    on(userActions.signUpFailure,(state,{error})=>({...state,signingUp:false,error:error})),
    on(userActions.signUpSuccess,(state,{message})=>({...state,signingUp:false,message:message}))
)