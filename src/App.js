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
          {randoNumber}
        </p>
        <p style={{visibility: "hidden"}}>
            {setInterval(function(){
              let temp=Math.floor(Math.random()*1000);
                console.log(temp);
                setRandomNumber(temp);
            },2000)}
        </p>
      </header>
    </div>
  );
}

export default App;
