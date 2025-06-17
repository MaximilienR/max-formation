import { useState, useRef, useEffect } from "react";
import questions from "../data/quizz.json";
import html2pdf from "html2pdf.js";
import confetti from "canvas-confetti";
import Certificat from "./Certificat"; // 🔹 Vérifie le chemin

export default function Quizz() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(null);
  const certificateRef = useRef(null);

  const question = questions[0];
  const { question: intitule, reponses, bonneReponse } = question;

  const handleAnswerClick = (reponseChoisie) => {
    setSelectedAnswer(reponseChoisie);
    const isCorrect = Number(reponseChoisie) === bonneReponse;
    setScore(isCorrect ? 1 : 0);
  };

  const handleDownload = () => {
    const element = certificateRef.current;
    html2pdf().from(element).save("certificat.pdf");
  };

  // 🎆 Feux d’artifice si score = 1
  useEffect(() => {
    if (score === 1) {
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
  }, [score]);

  return (
    <div className="flex flex-col items-center px-12">
      <div className="container mx-auto p-4 bg-sky-900 rounded-2xl font-['Josefin_Sans'] text-[#dfe4ea] mt-30 mb-30">
        <h1 className="text-3xl text-center mt-4 font-bold text-yellow-400">
          Quizz
        </h1>
        <p className="mt-1 text-sm text-amber-50 text-center">
          Répondez à la question ci-dessous
        </p>

        <h2 className="text-2xl font-bold text-[#ffa502] text-center mt-10 mb-8">
          {intitule}
        </h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-xl mx-auto">
          {reponses.map((reponse, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(reponse)}
              disabled={selectedAnswer !== null}
              className={`flex-1 basis-[45%] min-w-[200px] h-20 rounded px-4 py-2 font-semibold text-lg transition duration-500 active:scale-90
                ${
                  selectedAnswer
                    ? Number(reponse) === bonneReponse
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

        {score !== null && (
          <p className="text-center mt-8 text-2xl font-bold text-white">
            ✅ Votre score est de {score} / 1
          </p>
        )}

        {/* 🔹 Si la réponse est correcte */}
        {score === 1 && (
          <div className="mt-10 w-full text-center">
            <div ref={certificateRef}>
              <Certificat />
            </div>
            <button
              onClick={handleDownload}
              className="mt-6 bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition"
            >
              Télécharger le certificat
            </button>
          </div>
        )}

        <p className="text-[#ffa502] text-lg mt-8 text-center">
          Question 1 sur {questions.length}
        </p>
      </div>
    </div>
  );
}
