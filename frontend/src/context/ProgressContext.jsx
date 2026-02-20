import { createContext, useContext, useMemo, useState } from 'react';
import { modules } from '../data/modules';

const ProgressContext = createContext(null);

const initialProgress = () => {
  const stored = localStorage.getItem('networking-progress');
  if (stored) {
    return JSON.parse(stored);
  }
  return {
    completedLessons: {},
    quizScores: {}
  };
};

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(initialProgress);

  const saveProgress = (next) => {
    setProgress(next);
    localStorage.setItem('networking-progress', JSON.stringify(next));
  };

  const markLessonComplete = (moduleId) => {
    saveProgress({
      ...progress,
      completedLessons: {
        ...progress.completedLessons,
        [moduleId]: true
      }
    });
  };

  const recordQuizScore = (moduleId, score, total) => {
    saveProgress({
      ...progress,
      quizScores: {
        ...progress.quizScores,
        [moduleId]: { score, total }
      }
    });
  };

  const completionRate = useMemo(() => {
    const done = Object.keys(progress.completedLessons).length;
    return Math.round((done / modules.length) * 100);
  }, [progress.completedLessons]);

  return (
    <ProgressContext.Provider
      value={{ progress, markLessonComplete, recordQuizScore, completionRate }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
