import { createSlice } from "@reduxjs/toolkit";

const todo = createSlice({
    name: "todos",
    initialState:{
        todos:[
            {id:1,task:"Joji Best Songs Collections - Joji Greatest Hits - Joji Songs Full Playlist - The Best Of Joji",description:`Greatest Hits - Joji Songs Full Playlist - The Best Of Joji
            Joji Best Songs Collections - Joji Greatest Hits - Joji Songs Full Playlist - The Best Of Joji 
            Joji Best Songs Collections - Joji Greatest Hits - Joji Songs Full Playlist - The Best Of Joji
            https://youtu.be/81AShKbT_TY
            Thank you so much for this Timestamps @ Shakhrrri
            0:00 w̲i̲l̲l̲ h̲e̲
            3:22 s̲l̲o̲w̲ d̲a̲n̲c̲i̲n̲g̲ i̲n̲ t̲h̲e̲ d̲a̲r̲k 
            6:50 l̲i̲ke̲ y̲o̲u̲ d̲o̲ 
            10:50 e̲w̲
            14:18 m̲o̲d̲u̲s̲
            17:45 r̲u̲n̲
            21:00 t̲e̲s̲t̲ d̲r̲i̲v̲e̲
            24:00 a̲f̲t̲e̲r̲t̲h̲o̲u̲g̲h̲t̲
            27:10 F̲T̲C̲
            29:00 n̲o̲r̲m̲a̲l̲ pe̲o̲pl̲e̲
            31:48 t̲i̲c̲k t̲o̲c̲k
            34:00 n̲i̲t̲r̲o̲u̲s̲
            36:12 g̲i̲m̲m̲e̲ l̲o̲v̲e̲
            39:47 777
            42:47 s̲a̲n̲c̲t̲u̲a̲r̲y̲
            45:48 u̲pg̲r̲a̲d̲e̲
            47:18 d̲a̲y̲l̲i̲g̲h̲t̲
            50:02 y̲o̲u̲r̲ m̲a̲n̲
            52:46 c̲a̲n̲'t̲ g̲e̲t̲ o̲v̲e̲r̲ y̲o̲u̲
            54:57 m̲r̲. h̲o̲l̲l̲y̲w̲o̲o̲d̲
            58:18 r̲e̲a̲n̲i̲m̲a̲t̲o̲r
            1:01:22 w̲i̲n̲d̲o̲w̲
            1:03:53 X̲N̲X̲X̲
            1:06:07 a̲t̲t̲e̲n̲t̲i̲o̲n̲
            1:08:12 d̲e̲m̲o̲n̲s̲
            1:11:15 y̲e̲a̲h̲ r̲i̲g̲h̲t̲
            1:14:09 h̲i̲g̲h̲ h̲o̲pe̲s̲
            1:17:12 y̲o̲u̲ s̲u̲c̲k c̲h̲a̲r̲l̲i̲e̲
            1:18:55 r̲a̲i̲n̲ o̲n̲ me
            1:21:47 P̲i̲l̲l̲s̲
            1:24:44 w̲o̲r̲l̲d̲s̲t̲a̲r̲ m̲o̲n̲e̲y̲ (i̲n̲t̲e̲r̲l̲u̲d̲e̲)
            1:26:48 i̲ d̲o̲n̲'t̲ w̲a̲n̲n̲a̲ w̲a̲s̲t̲e̲ m̲y̲ t̲i̲m̲e̲
            1:29:35 i̲'l̲l̲ s̲e̲e̲ y̲o̲u̲ i̲n̲ 40
            1:33:49 R̲.I̲.P̲
            1:36:28 P̲r̲e̲t̲t̲y̲ b̲o̲y̲
            1:39:04 c̲o̲m̲e̲ t̲hr̲u̲
            1:41:37  m̲e̲d̲i̲c̲i̲n̲e̲
            1:44:08 n̲o̲ fu̲n̲
            1:46:55 g̲i̲m̲m̲e̲ l̲o̲v̲e̲ (l̲i̲v̲e̲ b̲a̲n̲d̲ v̲e̲r̲s̲i̲o̲n̲)
            1:48:38 m̲i̲d̲s̲u̲m̲m̲e̲r̲ m̲a̲d̲n̲e̲s̲s̲
            Thanks for watching!💖 Don't forget to SUBSCRIBE, Like and Share my video if you enjoy it.
            Have a wonderful day!
            📧 CONTACT US: herrkulti@gmail.com
            🔔 Turn on notifications to stay updated with new upload!
            🚫 If you have any problem with copyright issues, please CONTACT US DIRECTLY before doing anything, or question please write to me in email.`}
            
        ]
    },
    reducers:{
        addtodos: (state,{payload:{task,description}})=>{
            state.todos = [...state.todos,{id:(new Date()).getTime(),task,description}]
        },
        deleteTodoById: (state,{payload:{id}})=>{
            state.todos = [...state.todos.filter(item=>item.id+"" !== id)]
        }
    }
})

export const {addtodos,deleteTodoById} = todo.actions

export default todo.reducer