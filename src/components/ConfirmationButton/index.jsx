import toast, { Toaster } from "react-hot-toast";

export function ConfirmationButton(props) {
  function handleConfirmation() {
    toast((t) => (
      <span>
        {props.confirmationText}
        <button onClick={() => toast.dismiss(t.id)}>Não</button>{" "}
        <button
          onClick={() => {
            props.functionForExecution();
            toast.dismiss(t.id);
          }}
        > Sim </button>
      </span>
    ));
  }

  return (
    <>
      <Toaster />
      <button onClick={handleConfirmation}>{props.children}</button>
    </>
  );
}
