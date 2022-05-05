import Die from "./components/Die";
import {nanoid} from "nanoid"
import {useState, useEffect} from "react"

function App() {

  const [dice, setDice] = useState(newArrayDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(()=>{
    for(let i =0 ;i<dice.length ; i++){
      
    }
  },[dice])

  function generateNewDie(){
    return {
      value: Math.floor(Math.random() * 6 + 1),
      isHold: false,
      id: nanoid()
    }
  }

  function newArrayDice() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(generateNewDie())
    }
    return arr;
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
        return die.isHold ? 
            die :
            generateNewDie()
    }))
}

  function holdDice(id){
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? 
          {...die, isHold: !die.isHold} :
          die
  }))
  }




  

  


  const numbers = dice.map((die) =>{
    return <Die 
    value={die.value} 
    key={die.id} 
    held={die.isHold}
    holdDice={()=> holdDice(die.id)}
    />
  })

  return (
    <main>
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="die">
          {numbers}
      </div>

      <button onClick={(rollDice)} >Roll</button>
    </main>
  );
}

export default App;
