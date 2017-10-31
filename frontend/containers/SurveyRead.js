import React from 'react';
import ReactDOM from 'react-dom';

function SurveyRead({ questions }) {
  return (
      <div>
          {
              questions.map((question) => {
                switch(question.type) {
                  case "checkbox-type":

                    return <p>{question.answer}</p>;
                  case "input-type":
                    return <p>{question.answer}</p>;
                  case "multiple-choice-type":
                    return <p>{question.answer}</p>;
                  case "scale-type":
                    return <p>{question.answer}</p>;
                  case "date-type":
                    return <p>{question.answer}</p>;
                  case "time-type":
                    return <p>{question.answer}</p>;
                  default:
                    return <p>checking</p>;
                }
              })
          }
      </div>
  );
}

export default SurveyRead;
