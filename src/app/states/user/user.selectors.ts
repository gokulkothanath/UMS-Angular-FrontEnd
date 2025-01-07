import { createSelector } from "@ngrx/store";
import { UserSate } from "./user.state";
export const selectorUserState=(state:UserSate)=>state.user
export const selectUserError=createSelector(selectorUserState,(state)=>state.error)
export const selectUserLoad=createSelector(selectorUserState,(state)=>state.loading)
export const selectUserToken=createSelector(selectorUserState,(state)=>state.token)