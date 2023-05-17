import toast, { Toaster } from "react-hot-toast";

export function ConfirmationButton(props) {
  function handleConfirmation() {
    toast((t) => (
      <span className="bg-green-300 text-green-800 rounded-sm p-4 flex gap-2">
        {props.confirmationText}
        <button onClick={() => toast.dismiss(t.id)} className="bg-orange-100 text-orange-900 px-4 py-2 rounded-md">Não</button>
        <button
          onClick={() => {
            props.functionForExecution();
            toast.dismiss(t.id);
          }} className="bg-green-100 text-green-900 px-4 py-2 rounded-md"
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
