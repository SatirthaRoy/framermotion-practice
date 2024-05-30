import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [scale, setScale] = useState(1);
  const [x, setX] = useState(null);
  const [show, setShow] = useState(true);

  const keyClick = (e) => {
    console.log(e.key);
    if (e.key === "ArrowUp") {
      setScale(scale + 2);
    }
    if (e.key === "ArrowDown") {
      setScale(scale - 3);
    }
    if (e.key === "ArrowRight") {
      setX(x + 100);
    }
    if (e.key === "ArrowLeft") {
      setX(x - 100);
    }
    if (e.key === "0") {
      setShow(!show);
    }
  };

  return (
    <div
        tabIndex="0"
        onKeyUpCapture={keyClick}
        className="grid place-content-center h-screen overflow-hidden"
      >
    <AnimatePresence mode="sync">
        {show && (
          <motion.div
            initial={{
              x: 100,
            }}
            animate={{
              scale: scale,
              x: x,
            }}
            exit={{
              scale: 0,
            }}
            transition={{ type: "spring", duration: 2 }}
            className="size-14 rounded-lg bg-blue-400"
          ></motion.div>
        )}
    </AnimatePresence>
      </div>
  );
}

export default App;
