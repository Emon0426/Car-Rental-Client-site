import React from 'react'
import { motion } from 'framer-motion'

const NewsLetter = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center space-y-2"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="md:text-4xl text-2xl font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Never Miss a Deal!
      </motion.h1>

      <motion.p
        className="md:text-lg text-gray-500/70 pb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Subscribe to get the latest offers, new arrivals, and exclusive discounts
      </motion.p>

      <motion.form
        className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <input
          className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
          type="text"
          placeholder="Enter your email id"
          required
        />

        <motion.button
          type="submit"
          className="md:px-12 px-8 h-full text-white bg-indigo-500 hover:bg-indigo-600 transition-all cursor-pointer rounded-md rounded-l-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Subscribe
        </motion.button>
      </motion.form>
    </motion.div>
  )
}

export default NewsLetter
