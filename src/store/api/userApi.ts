import { userService } from "../services/userService";

export const userApi = userService.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => {
                return {
                    url: `/users`,
                    method: 'GET'
                }
            }
        })
    })
});

export const { useGetUserQuery, useLazyGetUserQuery } = userApi