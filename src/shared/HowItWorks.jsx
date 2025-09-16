'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const socials = [
  { label: 'telegram', image: '/socials/tg.svg', link: 'https://denys-skachko.vercel.app/' },
  { label: 'discord', image: '/socials/disc.svg', link: 'https://denys-skachko.vercel.app/' },
  { label: 'x', image: '/socials/x.svg', link: 'https://denys-skachko.vercel.app/' },
  { label: 'linkedin', image: '/socials/linked.svg', link: 'https://denys-skachko.vercel.app/' },
]

const leftVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
}

const rightVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

const HowItWorks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="flex flex-col md:flex-row gap-[17px] mt-17 sm:my-33 md:my-36.5 pb-9">
        <motion.div
          className="bg-dark-works lg:rounded-[40px] rounded-4xl px-6 py-5 sm:p-9 sm:pb-10 md:pl-7.5 md:pt-6 lg:pt-[35px] lg:pb-6.5 lg:px-10.5 how-it-works-bg lg:max-w-[468px] flex flex-col sm:flex-row md:flex-col justify-between gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={leftVariants}
        >
          <div className="flex flex-col gap-3 sm:gap-1">
            <div className="flex justify-between">
              <h2 className="text-[28px] sm:text-[42px] lg:text-5xl font-bold text-white whitespace-nowrap">
                How it works
              </h2>
              <button className="cursor-pointer sm:hidden" onClick={() => setIsModalOpen(true)}>
                <img src="/play.png" alt="Play" width={40} height={40} />
              </button>
            </div>

            <p className="text-[#787878] text-[16px] lg:text-xl font-gilroy-m lg:font-gilroy">
              See how BYD and YARD work together to unlock yield and stability
            </p>
          </div>

          <div className="flex flex-col gap-7 sm:justify-between">
            <div className="flex gap-5 sm:gap-3 items-center justify-start sm:justify-end md:justify-center">
              {socials.map(social => (
                <a
                  key={social.label}
                  href={social.link}
                  className="w-6 h-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={social.image}
                    alt={social.label}
                    className="object-contain h-full w-full hover:scale-125 transition-all duration-300"
                  />
                </a>
              ))}
            </div>

            <button className="font-semibold text-text-dark leading-[140%] tracking-[2%] px-20.5 sm:px-17 lg:px-27 py-[17.5px] whitespace-nowrap rounded-[38px] noise-light-big w-full cursor-pointer hover:bg-alt2 hover:scale-105 transition-all duration-300">
              Join Wishlist
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hidden sm:block bg-dark-works rounded-[46px] max-w-[885px] md:min-h-[476px] px-0 pt-0 lg:px-30 lg:pt-11 how-it-works-bg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={rightVariants}
        >
          <img src="/how-it-works.png" alt="" className="object-contain w-full h-full" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 flex bg-main/30 items-center justify-center z-50 px-4 sm:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="rounded-[40px] w-fit max-h-[600px] h-full overflow-hidden"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={e => e.stopPropagation()}
            >
              <img
                src="/how-it-works-mob.png"
                alt="How it works"
                className="object-contain w-full h-full rounded-[40px]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default HowItWorks
