import { inject, Injectable } from "@angular/core";
import { Actions,ofType,createEffect } from "@ngrx/effects";
import { UserService } from "src/app/services/user.service";
import * as userActions from "src/app/states/user/user.actions"
import { catchError,mergeMap,of,map, tap } from "rxjs";
import { Router } from "@angular/router";



@Injectable()
export class UserEffects{
    router=inject(Router)
   actions$=inject(Actions);
   userService=inject(UserService);
   $login=createEffect(()=>
this.actions$.pipe(
    ofType(userActions.login),
    mergeMap((action)=> this.userService.onLogin(action.UserName,action.passWord).pipe(
        map((response:any)=>userActions.loginSuccess({
            token: response.token,
            name: response.name,
            place: response.place
        })),
        catchError((error)=>of(userActions.loginFailure({error:error})))
    ))
))

$signUp=createEffect(()=>
    this.actions$.pipe(
        ofType(userActions.signUp),
        mergeMap((action)=>this.userService.onSignUp(action.UserName,action.passWord,action.place).pipe(
            map((response:any)=>userActions.signUpSuccess({
                message:response.message
            })),
            catchError((error)=>of(userActions.signUpFailure({error:error.actionsObserver})))
        ))
    )
)



// navigateAfterLogin$=createEffect(()=>
// this.actions$.pipe(
//     ofType(userActions.loginSuccess),
//     tap(()=>this.router.navigateByUrl("user-list"))
// )
// )

}