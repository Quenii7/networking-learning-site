import { useState } from 'react';
import { checkSubnetAnswer, getSubnetChallenge } from '../utils/subnetting';

export default function SubnetPractice() {
  const [challenge, setChallenge] = useState(getSubnetChallenge());
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    setResult(checkSubnetAnswer(challenge, answer));
  };

  return (
    <section className="rounded-xl bg-white p-5 shadow">
      <h3 className="text-xl font-bold text-primary">Subnetting Practice Generator</h3>
      <p className="mt-2 text-sm text-slate-700">
        For network <span className="font-semibold">{challenge.network}</span>, how many usable hosts
        are available?
      </p>
      <form onSubmit={submit} className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          className="rounded-lg border border-slate-300 px-3 py-2"
          type="number"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter usable hosts"
        />
        <button type="submit" className="rounded-lg bg-primary px-4 py-2 text-white">
          Check
        </button>
        <button
          type="button"
          onClick={() => {
            setChallenge(getSubnetChallenge());
            setAnswer('');
            setResult(null);
          }}
          className="rounded-lg bg-slate-200 px-4 py-2"
        >
          New Challenge
        </button>
      </form>
      {result !== null && (
        <p className={`mt-2 text-sm font-semibold ${result ? 'text-green-700' : 'text-rose-700'}`}>
          {result ? 'Correct! Nice job.' : `Not quite. Correct answer: ${challenge.usableHosts}`}
        </p>
      )}
    </section>
  );
}
