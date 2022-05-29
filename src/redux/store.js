import { configureStore } from "@reduxjs/toolkit"
import todoStore from "./todoStore"

export const store = ()=>{
    const init = configureStore({
        reducer: {
            todos: todoStore
        }
    })
    return init
}