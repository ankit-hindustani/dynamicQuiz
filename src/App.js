import React, { useState } from 'react';
import {Switch, Route } from 'react-router-dom';
import ShowQuestion from './components/ShowQuestion';
import questionNameList from './questions/questionNameList';
import About from "./components/About";


export default function App() {
  const [isClicked,setIsClicked] = useState(true);
  const [currentTopic,setCurrentTopic]=useState(null);
function HandleClick(topic){
  return (setCurrentTopic(topic),
    setIsClicked(false))
}
	return (
	<>
  <Switch>
    <Route exact path="/About" component={About}/>
  </Switch>
    {questionNameList.map((topic)=>{
      return isClicked?
                <div className="homeQuestionList" >
                <h1>{topic[0].topicName}</h1>
                <p>
                  Total Question: {topic.length-1}
                  <button onClick={()=>HandleClick(topic)}>Click To Start</button>
                  
                </p>
                </div>:
              null
    })}
      { isClicked?
          null:
        <ShowQuestion question={currentTopic}/>}
        
  </>

	);
}