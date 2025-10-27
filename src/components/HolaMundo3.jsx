import { useState } from "react";

const HolaMundo3 = ({ saludo }) => {
  const [mensaje, setMensaje] = useState("");

  function cambiarMensaje() {
    if (mensaje === "") {
      setMensaje("(from changed state)");
    } else {
      setMensaje("");
    }
  }

  return (
    <section className="container my-5 border border-primary p-2">
      <h1 className="display-6 mb-3">Hello {saludo} {mensaje}👋!</h1>
      <button className="btn btn-primary" onClick={cambiarMensaje}>
        Click Me
      </button>
    </section>
  );
};

export default HolaMundo3;
