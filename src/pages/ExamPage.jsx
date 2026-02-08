import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Container from "../components/layout/Container";
import QuestionCard from "../components/exam/QuestionCard";
import NavigationBar from "../components/exam/NavigationBar";
import LastQuestionAlert from "../components/exam/LastQuestionAlert";
import questions from "../data/quesions";

const ExamPage = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const isLast = current === questions.length - 1;

  const handleSelect = (optionIndex) => {
    setAnswers({ ...answers, [current]: optionIndex });
  };

  return (
    <>
      <Header />
      <Container>
        <div className="exam-wrapper">
          <QuestionCard
            questionData={questions[current]}
            selectedOption={answers[current]}
            onSelect={handleSelect}
          />

          {isLast && <LastQuestionAlert />}

          <NavigationBar
            isFirst={current === 0}
            isLast={isLast}
            onPrev={() => setCurrent(current - 1)}
            onNext={() => setCurrent(current + 1)}
            onEnd={() => navigate("/review", { state: { answers } })}
          />
        </div>
      </Container>
    </>
  );
};

export default ExamPage;
