const OptionItem = ({ text, isSelected, onClick }) => {
    return (
      <div
        className={`option ${isSelected ? "selected" : ""}`}
        onClick={onClick}
      >
        {text}
      </div>
    );
  };
  
  export default OptionItem;
  