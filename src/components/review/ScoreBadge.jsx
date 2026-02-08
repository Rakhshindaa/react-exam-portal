const ScoreBadge = ({ score }) => {
    const isGood = score >= 50;
  
    return (
      <div className={`score-badge ${isGood ? "good" : "bad"}`}>
        Score: {score}%
      </div>
    );
  };
  
  export default ScoreBadge;
  