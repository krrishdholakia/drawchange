import React from 'react';
import ReactDOM from 'react-dom';

function SurveyRead(questions) {
  console.log(questions);
  const questionVal = questions.map((question) => {
    switch(question.type) {
      case "checkbox":
        return <p>test</p>;
    }
    return <p>checking </p>;
  });
  return questionVal;
}
export default SurveyRead;