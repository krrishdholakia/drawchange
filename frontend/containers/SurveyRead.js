import React from 'react';
import ReactDOM from 'react-dom';

function SurveyRead({ questions }) {
  return (
      <div>
          {
              questions.map((question) => {
                switch(question.type) {
                  case "checkbox":
                    return <p>test</p>;
                default:
                    return <p>checking</p>;
                }
            })
          }
      </div>
  )
}

export default SurveyRead;
