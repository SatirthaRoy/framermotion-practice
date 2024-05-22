import { motion, MotionConfig } from "framer-motion"

function App() {
  const handleClick = () =>{

  }
  return (
    <div className="w-screen h-screen grid place-content-center gap-4">
      
      <MotionConfig transition={{
        duration: .2,
        ease: 'easeInOut'
      }}>
        <motion.button whileHover={{borderRadius: '10px', scale: 1.1}} className="p-4 bg-orange-400 text-white font-semibold">Flip</motion.button>
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
      whileHover='flip'
      >

      </motion.div>
    </div>
  )
}

export default App
