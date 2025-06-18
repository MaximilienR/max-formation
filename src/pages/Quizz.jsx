import { useState, useRef, useEffect } from "react";
import questions from "../data/quizz.json";
import html2pdf from "html2pdf.js";
import confetti from "canvas-confetti";
import Certificat from "./Certificat"; // 🔹 Vérifie le chemin

export default function Quizz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const certificateRef = useRef(null);

  const question = questions[currentQuestionIndex];
  const { question: intitule, reponses, bonneReponse } = question;

  const handleAnswerClick = (reponseChoisie) => {
    setSelectedAnswer(reponseChoisie);

    const isCorrect = reponseChoisie === bonneReponse || Number(reponseChoisie) === bonneReponse;
    if (isCorrect) setScore((prev) => prev + 1);
  };

  const handleNext = () => {
    setSelectedAnswer(null);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setFinished(true);
    }
  };

  const handleDownload = () => {
    const element = certificateRef.current;
    html2pdf().from(element).save("certificat.pdf");
  };

  // 🎆 Feux d’artifice si score parfait et quiz fini
  useEffect(() => {
    if (finished && score === questions.length) {
      const duration = 2 * 1000;
      const animationEnd = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });

        if (Date.now() < animationEnd) {
          requestAnimationFrame(frame);
        }
      };

      frame();
    }
  }, [finished, score]);

  if (finished) {
    return (
      <div className="flex flex-col items-center px-12">
        <div className="container mx-auto p-4 bg-sky-900 rounded-2xl font-['Josefin_Sans'] text-[#dfe4ea] mt-30 mb-30 text-center">
          <h1 className="mb-6 text-3xl font-bold text-yellow-400">Quiz Terminé !</h1>
          <p className="mb-4 text-2xl text-white">
            Votre score final est {score} / {questions.length}
          </p>
          {score === questions.length && (
            <>
              <div ref={certificateRef}>
                <Certificat />
              </div>
              <button
                onClick={handleDownload}
                className="px-4 py-2 mt-6 font-bold text-white transition bg-yellow-500 rounded hover:bg-yellow-600"
              >
                Télécharger le certificat
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center px-12">
      <div className="container mx-auto p-4 bg-sky-900 rounded-2xl font-['Josefin_Sans'] text-[#dfe4ea] mt-30 mb-30">
        <h1 className="mt-4 text-3xl font-bold text-center text-yellow-400">
          Quizz
        </h1>
        <p className="mt-1 text-sm text-center text-amber-50">
          Question {currentQuestionIndex + 1} sur {questions.length}
        </p>

        <h2 className="text-2xl font-bold text-[#ffa502] text-center mt-10 mb-8">
          {intitule}
        </h2>

        <div className="flex flex-wrap justify-center max-w-xl gap-4 mx-auto">
          {reponses.map((reponse, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(reponse)}
              disabled={selectedAnswer !== null}
              className={`flex-1 basis-[45%] min-w-[200px] h-20 rounded px-4 py-2 font-semibold text-lg transition duration-500 active:scale-90
                ${
                  selectedAnswer
                    ? reponse === bonneReponse
                      ? "bg-green-400 text-black"
                      : reponse === selectedAnswer
                      ? "bg-red-400 text-white"
                      : "bg-[#dfe4ea] text-black"
                    : "bg-[#dfe4ea] text-black hover:bg-[#ffa502]"
                }
              `}
            >
              {reponse}
            </button>
          ))}
        </div>

        {selectedAnswer !== null && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleNext}
              className="rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-black shadow hover:bg-[#8ccf64] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              {currentQuestionIndex + 1 === questions.length ? "Terminer" : "Question suivante"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
