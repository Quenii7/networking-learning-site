import Quiz from './Quiz';

export default function ModuleCard({ module, onComplete }) {
  return (
    <article className="rounded-xl bg-white p-5 shadow">
      <h3 className="text-xl font-bold text-primary">{module.title}</h3>
      <p className="mt-1 text-sm text-slate-600">{module.summary}</p>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-slate-800">
        {module.lesson.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <button
        onClick={() => onComplete(module.id)}
        className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800"
      >
        Mark Lesson Complete
      </button>
      <Quiz module={module} />
    </article>
  );
}
