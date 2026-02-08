import { useLocation } from "react-router-dom";
import Header from "../components/layout/Header";
import Container from "../components/layout/Container";
import ScoreBadge from "../components/review/ScoreBadge";
import QuestionNavigator from "../components/review/QuestionNavigation";
import ReviewPanel from "../components/review/ReviewPanel";
import questions from "../data/quesions";
import { useState } from "react";

const ReviewPage = () => {
  const { state } = useLocation();
  const answers = state?.answers || {};
  const [current, setCurrent] = useState(0);

  const correctCount = questions.filter(
    (q, index) => answers[index] === q.correctAnswer
  ).length;

  const score = Math.round(
    (correctCount / questions.length) * 100
  );

  return (
    <>
      <Header />
      <Container>
        <div className="review-wrapper">
          <ScoreBadge score={score} />

          <QuestionNavigator
            questions={questions}
            answers={answers}
            onSelect={setCurrent}
          />

          <ReviewPanel
            question={questions[current]}
            selected={answers[current]}
          />
        </div>
      </Container>
    </>
  );
};

export default ReviewPage;
