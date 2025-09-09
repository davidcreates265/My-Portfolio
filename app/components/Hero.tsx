import Image from "next/image"

const Hero = () => {
  const myName = "David Malunga"
  const heroBio =
    "I'm a full stack developer and data analyst with a passion for creating innovative solutions. Whether crafting server-side logic, sculpting user interfaces or analyzing data. I am passionate about making tech accessible, diverse, and a catalyst for positive change."

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <Image
              src="/images/davidprofile.jpg"
              alt="David Malunga"
              width={400}
              height={400}
              className="rounded-full relative z-10 border-4 border-slate-700/50"
            />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hi, I&#39;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{myName}</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">{heroBio}</p>
          <a
            href="#contact"
            className="inline-block rounded-md font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
