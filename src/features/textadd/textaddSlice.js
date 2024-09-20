import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState ={
    todos: []
};
export const textaddSlice = createSlice({
    name: 'textBoxes',
    initialState,
    reducers: {
        addTextBox : (state, action) =>{
            
            state.todos.push(action.payload);
        },
        updateTextBox :(state,action) =>{
            state.todos = state.todos.map((todo)=>{
                if (todo.id === action.payload.id){
                    todo.text=action.payload.text
                }
                return todo;
            })
        },
        deleteTextBox :(state, action) =>{
            state.todos= state.todos.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const {addTextBox, updateTextBox, deleteTextBox} = textaddSlice.actions

export default textaddSlice.reducer;