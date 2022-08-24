import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Alert from "./components/Alert";

function App() {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <button
        className="border-2 border-slate-500 border-solid px-5 py-2 rounded-2xl"
        onClick={() => setIsHidden(true)}
      >
        Click me
      </button>
      <AnimatePresence>
        {isHidden && <Alert setIsHidden={setIsHidden} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
