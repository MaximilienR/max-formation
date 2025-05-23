import questions from "../data/quizz.json";
export default function Quizz() {
  const question = questions[0]; // Tu pourras le rendre dynamique plus tard
  const { question: intitule, reponses } = question;

  return (
    <div className="min-h-screen bg-slate-800 text-[#dfe4ea] grid place-items-center font-['Josefin_Sans']">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold uppercase text-center mb-12">
          Quizz <span className="text-[#ffa502]">JS</span>
        </h1>

        <h2 className="text-2xl font-bold text-[#ffa502] text-center mb-8">
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

        <p id="progress" className="text-[#ffa502] text-lg mt-8">
          Question 1 sur {questions.length}
        </p>
      </div>
    </div>
  );
}
