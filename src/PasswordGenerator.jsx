import { useState, useEffect, useCallback, useContext } from "react";
import CopyButton from "./components/CopyButton";
import Refresh from "/refresh.svg";
import { AlertContext } from "./context/AlertContext";

const PasswordGenerator = () => {
  const { showAlert } = useContext(AlertContext);

  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);
  const [strengthMessage, setStrengthMessage] = useState("");

  const toggles = [
    {
      label: "Include Uppercase",
      checked: includeUppercase,
      onChange: setIncludeUppercase,
    },
    {
      label: "Include Lowercase",
      checked: includeLowercase,
      onChange: setIncludeLowercase,
    },
    {
      label: "Include Numbers",
      checked: includeNumbers,
      onChange: setIncludeNumbers,
    },
    {
      label: "Include Symbols",
      checked: includeSymbols,
      onChange: setIncludeSymbols,
    },
  ];

  const symbols = "!@#$%^&*()_-+|<>?";
  const numbers = "0123456789";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const generatePassword = useCallback(() => {
    let chars = "";
    if (includeLowercase) chars += lowercase;
    if (includeUppercase) chars += uppercase;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
    evaluateStrength(newPassword);
  }, [
    password,
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  ]);

  const evaluateStrength = (pwd) => {
    const score = [
      pwd.length >= 8,
      pwd.length >= 8 && /\d/.test(pwd),
      pwd.length >= 8 && /[!@#$%^&*()_+|<>?]/.test(pwd),
      pwd.length >= 8 && /[a-z]/.test(pwd) && /[A-Z]/.test(pwd),
      pwd.length >= 12 &&
        /\d/.test(pwd) &&
        /[!@#$%^&*()_+|<>?]/.test(pwd) &&
        /[a-z]/.test(pwd) &&
        /[A-Z]/.test(pwd),
    ].reduce((acc, curr) => acc + (curr ? 1 : 0), 0);

    const messages = ["Very Weak", "Weak", "Good", "Strong", "Very Strong"];
    setStrength(score);
    setStrengthMessage(messages[Math.min(score, messages.length - 1)]);
  };

  const getStrengthColor = () => {
    switch (strength) {
      case 0:
        return "bg-red-500 w-1/5";
      case 1:
        return "bg-orange-500 w-2/5";
      case 2:
        return "bg-yellow-400 w-3/5";
      case 3:
        return "bg-lime-400 w-4/5";
      case 4:
        return "bg-green-500 w-full";
      case 5:
        return "bg-green-500 w-full";
      default:
        return "bg-gray-200 w-1/5";
    }
  };
  const CopyPassword = async () => {
    try {
      await navigator.clipboard.writeText(password);
      showAlert("success", "Password copied to clipboard!");
    } catch (err) {
      showAlert("error", "Failed to copy text.");
    }
  };

  useEffect(() => {
    generatePassword();
  }, [
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  ]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10 transition-colors">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-gray-800">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800 dark:text-white">
          Password Generator
        </h2>

        <div className="mb-5 flex items-center justify-between rounded-lg bg-gray-100 px-3 py-4 text-center text-lg break-words text-gray-900 dark:bg-gray-700 dark:text-white cursor-pointer">
          <span onClick={CopyPassword} className="w-11/12">{password || "Generated Password"}</span>
          <span onClick={generatePassword}>
            <img src={Refresh} className="w-5" />
          </span>
        </div>

        <div className="mb-2 h-3 w-full overflow-hidden rounded-2xl bg-gray-200">
          <div
            className={`h-full rounded-2xl transition-all duration-300 ${getStrengthColor()}`}
          />
        </div>

        <p className="mb-4 text-center text-sm font-medium text-gray-800 dark:text-gray-300">
          Strength: <span className="font-bold">{strengthMessage}</span>
        </p>

        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
            Length: {length}
          </label>
          <input
            type="range"
            min="5"
            max="50"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-purple-500"
          />
        </div>

        <div className="mb-4 flex items-center justify-between">
          <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
            Password Length
          </label>
          <div className="relative flex max-w-[8rem] items-center">
            <button
              type="button"
              onClick={() => setLength(Math.max(5, length - 1))}
              className="h-10 rounded-s-lg border border-gray-300 bg-gray-100 p-2 text-gray-900 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              -
            </button>
            <input
              type="number"
              min="5"
              max="50"
              value={length}
              onChange={(e) =>
                setLength(Math.max(5, Math.min(50, Number(e.target.value))))
              }
              className="h-10 w-full appearance-none border-t border-b border-gray-300 bg-gray-50 text-center text-sm text-gray-900 [-moz-appearance:textfield] dark:border-gray-600 dark:bg-gray-700 dark:text-white [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            <button
              type="button"
              onClick={() => setLength(Math.min(50, length + 1))}
              className="h-10 rounded-e-lg border border-gray-300 bg-gray-100 p-2 text-gray-900 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              +
            </button>
          </div>
        </div>

        <div className="mb-5 space-y-3">
          {toggles.map(({ label, checked, onChange }, i) => (
            <label
              key={i}
              className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-100 p-3 dark:bg-gray-700 dark:text-white"
            >
              <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                {label}
              </span>
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="peer sr-only"
              />
              <div className="peer relative h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-purple-500 peer-focus:ring-4 peer-focus:ring-purple-300 peer-focus:outline-none after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-600 dark:peer-checked:bg-purple-600 dark:peer-focus:ring-purple-700"></div>
            </label>
          ))}
        </div>

        <div className="mb-4 flex justify-center">
          <CopyButton textToCopy={password} />
        </div>

        {/* <div className="flex justify-center">
          <button
            onClick={generatePassword}
            className="w-full rounded-lg bg-purple-600 px-4 py-2 font-bold text-white hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 focus:outline-none dark:focus:ring-purple-800"
          >
            Regenerate Password
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default PasswordGenerator;
