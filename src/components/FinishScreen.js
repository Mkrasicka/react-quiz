function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage === 100) {
    emoji = "🎉";
  } else if (percentage >= 80 && percentage < 100) {
    emoji = "👍";
  } else if (percentage >= 60 && percentage < 80) {
    emoji = "🤔";
  } else {
    emoji = "🤦‍♀️";
  }

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You got <strong>{points}</strong> out of{" "}
        <strong>{maxPoints}</strong>
        points ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
