import React, { useState } from 'react';


export default function ShowQuestion(props) {
	
	const [currentQuestion, setCurrentQuestion] = useState(1);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const questions=props.question;

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
	return (
		<div className='app'>
			{showScore ? (<>
				<div className='score-section'>
					You scored {score} out of {questions.length-1}<br/>
					
				</div>
				{score>((questions.length-1)/2)?<p>
						Good! Your Score Is Above 50%
					</p>:<p>
						Try Again! Your Score Is Below 50%
					</p>}
					<a href='/'>GoTo Home</a>
				</>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion}</span>/{questions.length-1}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion}</span>/{questions.length-1}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}