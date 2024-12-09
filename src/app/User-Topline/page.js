"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const UserTopline = () => {
  const [currentLine, setCurrentLine] = useState(0); // Tracks the currently visible line

  const lines = [
    "🎨 Customizable designs for every occasion.",
    "🌍 Delivery across all locations.",
    "🖼️ Printed with premium quality materials.",
    "SHOP BEST SELLER -10% OFF AT CHECKOUT",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentLine((prev) => (prev + 1) % lines.length); 
    }, 2000); 

    return () => clearTimeout(timer); 
  }, [currentLine]);

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-black text-white p-4  flex items-center justify-center">
      <motion.p
        key={currentLine} 
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center text-lg font-onest"
      >
        {lines[currentLine]}
      </motion.p>
    </div>
  );
};

export default UserTopline;
