import React, { useState,useEffect } from 'react';
import Progress from 'react-progressbar';


export default function ShowQuestion(props) {

	const [seconds, setSeconds] = useState(5);	
	const [currentQuestion, setCurrentQuestion] = useState(1);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [completedPBar,setCompletedPBar]=useState(90);
	const questions=props.question;

	useEffect(() => {
		const interval = setInterval(() => {
		  setSeconds(seconds => seconds - 1);
		}, 1000);
		return ()=>
				clearInterval(interval);		
	  }, []);


	useEffect(() => {
		const interval = setInterval(() => {
			setCompletedPBar(completedPBar => completedPBar - 3);
		}, 1000);
		return ()=>
				clearInterval(interval);		
	  }, [currentQuestion]);


	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCompletedPBar(completedPBar=>90);
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{seconds<1 ?(<>
				{showScore ? (<>
				<div className='score-section'>
					You scored {score} out of {questions.length-1}<br/>
					
				</div>
				{score>((questions.length-1)/2)?<p>
						Good! Your Score Is Above <strong>50%</strong>
					</p>:<p>
						Try Again! Your Score Is Below <strong>50%</strong>
					</p>}
					<a href='/'>GoTo Home</a>
				</>
			) : (
				<>
					
					<div className='question-section'>
						<Progress completed={completedPBar} />
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
			)}</>):(<div className='timer-text'>
						<h1>Starting in {seconds} seconds</h1>
					</div>)}
			
		</div>
	);
}