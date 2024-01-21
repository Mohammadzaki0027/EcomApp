import { createSlice } from "@reduxjs/toolkit";

const intialState={
token:"",
isAuth:false,

}

const AuthSlice=createSlice({
    name:"Auth",
    reducers:{
        SignIn(state,action){

        },
        Signup(state,action){

        },
        logOut(state,action){

        }
    }
})

export const {SignIn,Signup,logOut}=AuthSlice.actions

export default AuthSlice.reducer
