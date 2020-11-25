import React, { useState } from 'react';
import ShowQuestion from './components/ShowQuestion';
import questionNameList from './questions/questionNameList';



export default function App() {
  const [isClicked,setIsClicked] = useState(true);
  const [currentTopic,setCurrentTopic]=useState(null);
function HandleClick(topic){
  return (setCurrentTopic(topic),
    setIsClicked(false))
}
	return (
	<>
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