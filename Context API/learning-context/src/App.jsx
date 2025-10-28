
import './App.css'
import Login from './Context/Login'
import Profile from './Context/Profile'
import UseContextProvider from './Context/UseContextProvider'
import TodoApp from './Todo/Todo.jsx'
import Todos from './Todo/Todos'

function App() {


  return (
    // <UseContextProvider>
    //   <h1>Lets Begin</h1>
    //   <Login />
    //   <Profile />
    //   <h3>End</h3>
    // </UseContextProvider>
    <>
      <Todos />
      {/* <TodoApp /> */}
    </>
  )
}

export default App
