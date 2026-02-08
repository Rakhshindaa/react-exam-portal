const questions = [
    {
      id: 1,
      question: "Which hook is used to manage state in a functional React component?",
      options: ["useRef", "useEffect", "useState", "useContext"],
      correctAnswer: 2,
      explanation: "useState is the primary hook for managing state in functional components."
    },
    {
      id: 2,
      question: "Which company developed React?",
      options: ["Google", "Facebook (Meta)", "Microsoft", "Twitter"],
      correctAnswer: 1,
      explanation: "React was developed by Facebook, now known as Meta."
    },
    {
      id: 3,
      question: "What does JSX stand for?",
      options: [
        "JavaScript XML",
        "Java Syntax Extension",
        "JSON XML",
        "JavaScript Extension"
      ],
      correctAnswer: 0,
      explanation: "JSX stands for JavaScript XML."
    },
    {
      id: 4,
      question: "Which method is used to pass data from parent to child in React?",
      options: ["State", "Props", "Redux", "Context"],
      correctAnswer: 1,
      explanation: "Props are used to pass data from parent to child."
    },
    {
      id: 5,
      question: "Which hook is used for side effects?",
      options: ["useMemo", "useEffect", "useState", "useReducer"],
      correctAnswer: 1,
      explanation: "useEffect handles side effects like API calls."
    },
    {
      id: 6,
      question: "React is mainly used for building?",
      options: [
        "Databases",
        "User Interfaces",
        "Operating Systems",
        "Servers"
      ],
      correctAnswer: 1,
      explanation: "React is a library for building user interfaces."
    },
    {
      id: 7,
      question: "Which keyword is used to create a component in React?",
      options: ["function", "component", "class", "render"],
      correctAnswer: 0,
      explanation: "Components are commonly created using functions."
    },
    {
      id: 8,
      question: "Which hook helps optimize performance by memoizing values?",
      options: ["useEffect", "useMemo", "useState", "useRef"],
      correctAnswer: 1,
      explanation: "useMemo memoizes computed values."
    },
    {
      id: 9,
      question: "What is the virtual DOM?",
      options: [
        "A real DOM copy",
        "A lightweight DOM representation",
        "A database",
        "A server-side DOM"
      ],
      correctAnswer: 1,
      explanation: "Virtual DOM is a lightweight copy used for efficient updates."
    },
    {
      id: 10,
      question: "Which hook gives access to context data?",
      options: ["useState", "useContext", "useEffect", "useRef"],
      correctAnswer: 1,
      explanation: "useContext lets you consume context values."
    }
  ];
  
  export default questions;