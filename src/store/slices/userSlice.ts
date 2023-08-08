import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    token: ""
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        }
    }
});

export const { setName, setToken } = userSlice.actions
export default userSlice.reducer