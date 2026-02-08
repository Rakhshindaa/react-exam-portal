const QuestionNavigator = ({
    questions,
    answers,
    onSelect,
  }) => {
    return (
      <div className="question-nav">
        {questions.map((q, index) => {
          const isCorrect =
            answers[index] === q.correctAnswer;
  
          return (
            <div
              key={q.id}
              className={`q-number ${
                isCorrect ? "correct" : "incorrect"
              }`}
              onClick={() => onSelect(index)}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
    );
  };
  
  export default QuestionNavigator;
  