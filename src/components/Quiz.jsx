import React, { useState } from "react";
import "./Quiz.css";

function Question({ num, question, options, id, handleAnswers }) {
  return (
    <div className="question">
      <p>
        <span>Q{num}:</span> {question}
      </p>
      <div className="optionsContainer">
        {options.map((cur, i) => (
          <div key={i}>
            <input
              onChange={handleAnswers}
              type="radio"
              id={cur}
              name={id}
              value={cur}
            />
            <label htmlFor={cur}>{cur}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

function Quiz() {
  const correctAnswers = {
    q1: "90deg",
    q2: "one right angle",
    q3: "Equilateral triangle",
    q4: "a + b + c",
    q5: "30deg",
  };

  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  });

  const [result, setResult] = useState(null);

  const handleAnswers = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    let count = 0;
    setResult(null);
    Object.keys(answers).forEach((cur) => {
      if (correctAnswers[cur] === answers[cur]) count++;
    });
    setResult(count);
  };

  return (
    <div className="quizContainer">
      <h1>Take a quiz on triangles to check your knowledge out</h1>
      <div className="questionsContainer">
        <Question
          num={1}
          key={"q1"}
          question=" What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?"
          options={["45deg", "90deg", "60deg"]}
          id={"q1"}
          handleAnswers={handleAnswers}
        />
        <Question
          num={2}
          key={"q2"}
          question="A triangle can have"
          options={["one right angle", "two right angle"]}
          id={"q2"}
          handleAnswers={handleAnswers}
        />
        <Question
          num={3}
          question="Which of the following triangles are always similar?"
          key={"q3"}
          options={["Equilateral triangle", "Isosceles triangle"]}
          id={"q3"}
          handleAnswers={handleAnswers}
        />
        <Question
          num={4}
          question="The perimeter of scalene triangle with sides a, b, c is"
          key={"q4"}
          options={["a + b + c", "2a", "None of these"]}
          id={"q4"}
          handleAnswers={handleAnswers}
        />
        <Question
          num={5}
          key={"q5"}
          question="If the largest angle in a triangle is 70°, what is the least possible value of the smallest angle of the triangle?"
          options={["30deg", "10deg"]}
          id={"q5"}
          handleAnswers={handleAnswers}
        />
      </div>
      <div className="buttonContainer">
        <button onClick={handleSubmit}>Submit</button>
        {result !== null && <p>{result} / 5</p>}
      </div>
    </div>
  );
}

export default Quiz;
