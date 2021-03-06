import React, {useState} from "react";
import  styles from'./Practica.module.css';
import {useHistory} from "react-router-dom";

export function PRS(){
    let history = useHistory();
    const questions = [
		{
			questionText: '7-1',
			answerOptions: [
				{ answerText: '9', isCorrect: false },
				{ answerText: '2', isCorrect: false },
				{ answerText: '3', isCorrect: false },
				{ answerText: '6', isCorrect: true },
			],
		},
		{
			questionText: '2-1',
			answerOptions: [
				{ answerText: '1', isCorrect: true },
				{ answerText: '3', isCorrect: false },
				{ answerText: '0', isCorrect: false },
				{ answerText: '2', isCorrect: false },
			],
		},
		{
			questionText: '5-5',
			answerOptions: [
				{ answerText: '0', isCorrect: true },
				{ answerText: '1', isCorrect: false },
				{ answerText: '2', isCorrect: false },
				{ answerText: '5', isCorrect: false },
			],
		},
		{
			questionText: '8-3',
			answerOptions: [
				{ answerText: '4', isCorrect: false },
				{ answerText: '2', isCorrect: false },
				{ answerText: '5', isCorrect: true },
				{ answerText: '1', isCorrect: false },
			],
		},
		{
			questionText: '7-5',
			answerOptions: [
				{ answerText: '4', isCorrect: false },
				{ answerText: '5', isCorrect: false },
				{ answerText: '3', isCorrect: false },
				{ answerText: '2', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);



	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
			
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
    return  (
		
        <div className = {styles.ini}>
		
			<button className = {styles.botonAtras} onClick ={
                 ()=>{
                     history.push("/resta");
                 }         
             }>
                🠔atras
            </button>
			<h1 className={styles.tituloP}>RESTA - NIVEL SEMILLA</h1>
        <div className={styles.ap}>
			{showScore ? (
				<div className={styles.scoresection}>
					<p className={styles.respuesta}>Tu puntuacion es:</p>
					<p className={styles.respuesta}>{score} sobre {questions.length}</p>
				</div>
			) : (
				<>
					<div className={styles.questionsection}>
						<div className={styles.questioncount}>
							<h1 className={styles.titulo}>Pregunta {currentQuestion + 1}/{questions.length}</h1>	
						</div>
						<div className={styles.questiontext}>{questions[currentQuestion].questionText}</div>
					</div>
					<div className={styles.answersection}>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className = {styles.bt} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
                      
				</>
			)}
		</div>
        </div>
    );
    
}
export default PRS;

