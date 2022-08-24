import { motion } from "framer-motion";

const Alert = ({ setIsHidden }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsHidden(false)}
      className="z-10 fixed flex justify-center items-center w-screen h-screen bg-slate-900 bg-opacity-10"
    >
      <div className="z-20 flex justify-center items-center bg-slate-200  w-2/3 h-1/3">
        <h1>Hello, world!</h1>
        filer
      </div>
    </motion.div>
  );
};

export default Alert;
