"use client"

import { useState, useEffect, useMemo } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const menuItems = useMemo(
    () => [
      { name: "Home", to: "hero" },
      { name: "What I Do", to: "what-i-do" },
      { name: "Skills", to: "skills" },
      { name: "Experience", to: "experience" },
      { name: "Projects", to: "projects" },
      { name: "Contact", to: "contact" },
    ],
    [],
  )

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      const active = menuItems.find(({ to }) => {
        const element = document.getElementById(to)
        if (element) {
          const { offsetTop, offsetHeight } = element
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight
        }
        return false
      })
      if (active) {
        setActiveSection(active.to)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [menuItems])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.to)}
                  className={`relative px-3 py-2 text-sm font-medium cursor-pointer transition-all duration-300
                    after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-gradient-to-r after:from-cyan-400 after:to-purple-400 after:rounded-full after:transition-all after:duration-300
                    ${
                      activeSection === item.to
                        ? "text-cyan-400 after:w-full"
                        : "text-slate-300 hover:text-cyan-400 after:w-0 hover:after:w-full"
                    }
                  `}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-cyan-400 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-400"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.to)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === item.to
                    ? "bg-slate-800 text-cyan-400"
                    : "text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
