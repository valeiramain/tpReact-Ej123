import HolaMundo from "./components/HolaMundo"
import HolaMundo2 from "./components/holaMundo2"
import HolaMundo3 from "./components/HolaMundo3"

function App() {

  const saludo = 'My Friend'
  return (
    <>
      <HolaMundo></HolaMundo>
      <HolaMundo2 saludo={saludo}></HolaMundo2>
      <HolaMundo3 saludo={saludo}></HolaMundo3>
    </>
  )
}

export default App
