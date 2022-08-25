import { motion } from "framer-motion";

const Alert = ({ setIsHidden }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsHidden(false)}
      className="z-10 fixed flex justify-center items-center w-screen h-screen bg-gray-900 bg-opacity-20"
    >
      <div className="z-20 flex flex-col justify-center items-center bg-white rounded-3xl shadow-xl w-2/3 h-1/3">
        <h1 className=" mt-24">Hello, world!</h1>
        <button className="bg-gray-100 mt-auto mb-8 w-32 px-4 py-2 rounded-lg">
          Ok
        </button>
      </div>
    </motion.div>
  );
};

export default Alert;
