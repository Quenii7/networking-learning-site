import { modules } from '../data/modules';

export default function Dashboard({ completionRate, progress }) {
  return (
    <section className="rounded-xl bg-white p-5 shadow">
      <h2 className="text-2xl font-bold text-primary">Progress Dashboard</h2>
      <p className="mt-2 text-slate-700">
        Completed lessons: {Object.keys(progress.completedLessons).length}/{modules.length}
      </p>
      <div className="mt-3 h-3 w-full rounded-full bg-slate-200">
        <div
          className="h-3 rounded-full bg-accent transition-all"
          style={{ width: `${completionRate}%` }}
        ></div>
      </div>
      <p className="mt-2 text-sm font-semibold">Overall completion: {completionRate}%</p>
      <ul className="mt-4 grid gap-2 text-sm md:grid-cols-2">
        {modules.map((module) => {
          const quiz = progress.quizScores[module.id];
          return (
            <li key={module.id} className="rounded-lg bg-slate-50 p-3">
              <p className="font-semibold">{module.title}</p>
              <p>
                Lesson: {progress.completedLessons[module.id] ? '✅ Complete' : '⬜ In progress'}
              </p>
              <p>Quiz: {quiz ? `${quiz.score}/${quiz.total}` : 'Not submitted yet'}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
