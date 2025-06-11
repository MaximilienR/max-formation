import questions from "../data/quizz.json";

export default function Quizz() {
  const question = questions[0]; // Tu pourras le rendre dynamique plus tard
  const { question: intitule, reponses } = question;

  return (
    <div className="flex justify-center px-12">
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
              className="flex-1 basis-[45%] min-w-[200px] h-20 rounded bg-[#dfe4ea] text-black font-semibold text-lg px-4 py-2 hover:bg-[#ffa502] transition duration-500 active:scale-90"
            >
              {reponse}
            </button>
          ))}
        </div>

        <p id="progress" className="text-[#ffa502] text-lg mt-8 text-center">
          Question 1 sur {questions.length}
        </p>
      </div>
    </div>
  );
}
