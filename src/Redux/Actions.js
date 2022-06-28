import * as types from "./ActionType"
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";

const getUsers=(users)=>({
    type:types.GET_USERS,
    payload:users,
});

const userDeleted=()=>({
    type:types.DELETE_USER
})

const userAdded=()=>({
    type:types.Add_USER
})

const getUser=(user)=>({
    type:types.GET_SINGLE_USER,
    payload:user,
})

const userUpdated=()=>({
    type:types.UPDATE_USER,
})

export const loadUsers=(id)=>{
    return function (dispatch){
        axios
            .get( `http://localhost:8080/data`)
            .then((resp)=>{
                console.log("resp",resp);
                dispatch(getUsers (resp.data))
            })
            .catch((error)=>console.log(error));
    }
}
export const deleteUser=(id)=>{
    return function (dispatch){
        axios
            .delete(`http://localhost:8080/data/${id}` )
            .then((resp)=>{
                console.log("resp",resp);
                dispatch(userDeleted ())
                dispatch(loadUsers())
            })
            .catch((error)=>console.log(error));
    }
}
export const addUser=(user)=>{
    return function (dispatch){
        axios
            .post(`http://localhost:8080/data`,user)
            .then((resp)=>{
                console.log("resp",resp);
                dispatch(userAdded ())
                dispatch(loadUsers())
            })
            .catch((error)=>console.log(error));
    }
}
export const getSingleUser=(id)=>{
    return function (dispatch){
        axios
            .get(`http://localhost:8080/data/${id}`)
            .then((resp)=>{
                console.log("resp",resp);
                dispatch(getUser(resp.data))
            })
            .catch((error)=>console.log(error));
    }
}
export const updateUser=(user,id)=>{
    console.log("useractions",user)
    console.log("idactions",id)
    return function (dispatch){
        axios
            .put(`http://localhost:8080/data/${id}`,user)
            .then((resp)=>{
                console.log("resp",resp);
                dispatch(userUpdated())
            })
            .catch((error)=>console.log(error));
    }
}