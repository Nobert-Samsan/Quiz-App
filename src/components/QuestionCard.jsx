import React from "react";
import "./QuestionCard.css";

const QuestionCard = ({question,options,onSelectOption}) => {
    return(

        <div className="question-card">
        
            <h2 className="quesion">{question}</h2>
            <div className="options">
                {options.map((option,index)=>(
                    <button key={index} className="option-button" onClick={()=>onSelectOption(option)}>
                        {option}
                    </button>
                )
                
                )}

            </div>
        
        </div>
    );
};

export default QuestionCard;