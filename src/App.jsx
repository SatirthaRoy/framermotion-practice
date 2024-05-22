import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [exit, setExit] = useState(false);
  return (
    <div className="h-screen w-screen grid place-content-center">
      <motion.button
        whileHover={{
          scale: 1.06,
        }}
        whileTap={{
          scale: .96
        }}
        transition={{
          ease: 'easeInOut'
        }}
        layout
        onClick={() => setExit(!exit)}
        className="p-4 border bg-red-400 text-white"
      >
        Foosh
      </motion.button>
      <AnimatePresence mode="popLayout">
        {!exit && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 1,
            }}
            animate={{
              rotate: "0deg",
              scale: 1,
              y: [-240, 0, -50, 0],
            }}
            exit={{
              rotate: "0deg",
              scale: 0
            }}
            transition={{
              duration: 0.77,
              ease: "easeInOut",
              times: [0, .35, .65, 1]
            }}
            className="size-48 bg-blue-400"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
