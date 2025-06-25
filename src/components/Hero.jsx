import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      {/* <!-- Hero Section  --> */}
      <section id="hero">
        {/* <!-- Flex Container  --> */}
        <div className="container flex flex-col items-center px-6 mx-auto mt-10 md:space-y-0 md:flex-row">
          {/* <!-- left item  --> */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="mx-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Bring everyone together to build better products
            </h1>
            <p className="mx-w-sm text-center text-gray-500 md:text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae rem quasi obcaecati ea, ab sint culpa explicabo
              doloremque ratione. Magnam.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                to="#"
                className="p-3 px-6 pt-2 text-white bg-red-500 rounded-full baseline hover:bg-red-400"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* <!-- Right Section  --> */}
          <div className="md:w-1/2">
            <img src="./images/illustration-intro.svg" alt="" />
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default Hero;
