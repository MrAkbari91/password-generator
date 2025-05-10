// components/CopyButton.jsx
import { useContext } from "react";
import { AlertContext } from "../context/AlertContext";

const CopyButton = ({ textToCopy }) => {
  const { showAlert } = useContext(AlertContext);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      showAlert("success", "Password copied to clipboard!");
    } catch (err) {
      showAlert("error", "Failed to copy text.");
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="w-full rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
    >
      Copy
    </button>
  );
};

export default CopyButton;
