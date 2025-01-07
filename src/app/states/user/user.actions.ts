import { createAction,props } from "@ngrx/store";


export const login = createAction(
    '[login component] Login',
    props<{ UserName: string; passWord: string }>() 
  );
  
  export const loginSuccess = createAction(
    '[login component] Login Success',
    props<{ token:string,name:string,place:string }>() 
  );
  
  export const loginFailure = createAction(
    '[login component] Login Failure',
    props<{ error: string }>()
  );

  export const signUp=createAction(
    '[createuser component] signUp',
    props<{UserName:string,passWord:string,place:string}>()
  )
  export const signUpSuccess=createAction(
    '[createuser component] signUp Success',
    props<{message:String}>()
  );
  export const signUpFailure=createAction(
    '[createuser component] signUp Failure',
    props<{error:string}>()
  )