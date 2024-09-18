import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementBy } from './store/slices/counter';


function App() {

  const { counter } = useSelector( state => state.counter );
  const dispatch = useDispatch();


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>count is { counter }</h2>
        <button onClick={ () => dispatch( increment() ) } style={{ marginRight: 5 }}>
          Increment
        </button>
        <button onClick={ () => dispatch( decrement() ) } style={{ marginRight: 5 }}>
          Decrement
        </button>
        <button onClick={ () => dispatch( incrementBy( 2 ) ) } style={{ marginRight: 3 }}>
          Increment by 2
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
