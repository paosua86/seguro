import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

class Riesgos extends React.Component {
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
        <h2 data-aos="fade-right"  className="py-20 text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-blue-dark">Gestión y Administración de Riesgos</h2>

        <p data-aos="fade-left" class="text-lg mb-12 leading-relaxed text-gray-500">
        Brindamos apoyo técnico en análisis de riesgos para empresas, con una gama de servicios por medio de un equipo de trabajo especializado en distintas áreas de le gestión de riesgos, entregando una propuesta de valor a nuestros clientes identificando sus necesidades y recomendando soluciones para resguardar su patrimonio, activos y colaboradores de su empresa.
        </p>
        <p data-aos="fade-left" class="text-lg mb-12 leading-relaxed text-gray-500">
        “Buscamos el mejoramiento continuo del riesgo para las empresas ayudando a disminuir la probabilidad y severidad de un siniestro que pudiese afectar en el futuro al cliente”.
        </p>
        <div className="flex justify-center items-center py-20">
          <div
            data-aos="zoom-in"
            className="transition duration-300 ease-in-out delay-150 transform shadow-2xl rounded-xl"
          >
            <img
              className="rounded-xl"
              src="images/par360.png"
              alt="Riesgos y Coberturas"

            />
          </div>
        </div>
      </section>
    );
  }
}

export default Riesgos;
