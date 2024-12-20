import Image from 'next/image'

const Hero = () => {
  const myName = "David Malunga";
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/images/davidprofile.jpg"
            alt="Your Name"
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h1 className="text-4xl font-bold mb-4">{"Hi, I'm " + myName} </h1>
          <p className="text-xl mb-6">
            {"I'm a full stack developer and data analyst with a passion for creating innovative solutions and deriving insights from data."}
          </p>
          <a
            href="#contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
           { "Get in touch"}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

