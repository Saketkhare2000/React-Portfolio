import {motion} from 'framer-motion';
import React, {useState} from 'react';

function Toggle({children, title}) {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ''}

      <motion.div layout className="faq-line"></motion.div>
    </motion.div>
  );
}

export default Toggle;
