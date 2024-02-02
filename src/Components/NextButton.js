export default function NextButton({ dispatch, answer }) {
  if (answer === null) return null;
  console.log("->", typeof dispatch);
  // console.log(answer);
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}
