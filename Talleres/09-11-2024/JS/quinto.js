 // Ejemplo 1
 
 function CounterExample() {
    const [count, setCount] = React.useState(0);

    return (
      <div style={{ margin: "20px 0" }}>
        <h2>Ejemplo 1: Contador</h2>
        <p>Cuenta: {count}</p>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Decrementar</button>
      </div>
    );
  }

  // Ejemplo 2

  function TextTransformExample() {
    const [text, setText] = React.useState("");

    const handleTextChange = (e) => {
      const value = e.target.value;
      setText(value.toUpperCase());
    };

    return (
      <div style={{ margin: "20px 0" }}>
        <h2>Ejemplo 2: Transformar Texto</h2>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Escribe aquí"
        />
      </div>
    );
  }

  // Ejemplo 3

  function ToggleImageExample() {
    const [isFirstImage, setIsFirstImage] = React.useState(true);

    const toggleImage = () => {
      setIsFirstImage(!isFirstImage);
    };

    return (
      <div style={{ margin: "20px 0" }}>
        <h2>Ejemplo 3: Cambiar Imagen</h2>
        <img
          src={isFirstImage ? "https://i.pinimg.com/236x/e3/96/d9/e396d9b3967cd31da26b4a929dc5b8f9.jpg" : "https://i.pinimg.com/564x/b4/a6/b0/b4a6b0ba384cf7a802a5f81f99be588d.jpg"}
          alt="Ejemplo Imagen"
          onClick={toggleImage}
          style={{ cursor: "pointer" }}
        />
        <p>Haz clic en la imagen para cambiarla</p>
      </div>
    );
  }

  function App() {
    return (
      <div>
        <h1>Ejemplos de Reactividad en React</h1>
        <CounterExample />
        <TextTransformExample />
        <ToggleImageExample />
      </div>
    );
  }

  ReactDOM.render(<App />, document.getElementById("interfaz"));