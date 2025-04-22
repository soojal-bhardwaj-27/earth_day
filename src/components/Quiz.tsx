import React, { useState } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: "When was the first Earth Day celebrated?",
      options: ["1960", "1970", "1980", "1990"],
      correctAnswer: 1
    },
    {
      question: "Who founded Earth Day?",
      options: ["Gaylord Nelson", "Rachel Carson", "John Muir", "Al Gore"],
      correctAnswer: 0
    },
    {
      question: "How many countries participate in Earth Day celebrations?",
      options: ["Over 100", "Over 150", "Over 190", "Over 200"],
      correctAnswer: 2
    },
    {
      question: "What was the primary motivation for creating Earth Day?",
      options: ["Ocean pollution", "Air pollution", "Environmental education", "Climate change"],
      correctAnswer: 1
    },
    {
      question: "Which significant environmental law was passed after the first Earth Day?",
      options: ["Clean Water Act", "Clean Air Act", "Endangered Species Act", "All of the above"],
      correctAnswer: 3
    },
    {
      question: "What percentage of the Earth's surface is covered by water?",
      options: ["50%", "61%", "71%", "81%"],
      correctAnswer: 2
    },
    {
      question: "How many trees are cut down every year?",
      options: ["5 billion", "10 billion", "15 billion", "20 billion"],
      correctAnswer: 2
    },
    {
      question: "What percentage of marine life is threatened by plastic pollution?",
      options: ["50%", "60%", "70%", "80%"],
      correctAnswer: 2
    },
    {
      question: "How many species go extinct every day?",
      options: ["50-100", "100-150", "150-200", "200-250"],
      correctAnswer: 1
    },
    {
      question: "What percentage of the world's oxygen is produced by the Amazon rainforest?",
      options: ["10%", "15%", "20%", "25%"],
      correctAnswer: 2
    }
  ];

  const handleAnswerClick = (selectedAnswer: number) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <section id="quiz" className="py-20 bg-green-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Earth Day Quiz</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {showScore ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Quiz Complete!</h3>
              <p className="text-xl mb-6">Your score: {score} out of {questions.length}</p>
              <button
                onClick={handleRetakeQuiz}
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Retake Quiz
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-8">
                <p className="text-sm text-gray-500 mb-2">Question {currentQuestion + 1} of {questions.length}</p>
                <h3 className="text-xl font-semibold mb-4">{questions[currentQuestion].question}</h3>
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerClick(index)}
                      className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-green-50 hover:border-green-500 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;