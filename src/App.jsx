import { useContext } from 'react';
import { QuizContext } from './context/quiz';
import Welcome from './components/Welcome';
import Question from './components/Question';
import PickCategory from './components/PickCategory';
import GameOver from './components/GameOver';
import './App.css'

function App() {
  
  const [quizState, dispatch] = useContext(QuizContext);

  return (
      <div class="App">
        <h1>Quiz Vite + React</h1>
        {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PickCategory />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
      </div>
  )
}

export default App
