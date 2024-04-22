
import './App.css';

function App() {
  return (
   <>
    <header class="header">
    <a id="a" href="#"><img class="imagenlogo" /></a>
    <div class="navi">
        <ul class="ul">
        <li><a id="a" href="#">Inicio</a></li>
        <li><a id="a" href="#">Secciones</a></li>
        <li><a id="a" href="#">Preguntas Frecuentes</a></li>
        <li><a id="a" href="#">Contacto</a></li>
        </ul>   
    </div> 
    <hr />
    </header>
    <main class="main">
      <div class="contenedor_principal">  <h1>contenedor_principal</h1>
        <div class="contenedor_a">
          <div class="cajita_1"><h1>cajita_1</h1></div>
          <div class="cajita_2"><h1>cajita_2</h1></div>
          <div class="cajita_3"><h1>cajita_3</h1></div>
        </div>
        <div class="contenedor_b"><h1>contenedor_b"</h1></div>
        </div>
      <aside class="contenedor_lateral"><h1>contenedor_lateral</h1>
        <div class="cajita_4"><h1>cajita_4</h1></div>
        <div class="cajita_5"><h1>cajita_5</h1></div>
        <div class="cajita_6"><h1>cajita_6</h1></div>
      </aside>
    </main>
   </>
  );
}

export default App;
