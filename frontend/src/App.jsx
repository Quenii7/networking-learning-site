import Dashboard from './components/Dashboard';
import ModuleCard from './components/ModuleCard';
import SubnetPractice from './components/SubnetPractice';
import { ProgressProvider, useProgress } from './context/ProgressContext';
import { modules } from './data/modules';

function LearningApp() {
  const { progress, markLessonComplete, completionRate } = useProgress();

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
      <header className="rounded-xl bg-gradient-to-r from-teal-700 to-sky-600 p-6 text-white">
        <h1 className="text-3xl font-bold">Networking Learning Hub</h1>
        <p className="mt-2 max-w-2xl text-sm sm:text-base">
          A beginner-friendly path through networking fundamentals with bite-sized lessons,
          quizzes, and subnetting drills.
        </p>
      </header>

      <Dashboard completionRate={completionRate} progress={progress} />
      <SubnetPractice />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-800">Learning Modules</h2>
        <div className="grid gap-4 lg:grid-cols-2">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} onComplete={markLessonComplete} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <ProgressProvider>
      <LearningApp />
    </ProgressProvider>
  );
}
