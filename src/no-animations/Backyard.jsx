import { useState } from 'react'
import HowItWorks from './HowItWorks'

const backyardItems = [
  {
    video: '/grow-1.mp4',
    number: 1,
    label: 'Yield Aggregator',
    title: 'One-click yield aggregation',
    text: 'Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity',
  },
  {
    video: '/grow-2.mp4',
    number: 2,
    label: 'Yield-backed Stablecoin',
    title: 'Unlock liquidity with BYD',
    text: 'Mint BYD against your yield-generating LP tokens to stay liquid and productive at the same time',
  },
  {
    video: '/grow-3.mp4',
    number: 3,
    label: 'Boost DeFi Liquidity',
    title: 'Boost protocols, earn more',
    text: 'Your liquidity empowers DeFi — vote for pools, earn bribes, and maximize your rewards.',
  },
]

const Backyard = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="mt-17 sm:mt-30 lg:mt-33 max-w-[1370px] mx-auto">
      <h2 className="text-[28px] sm:text-5xl font-bold leading-[110%] text-main">
        What is Backyard?
      </h2>

      <div className="md:hidden relative mt-10 overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {backyardItems.map(item => (
            <div
              key={item.number}
              className="flex-shrink-0 w-full px-2 sm:flex sm:flex-row-reverse items-center justify-between"
            >
              <div className="relative">
                <video
                  src={item.video}
                  className="mx-auto rounded-lg max-w-62"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <div className="w-full sm:max-w-[388px] -mt-11 sm:mt-0 relative">
                <div className="bg-form p-3 flex rounded-[45px] mt-3 w-full">
                  <span className="bg-main rounded-full text-[#FBFBFC] h-[33px] w-[33px] flex items-center justify-center">
                    {item.number}
                  </span>
                  <h4 className="text-xl mx-auto font-gilroy">{item.label}</h4>
                </div>
                <div className="bg-form rounded-[31px] px-6 py-5 mt-3">
                  <h4 className="text-lg font-extrabold text-[#2D322F]">{item.title}</h4>
                  <p className="text-sm text-[#787878] font-gilroy-m">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-start mt-4 ml-5 sm:ml-7 gap-2">
          {backyardItems.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-7 h-1 rounded-[148px] transition-all duration-300 cursor-pointer ${
                currentSlide === idx ? 'bg-[#5D625F]' : 'bg-[#979797]'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="hidden md:flex justify-between mt-10">
        {backyardItems.map(item => (
          <div key={item.number} className="max-w-[310px]">
            <div className="relative">
              <video
                src={item.video}
                className="mx-auto rounded-lg"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="bg-form p-3 flex rounded-[45px] mt-3 absolute bottom-0 w-full">
                <span className="bg-main rounded-full text-[#FBFBFC] h-[33px] w-[33px] flex items-center justify-center">
                  {item.number}
                </span>
                <h4 className="text-xl mx-auto font-gilroy">{item.label}</h4>
              </div>
            </div>
            <div className="bg-form rounded-[31px] px-8 py-7.5 mt-3">
              <h4 className="text-lg font-extrabold text-[#2D322F]">{item.title}</h4>
              <p className="text-sm text-[#787878] font-gilroy-m">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <HowItWorks />
    </section>
  )
}

export default Backyard
