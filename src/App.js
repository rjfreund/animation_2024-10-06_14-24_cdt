import logo from './2024-10-05.png';
import './App.css';
import anime from "animejs";
import React,{useEffect,useState} from "react";



function App() {

  const [animationRef,setAnimationRef]=useState();
  const [randoNumber, setRandomNumber]=useState(0);

  useEffect(() =>
  {
    setAnimationRef(
      anime({
        targets: 'div',
        //translateX: 250,
        rotate: '2turn',
        backgroundColor: '#FFF',
        duration: anime.stagger(2000),
        loop: true
      })
    );
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {setInterval(function(){setRandomNumber(Math.floor(Math.random()*1000))},1000)}
        </p>
      </header>
    </div>
  );
}

export default App;
