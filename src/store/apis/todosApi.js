import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


//? Full URL: https://jsonplaceholder.typicode.com/todos

export const todosApi = createApi({

    reducerPath: 'todos',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),

    endpoints: ( builder ) => ({

        getTodos: builder.query({
            query: () => '/todos' //? es donde se apunta despues de la base del url.
        }),

        getTodoById: builder.query({
            query: ( todoId ) => `/todos/${ todoId }` //? es donde se apunta despues de la base del url.
        }),

    })

});

export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;