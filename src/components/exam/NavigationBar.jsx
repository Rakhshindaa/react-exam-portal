const NavigationBar = ({
    isFirst,
    isLast,
    onPrev,
    onNext,
    onEnd,
  }) => {
    return (
      <div className="nav-bar">
        <button
          className="btn prev"
          disabled={isFirst}
          onClick={onPrev}
        >
          Prev
        </button>
  
        {!isLast ? (
          <button className="btn next" onClick={onNext}>
            Next
          </button>
        ) : (
          <button className="btn next" onClick={onEnd}>
            Submit
          </button>
        )}
  
        <button className="btn end" onClick={onEnd}>
          End
        </button>
      </div>
    );
  };
  
  export default NavigationBar;
  