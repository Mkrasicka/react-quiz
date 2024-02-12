function Progress({ index, numQuestions, points, maxPoints, answer }) {
  return (
    <header className="progress">
      {/* converting bollean to number. if false it will be 0 , if true it will be 1 */}
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints} points
      </p>
    </header>
  );
}

export default Progress;
