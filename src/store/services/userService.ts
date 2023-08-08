import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const userService = createApi({
    reducerPath: "userService",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001",
        prepareHeaders: (headers, { getState }) => {
            const state = getState() as RootState;
            console.log("State is: ")
            console.log(state.userSlice)
            headers.set("X-TENANT-ID", state.userSlice.token);
            return headers;
        }
    }),
    tagTypes: ["user"],
    endpoints: (builder) => ({})
})