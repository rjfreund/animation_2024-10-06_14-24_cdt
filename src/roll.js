
function Roll(){
     const [facesOnDie, setFacesOnDie] = useState(6);
     const [numberOfDice, setNumberOfDice] = useState(1);
     const [modifier, setModifier] = useState(0);

     return (<>

          <input
               type="number"
               value={facesOnDie}
               onChange={(e) => setFacesOnDie(e.target.value)}
          />
          <input
               type="number"
               value={numberOfDice}
               onChange={(e) => setNumberOfDice(e.target.value)}
          />
          <input
               type="number"
               value={modifier}
               onChange={(e) => setModifier(e.target.value)}
          />
          <button>Roll</button>

     </>);
}

export default Roll;