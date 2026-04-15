"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed inset-0 bg-[#0b1c3d] flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.1 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          repeatType: "reverse",
        }}
      >
        <img src="/logo.jpeg" className="h-20" alt="Logo" />
      </motion.div>
    </motion.div>
  );
}