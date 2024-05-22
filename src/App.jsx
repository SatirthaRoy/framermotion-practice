import { motion, MotionConfig, useAnimationControls } from "framer-motion"

function App() {
  const controls = useAnimationControls();
  const handleClick = () =>{
    controls.start('flip')
  }
  return (
    <div className="w-screen h-screen grid place-content-center gap-4">
      
      <MotionConfig transition={{
        duration: .2,
        ease: 'easeInOut'
      }}>
        <motion.button onClick={handleClick} whileHover={{borderRadius: '10px', scale: 1.1}} className="p-4 bg-orange-400 text-white font-semibold">Flip</motion.button>
      </MotionConfig>
      <motion.div
      className="size-28 bg-blue-400"
      variants={{
        initial: {
          rotate: '0deg'
        },
        flip: {
          rotate: '360deg'
        }
      }}
      transition={{
        duration: .5,
        ease: 'easeOut'
      }}
      initial='initial'
      animate={controls}
      >

      </motion.div>
    </div>
  )
}

export default App
