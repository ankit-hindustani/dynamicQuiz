import React, { useState,useEffect } from 'react';
import Progress from 'react-progressbar';


export default function ShowQuestion(props) {

	const [seconds, setSeconds] = useState(5);	
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [completedPBar,setCompletedPBar]=useState(99);
	const questions=props.question;

		
	
	
	useEffect(() => {
		//question shuffle 
		questions.splice(0, 1);
		questions.sort(() => Math.random() - 0.5);
		questions.splice(10); //question trim


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
			if(completedPBar>0){
				setScore(score + 1);
			}
			
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
					You scored {score} out of {questions.length}<br/>
					
				</div>
				{score>((questions.length)/2)?<p>
						Good! Your Score Is Above <strong>50%</strong>
					</p>:<p>
						Try Again! Your Score Is Below <strong>50%</strong>
					</p>}
					<a href='/'>GoTo Home</a>
				</>
			) : (
				<>
					
					<div className='question-section'>
					<p style={{color:'red'}}>Note: You will not get marks if the deadline expires.</p>
						<Progress completed={completedPBar} />
						<div className='question-count'>
							<span>Question {currentQuestion+1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className="custom-btn" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}</>):(<div className='timer-text'>
						<h1>Starting in {seconds} seconds</h1>
					</div>)}
			
		</div>
	);
}