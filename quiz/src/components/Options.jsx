import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import './Options.css'

const Options = ({ option, onSelectOption, answer }) => {

    const [quizState, dispatch] = useContext(QuizContext)

    return (
        <div
            className={
                `option ${
                    quizState.answerSelected && option === answer ? 'correct' : ''
                } ${quizState.answerSelected && option !== answer ? 'wrong' : ''}`
            }
            onClick={() => onSelectOption()}
        >
            <p>{option}</p>
        </div>
    )
}

export default Options