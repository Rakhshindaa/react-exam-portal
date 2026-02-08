const ReviewPanel = ({ question, selected }) => {
    return (
      <div className="review-panel">
        <h3>{question.question}</h3>
  
        {question.options.map((opt, index) => {
          let className = "review-option";
  
          if (index === question.correctAnswer) {
            className += " correct";
          } else if (index === selected) {
            className += " wrong";
          }
  
          return (
            <div key={index} className={className}>
              {opt}
            </div>
          );
        })}
      </div>
    );
  };
  
  export default ReviewPanel;
  