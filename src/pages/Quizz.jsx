import { useState, useRef, useEffect } from "react";
import questions from "../data/quizz.json";
import html2pdf from "html2pdf.js";
import confetti from "canvas-confetti";
import { createCertificat } from "../api/certificat.api";
export default function Quizz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [pseudo, setPseudo] = useState("");

  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const certificateRef = useRef(null);

  const question = questions[currentQuestionIndex];
  const { question: intitule, reponses, bonneReponse } = question;

  const handleAnswerClick = (reponseChoisie) => {
    setSelectedAnswer(reponseChoisie);

    const isCorrect =
      reponseChoisie === bonneReponse ||
      Number(reponseChoisie) === bonneReponse;
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

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.pseudo) setPseudo(user.pseudo);
    }
  }, []);

  // 🎆 Feux d’artifice si score parfait et quiz fini
  useEffect(() => {
    if (finished && score === questions.length) {
      // 🎉 Confettis
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

      // 🟢 Enregistrer le certificat en BDD
      const userName = pseudo;
      createCertificat({
        name: userName,
        date: new Date().toISOString(), // Facultatif si la BDD gère la date
      })
        .then(() => console.log("Certificat enregistré 🎓"))
        .catch((error) =>
          console.error("Erreur lors de la création du certificat :", error)
        );
    }
  }, [finished, score]);

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
              {currentQuestionIndex + 1 === questions.length
                ? "Terminer"
                : "Question suivante"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
