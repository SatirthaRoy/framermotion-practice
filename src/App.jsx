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
              scale: 0
            }}
            // animate={{
            //   scale: [1, 2, 2, 1.4, 1],
            //   x: [0, 200, 400, -300, 0],
            //   rotate: [0, 360, 720, -360, 360],
            //   borderRadius: ['0%','50%',' 10%', '20%', '0%'],
            //   backgroundColor: ['#5563e0', '#eb3144', '#d415cd', '#09eb81', '#5563e0']
            // }}
            animate= {{
              scale: 1
            }}
            whileHover={{
              scale: [null, 1.5, 1.4]
            }}
            whileTap={{
              scale: 1
            }}
            exit={{
              scale: 0,
            }}
            transition={{ ease: 'easeInOut', duration: .3 }}
            className="size-14 rounded-lg bg-blue-400"
          ></motion.div>
        )}
    </AnimatePresence>
      </div>
  );
}

export default App;
