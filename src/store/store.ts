import { configureStore } from "@reduxjs/toolkit";
import userSlice from './slices/userSlice';
import { userService } from "./services/userService";

export const store = configureStore({
    reducer: {
        [userService.reducerPath]: userService.reducer,
        userSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userService.middleware)
});

export type RootState = ReturnType<typeof store.getState>;