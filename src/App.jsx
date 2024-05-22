import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion"
import { useEffect } from "react"
import { useRef } from "react"

function App() {
  const {scrollYProgress} = useScroll()

  const ref = useRef();
  let background = useTransform(scrollYProgress, [0, .5, 1], ['#f21b1b', '#eff21b', '#1bf222'])

  const isInview = useInView(ref, {once: true})

  useEffect(() => {
    console.log('is in view --> ', isInview);
  }, [isInview])

  return (
    <>
      <motion.div className="scale-0 origin-left w-full h-3 bg-red-500 fixed top-0"
        style={{
          scaleX: useSpring(scrollYProgress),
          background
        }}
      ></motion.div>
      <div style={{
        height: '200vh'
      }} className="w-screen">
      </div>
      <div style={{height: '100vh'}} className="grid place-content-center w-screen">
        <motion.div className="size-40 bg-green-500 rounded-full"
        initial={{scale: 1}}
        whileInView={{
          scale: 2
        }}
        transition={{duration: .5}}
        ></motion.div>
      </div>
      <motion.div ref={ref} className="w-full h-screen bg-red-400"
        initial={{opacity: 1}}
        animate={{opacity: isInview ? 0 : 1}}
        transition={{
          duration: 1
        }}
      ></motion.div>
    </>
  )
}

export default App
