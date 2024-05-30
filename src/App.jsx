import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";


const  varients= {
  closeMenuTopLine: {
    rotate: 45,
    y: 8,
    transition: {type: 'spring', duration: 1}
  },
  openMenuLine :  {
    rotate: 0,
    y: 0,
    transition: {type: 'spring', duration: 1}
  },
  closeMenuBottomLine: {
    rotate: -45,
    y: -8,
    transition: {type: 'spring', duration: 1}
  },
  moveMenubuttonToR: {
    x: 160,
    y: -50,
    transition: {duration: .7}
  },
  moveMenubuttonToL: {
    x: 0,
    transition: {duration: .7}
  },
  menuClose: {
    x: window.innerWidth > 767 ? '-50vw' : '-100vw',
    scaleY: .9,
    transition: {ease: 'easeInOut' ,duration: .7}
  },
  menuOpen: {
    x: 0,                                                                             
    transition: {ease: 'easeInOut', duration: .7}
  }
}

const menuItemsVarients = {
  menuClose: {
    y: 130,
    transition: { duration: .7, ease: 'easeInOut'}
  },
  menuOpen: {
    y: 0,
    transition: {delay: .1, duration: .7, ease: 'easeInOut', staggerChildren: .3}
  }
}

const MenuItems = ({children, menuOpen}) => {
  return (
    <div variants={menuItemsVarients} animate={menuOpen ? 'menuOpen' : 'menuClose'} className="clippy overflow-y-hidden"><motion.h1 variants={menuItemsVarients} initial={{y: 0}} animate={menuOpen ? 'menuOpen' : 'menuClose'} className="text-white font-semibold text-4xl md:text-7xl lg:text-9xl">{children}</motion.h1></div>
  )
}

function App() {

  const [menuOpen, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!menuOpen);
    console.log(menuOpen);
  }

  return (
    <div
      className="h-screen overflow-x-hidden bg-slate-500"
    >

      <AnimatePresence mode="sync">
        <motion.div variants={varients} initial={{x: window.innerWidth > 767 ? '-50vw' : '-100vw', scaleY: 1}} animate={menuOpen ? 'menuOpen' : 'menuClose'} exit={{scaleY: 1}} className="p-10 relative h-screen md:w-1/2 bg-[#34360e] grid place-content-center gap-4 rounded-tr-[100px] rounded-br-[100px]">
          <MenuItems menuOpen={menuOpen}>Home</MenuItems>
          <MenuItems menuOpen={menuOpen}>About</MenuItems>
          <MenuItems menuOpen={menuOpen}>Contact</MenuItems>
          <motion.div variants={varients} animate={!menuOpen ? 'moveMenubuttonToR': 'moveMenubuttonToL'} className="absolute top-16 right-24 space-y-3 cursor-pointer" onClick={handleMenu}>
            <motion.div variants={varients} animate={menuOpen ? 'closeMenuTopLine' : 'openMenuLine'} className="bg-white h-1 w-10"></motion.div>
            <motion.div variants={varients} animate={menuOpen ? 'closeMenuBottomLine' : 'openMenuLine'} className="bg-white h-1 w-10"></motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
