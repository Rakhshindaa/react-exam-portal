import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Container from "../components/layout/Container";

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        <button
          className="start-btn"
          onClick={() => navigate("/exam")}
        >
          Start Assessment
        </button>
      </Container>
    </>
  );
};

export default StartPage;
