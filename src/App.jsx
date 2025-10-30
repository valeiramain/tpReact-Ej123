import HolaMundo from "./components/HolaMundo"
import HolaMundo2 from "./components/holaMundo2"
import HolaMundo3 from "./components/HolaMundo3"

function App() {

  const saludo = 'My Friend'
  return (
    <main className="my-5 text-center">
      <section className="container border border-primary mb-3">
        <h2 className="text-primary mt-2">Ejercicio 1</h2>
        <HolaMundo></HolaMundo>
      </section>

      <section className="container border border-primary mb-3">
        <h2 className="text-primary mt-2">Ejercicio 2</h2>
        <HolaMundo2 saludo={saludo}></HolaMundo2>
      </section>

      <section className="container border border-primary mb-3">
        <h2 className="text-primary mt-2">Ejercicio 3</h2>
        <HolaMundo3 saludo={saludo}></HolaMundo3>
      </section>
    </main>
  )
}

export default App
