import { useState } from 'react'

const menuLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/' },
  { label: 'How it works', href: '/' },
  { label: 'Token design', href: '/' },
  { label: 'YARD flywheel', href: '/' },
]

const Header = () => {
  const [active, setActive] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex items-center justify-between py-5 max-w-[1370px] w-full mx-auto relative">
      <a href="/" className="hover:scale-125 transition-all duration-300 hover:rotate-1 min-h-11">
        <img src="/logo.png" alt="Logo" />
      </a>

      <nav className="hidden sm:flex gap-1 mx-auto">
        <ul className="flex gap-2">
          {menuLinks.map((link, index) => (
            <li
              key={link.label}
              className={`font-konnect text-[11px] md:text-[13px] tracking-wider font-medium rounded-[100px] px-2.5 lg:px-[14px] py-2 lg:py-2.5 transition-all duration-300 ${
                active === index
                  ? 'bg-button-dark text-[#FBFBFC] pointer-events-none'
                  : 'bg-transparent text-[#AEB0B1] cursor-pointer hover:bg-button-dark hover:text-text-light'
              }`}
              onClick={() => setActive(index)}
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <button className="hidden sm:block md:hidden bg-button-dark text-[#FBFBFC] font-konnect text-[13px] font-medium rounded-[100px] px-[14px] pb-2.5 pt-[11px] transition-all duration-300">
        Connect
      </button>

      <div className="sm:hidden relative z-30">
        <button className="w-10 h-10 relative z-40" onClick={() => setIsOpen(!isOpen)}>
          <img
            src={isOpen ? '/close.svg' : '/open.svg'}
            alt={isOpen ? 'Close menu' : 'Open menu'}
            className="w-full h-full"
          />
        </button>

        {isOpen && <div className="fixed inset-0 bg-main z-20" onClick={() => setIsOpen(false)} />}

        {isOpen && (
          <ul className="absolute right-0 mt-2 w-48 bg-[#E8E9ED] rounded-[19px] shadow-lg flex flex-col gap-[7px] z-40 px-[15px] py-[13px]">
            {menuLinks.map((link, index) => (
              <li
                key={link.label}
                className={` text-[#7A7A7A] font-konnect hover:bg-button-light cursor-pointer ${
                  active === index ? ' text-[#303030] pointer-events-none' : ''
                }`}
                onClick={() => {
                  setActive(index)
                  setIsOpen(false)
                }}
              >
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <button className=" mt-1 bg-button-dark text-[#FBFBFC] font-konnect text-[13px] font-medium rounded-[100px] px-[14px] pb-2.5 pt-[11px] transition-all duration-300">
              Connect
            </button>
          </ul>
        )}
      </div>
    </div>
  )
}

export default Header
