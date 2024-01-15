import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

class Reaseguro extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1200,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }

  render() {
    return (
      <section className="overflow-x-hidden px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24" id="riesgos_home">
        <h2 data-aos="fade-right"  className="py-20 text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-blue-dark">Reaseguros</h2>

        <p data-aos="fade-left" class="text-lg mb-12 leading-relaxed text-gray-500">
        Contamos con alianzas en Ecuador, Centroamérica, América, Europa y Asia, que nos permiten ofrecer a nuestros clientes soluciones flexibles y adecuadas a las particularidades de cada giro del negocio.
        </p>
        <p data-aos="fade-left" class="text-lg mb-12 leading-relaxed text-gray-500">
        Nuestras alianzas nos permiten lograr una eficiencia en la colocación de sus programas de seguros y administración de sus riesgos por medio de nuestro partner estratégico <a href="https://www.howdengroup.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            HolwenSpecialty
          </a> .
        </p>
      </section>
    );
  }
}

export default Reaseguro;
