import React from 'react'
import {motion} from 'framer-motion'
const App = () => {
  return (
    <div>
      <motion.div className='box' 
      initial ={{scale :0}}
      whileHover={{scale:1.2}}
      whileTap={{scale:0.8}}
      animate={{
        scale: 1,
        x: 1000,
        rotate: 360
      }}
      transition={{ duration: 2}}
      >
      </motion.div>
      <motion.div className='circle' animate={{
        x: 1000
      }}>  
      </motion.div>
    </div>

  )
}

export default App