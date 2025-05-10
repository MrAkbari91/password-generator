import { useState } from "react";
import "./App.css";
import PasswordGenerator from "./PasswordGenerator";
import Alert from "./components/Alert";
import { AlertContext } from './context/AlertContext';


function App() {
   const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  
  return (
    <AlertContext.Provider value={{ showAlert }}>
      <PasswordGenerator />
      {alert && <Alert alert={alert} />}
    </AlertContext.Provider>
  );
}

export default App;
