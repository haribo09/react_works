import './App.css'
import BankReducer from './components/BankReducer'
import CountReducer from './components/CountReducer'
import CountRef from './components/CountRef'
import InputFocus from './components/InputFocus'
import User from './context/User'

function App() {

  return (
    <>
      <section className="app">
        {/* <h2>성능 최적화 - hook</h2> */}
        {/* <CountRef /> */}
        {/* <InputFocus /> */}
        {/* <CountReducer /> */}
        {/* <BankReducer /> */}
        <User />
      </section>
    </>
  )
}

export default App
