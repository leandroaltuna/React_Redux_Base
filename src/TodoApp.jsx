import { useState } from 'react';
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis';


export const TodoApp = () => {
    
    const [todoId, setTodoId] = useState(1);
    const { data: todo, isLoading } = useGetTodoByIdQuery( todoId );

    // const { data: todos = [], isLoading } = useGetTodosQuery();

    const nextTodo = () => {
        setTodoId( todoId + 1 );
    }

    const prevTodo = () => {
        if ( todoId === 1 ) return;
        setTodoId( todoId - 1 );
    }

    return (
        <>
            <h1>ToDo - RTK Query</h1>
            <hr />
            <h4>Loading: { isLoading ? 'True' : 'False' }</h4>

            <pre style={{ color: 'green', fontSize: 15 }} >
                { JSON.stringify( todo ) }
            </pre>

            <button style={{ marginRight: 10 }} onClick={ prevTodo }>
                Previous ToDo
            </button>
            <button onClick={ nextTodo }>
                Next ToDo
            </button>

            {/* <ul>
                {
                    todos.map( todo => (
                        <li key={ todo.id }>
                            <strong> { todo.completed ? 'Done' : 'Pending' } </strong>
                            { todo.title }
                        </li>
                    ))
                }
            </ul> */}


        </>
    )

}