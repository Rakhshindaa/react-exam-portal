import OptionItem from "./OptionItem";

const QuestionCard = ({
  questionData,
  selectedOption,
  onSelect,
}) => {
  return (
    <div className="question-card">
      <h2 className="question-text">{questionData.question}</h2>

      <div className="options">
        {questionData.options.map((opt, index) => (
          <OptionItem
            key={index}
            text={opt}
            isSelected={selectedOption === index}
            onClick={() => onSelect(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
