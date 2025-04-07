import { useState } from "react";
import { Link } from "react-router";

const Play = () => {
  const selections: string[] = ["rock", "paper", "scissors"];
  const [userSelection, setUserSelection] = useState("?");
  const [comSelection, setComSelection] = useState("?");
  const [winningMessage, setWinningMessage] = useState("Make a choice to begin!");
  const [userScore, setUserScore] = useState(0)
  const [comScore, setComScore] = useState(0)

  function handleClickSelection(selection: string) {
    
    const randomNumber: number = Math.floor(Math.random() * selections.length);
    const computerSelection: string = selections[randomNumber]; // Store computer's selection immediately
    setComSelection(computerSelection);
    setUserSelection(selection);

    if (selection === computerSelection) {
      setWinningMessage("It is a draw!");
    } else if (
      (selection === "rock" && computerSelection === "scissors") ||
      (selection === "paper" && computerSelection === "rock") ||
      (selection === "scissors" && computerSelection === "paper")
    ) {
      setWinningMessage("Congrats! You win!");
      setUserScore(prevScore => prevScore + 1);
    
    } else {
      setWinningMessage("You Lost :( Com has won!");
      setComScore(prevScore => prevScore + 1);
    }
  }

  function handleClickReset() {
    setComScore(0)
    setUserScore(0)
    setUserSelection('?')
    setComSelection('?')
    setWinningMessage('Make a choice to begin!')
  }

  return (
    <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center mb-5 text-2xl">
            <p>User : Com</p>
            <p>{userScore} : {comScore}</p>
        </div>
      <p className="text-2xl">Pick your choice</p>
      <section className="flex justify-between w-[80%] max-w-[500px] my-4">
        <button className="w-[100px] " onClick={() => {handleClickSelection("rock")}}>🪨</button>
        <button className="w-[100px]" onClick={() => {handleClickSelection("paper")}}>📄</button>
        <button className="w-[100px]" onClick={() => {handleClickSelection("scissors")}}>✂️</button>
      </section>
      <p>you have chosen {userSelection}</p>
      <p>computer has chosen {comSelection}</p>
      {winningMessage}
      <section className="flex w-[300px] justify-between mt-4">
        <Link to='/'><button>Back to home</button></Link>
      <button  onClick={handleClickReset}>Reset</button>
      </section>
      
    </div>
  );
};

export default Play;
