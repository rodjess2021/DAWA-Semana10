import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import imagen from './image/luismiguel.jpg'
import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <Header/>
      <h1><strong>primer componente de rodjess</strong></h1>
      <img width={100} height={100} src={imagen} alt=""/>
      <p>1990</p>
      <Footer/>

    </div>
  );
}

export default App;
