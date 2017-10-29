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
                  case "text-type":

                    return <p>{question.answer}</p>;

                  case "paragraph-type":
                    return <p>{question.answer}</p>;
                  case "multiple-choice-type":
                    return <p>{question.answer}</p>;
                  case "list-type":
                    return <p>{question.answer}</p>;
                  case "scale-type":
                    return <p>{question.answer}</p>;
                  case "grid-type":
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
