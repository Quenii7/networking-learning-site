import { useState } from 'react';
import { useProgress } from '../context/ProgressContext';

export default function Quiz({ module }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { recordQuizScore } = useProgress();

  const score = module.quiz.reduce((acc, item, idx) => {
    if (answers[idx] === item.answer) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    recordQuizScore(module.id, score, module.quiz.length);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 border-t pt-4">
      <h4 className="text-lg font-semibold">Quick Quiz</h4>
      {module.quiz.map((item, idx) => (
        <div key={item.question} className="mt-3 rounded-lg bg-slate-50 p-3">
          <p className="font-medium">{item.question}</p>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {item.options.map((option) => (
              <label key={option} className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name={`${module.id}-${idx}`}
                  value={option}
                  onChange={() => setAnswers((prev) => ({ ...prev, [idx]: option }))}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        className="mt-4 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600"
        type="submit"
      >
        Submit Quiz
      </button>
      {submitted && (
        <p className="mt-2 text-sm font-semibold text-slate-700">
          You scored {score}/{module.quiz.length}
        </p>
      )}
    </form>
  );
}
