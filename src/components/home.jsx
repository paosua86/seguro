import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './home_animation.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-sine',
      delay: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <section className="overflow-x-hidden text-center px-4 py-2 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24" id="home">
      <div className="home-content">
        <h1
          className="flex flex-wrap justify-center overflow-hidden text-neutral-600 text-1xl md:text-4xl lg:text-7xl mb-2 mt-8 pt-24 md:pt-48 lg:pt-64"
          data-aos="fade-up"
        >
          CUIDANDO LO QUE AMAS
          <br />
          HOY, MAÑANA Y SIEMPRE
        </h1>
        <p className="text-lg font-thin mb-6" data-aos="fade-left">
          Seguros Innovadores. Presencia Regional. Operación Local
        </p>
        <a
          href="#contact"
          className="btn_initial inline-block px-8 py-4 bg-blue-base rounded-xl shadow-lg text-white text-2xl font-thin transition duration-500 ease-in-out mt-12 relative z-10"
        >
          Cotiza tu seguro
        </a>
      </div>
      <div className="view">
        <img
          className="bike-img absolute left-2/5 top-3/5 transform -translate-x-1/2 -translate-y-1/2 z-1 w-full h-full overflow-hidden"
          src="images/bike.svg"
          alt=""
        />
        <img
          className="car-img absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1 w-full h-full overflow-hidden"
          src="images/car.svg"
          alt=""
        />
        <img
          className="fam-img absolute left-1/5 top-3/5 transform -translate-x-1/2 -translate-y-1/2 z-1 w-4/5 h-4/5 overflow-hidden"
          src="images/family.svg"
          alt=""
        />
        <img
          className="house-img absolute left-2/5 top-2/5 transform -translate-x-1/2 -translate-y-1/2 z-1 w-4/5 h-4/5 overflow-hidden"
          src="images/house.svg"
          alt=""
        />
        <img
          className="ind-img absolute left-1/5 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1 w-4/5 h-4/5 overflow-hidden"
          src="images/industry.svg"
          alt=""
        />
        <img
          className="inha-img absolute left-1/2 top-1/2 transform -translate-x-1/3 -translate-y-1/3 z-1 w-2/3 h-2/3 overflow-hidden"
          src="images/inheritance.svg"
          alt=""
        />
        <img
          className="travel-img absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1 w-4/5 h-4/5 overflow-hidden"
          src="images/travel.svg"
          alt=""
        />
      </div>
    </section>
  );
};

export default Home;