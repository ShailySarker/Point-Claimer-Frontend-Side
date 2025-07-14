import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiUrl = import.meta.env.VITE_API_URL;

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl
    }),
    tagTypes: ["users", "leaderboard", "history"],
    endpoints: (builder) => ({

        // get all user
        getAllUser: builder.query({
            query: () => `/users`,
            providesTags: ["users"]
        }),

        // add user
        addUser: builder.mutation({
            query: (name: string) => ({
                url: '/users/add-user',
                method: 'POST',
                body: { name },
            }),
            invalidatesTags: ['users', 'leaderboard']
        }),

        // claim point
        claimPoints: builder.mutation({
            query: (userId: string) => ({
                url: `/users/${userId}/claim`,
                method: 'POST'
            }),
            invalidatesTags: ['users', 'leaderboard', 'history']
        }),

        // get User leaderboard data
        getUserLeaderboardInfo: builder.query({
            query: () => '/users/leaderboard',
            providesTags: ['leaderboard']
        }),

        // get claim history
        getClaimHistory: builder.query({
            query: () => '/history/all-history',
            providesTags: ['history']
        })

    })

});

export const {
    useGetAllUserQuery,
    useAddUserMutation,
    useClaimPointsMutation,
    useGetUserLeaderboardInfoQuery,
    useGetClaimHistoryQuery,
} = baseApi;