import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

class Fianzas extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
    });
    AOS.refresh();
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section>
        <div class=" flex flex-col items-center px-3 py-8 mx-auto">
          <div class="flex flex-col w-full text-left max-w-max lg:max-w-2xl">
            <div class="w-full mx-auto">
              <h2 data-aos="fade-up-left" className="text-4xl lg:text-5xl pb-14 pt-40 text-blue-dark">Seguros de FIANZAS</h2>
              <h3 className="text-2xl lg:text-3xl pb-1">Respaldo, seguridad y confianza para la ejecución de tus contratos</h3>
            </div>
            <img
              className="flex flex-col items-center"
              src="images/contrato.png"
              alt="contrato"
            />
          </div>
        </div>
        <div class=" items-center w-full px-5">
          <div class="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
            <div class="relative justify-center lg:px-4">
              <div class="lg:grid lg:grid-cols-2">
                <div class="p-8">
                  <h2 className="lg:text-3xl pb-12">Cobertura:</h2>
                  <lu>
                    <li>Seriedad de oferta</li>
                    <li>Cumplimiento de Contrato</li>
                    <li>Buen Uso de Anticipo</li>
                    <li>Garantías Aduaneras</li>
                    <li>Buena Calidad de Materiales</li>
                  </lu>
                  <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Fianzas;
