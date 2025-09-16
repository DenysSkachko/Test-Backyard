import { motion } from 'framer-motion'

const Hero = () => {
  const textVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  }

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
  }

  return (
    <section className="max-w-[1370px] flex justify-between mx-auto mt-[23px] sm:mt-15.5 lg:mt-40">
      <motion.div
        className="flex flex-col gap-9.5 sm:gap-8.5 lg:gap-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={textVariants}
      >
        <div>
          <h1 className="leading-[110%] font-semibold text-[58px] sm:text-[48px] md:text-[72px] xl:text-[90px] text-main flex flex-wrap max-w-5xl">
            The yield-backed stablecoin protocol boosting
            <span>
              DeFi
              <img
                src="/hero-img.png"
                alt=""
                width={60}
                height={60}
                className="inline align-middle ml-4 sm:hidden"
              />
            </span>{' '}
            <span>&nbsp;</span> liquidity
          </h1>
          <h3 className="text-alt text-xl sm:text-base md:text-2xl mt-4 font-gilroy">
            Keep your yield working for you — we keep your liquidity accessible
          </h3>
        </div>

        <div className="flex gap-2 sm:gap-5">
          <button className="font-semibold text-text-light leading-[140%] tracking-[2%] px-7.5 sm:px-27 py-[17.5px] rounded-[38px] noise-dark hover:bg-button-dark hover:scale-105 cursor-pointer transition-all duration-300">
            <a href="">Join Wishlist</a>
          </button>
          <button className="font-semibold text-text-dark leading-[140%] tracking-[2%]  px-4.5 sm:px-15.5 py-[17.5px] rounded-[38px] noise-light hover:scale-105 cursor-pointer transition-all duration-300 flex items-center gap-2.5">
            Read docs{' '}
            <span className="block sm:hidden">
              <img src="/arrow.svg" alt="" />
            </span>
          </button>
        </div>
      </motion.div>

      <motion.div
        className="hidden sm:block mr-3.5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={imageVariants}
      >
        <img src="/hero-img.png" alt="" />
      </motion.div>
    </section>
  )
}

export default Hero
