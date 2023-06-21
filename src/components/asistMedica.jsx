import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

class AsistMedica extends React.Component {
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
        <div class=" flex flex-col items-center lg:px-3 py-8 mx-auto">
          <div class="flex flex-col w-full text-left max-w-max lg:max-w-2xl">
            <div class="w-full mx-auto">
              <h2 data-aos="fade-up-left" className="text-4xl lg:text-5xl pb-14 pt-40 text-blue-dark">Seguros para ASISTENCIA MEDICA</h2>
              <h3 className="text-2xl lg:text-3xl pb-1">Cuidar de tu salud y la de tu familia con coberturas completas, respaldadas por las mejores redes de atenciones ambulatorias u hospitalarias a nivel nacional e internacional.</h3>
            </div>
            <img
              className="flex flex-col items-center"
              src="images/medicos.png"
              alt="medicos"
            />
          </div>
        </div>
        <div class=" items-center w-full px-5">
          <div class="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
            <div class="relative justify-center lg:px-4">
              <div class="lg:grid lg:grid-cols-2">

                <div class="p-8">
                  <h2 className="lg:text-3xl pb-12">Beneficios y coberturas</h2>
                  <lu>
                    <li>Cobertura para enfermedades y accidentes</li>
                    <li>Cobertura para preexistencias</li>
                    <li>Cobertura para maternidad</li>
                    <li>Sin límites de edad</li>
                    <li>Agilidad en reembolsos</li>
                    <li>Diferentes formas de pago</li>
                  </lu>
                  <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
                </div>
                <div class="p-8">
                  <h2 className="lg:text-3xl pb-12">Servicios complementarios</h2>
                  <p>Centros médicos ambulatorios sin aplicación de deducible o copago</p>
                  <p>Médico a domicilio</p>
                  <p>Farmacia a domicilio</p>
                  <p>Video-consultas</p>
                  <p>Asistencia en viaje</p>
                  <p>Servicio de ambulancia</p>
                  <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=" flex flex-col items-center lg:px-3 py-8 mx-auto">
          <div class="flex flex-col w-full text-left max-w-max lg:max-w-2xl">
            <div class="w-full mx-auto">
              <h2 data-aos="fade-up-left" className="text-4xl lg:text-5xl pb-14 pt-40 text-blue-dark">Seguros para GASTOS MÉDICOS MAYORES</h2>
              <h3 className="text-2xl lg:text-3xl pb-1">Si lo entiendes, definitivamente te da tranquilidad</h3>
            </div>
          </div>
        </div>
        <div class=" items-center w-full px-5">
          <div class="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
            <div class="relative justify-center lg:px-4">
              <div class="lg:grid lg:grid-cols-2">
                <div class="p-8">
                  <h2 className="lg:text-3xl pb-12">Qué es el seguro de Gastos Médicos Mayores?</h2>
                  <p>Como su nombre lo indica, es un seguro que está diseñado para
                    enfrentar enfermedades o accidentes graves que requieren un
                    gasto muy alto por parte del paciente para poder curarse y que
                    por lo general una póliza de salud estándar no alcanza porque
                    tiene límites máximos de cobertura y no son suficientes.</p>
                  <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
                </div>
                <div class="p-8">
                  <h2 className="lg:text-3xl pb-12">Cómo funciona el seguro de Gastos Médicos Mayores?</h2>
                  <p>Esta póliza no te servirá para cubrir enfermedades leves como una gripe por
                    ejemplo. Se activa cuando por desgracia te ocurre una enfermedad fuerte o
                    un accidente grave que requiera el desembolso de cuantiosas sumas para
                    hacerlas frente. Ahí entra este maravilloso seguro que te cubre hasta USD
                    500 mil dólares por incapacidad.</p>
                  <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
                </div>
                <div class="p-8">
                  <h2 className="lg:text-3xl pb-12">Necesito el seguro de Gastos Médicos Mayores?</h2>
                  <p>Si eres de esas personas precavidas que están
                    conscientes de que algún momento tu o tu
                    familia pudieran enfrentar una situación grave,
                    pero a la vez no quisieras perder todo tu
                    patrimonio para cubrir esos gastos, entonces
                    sí definitivamente necesitas este seguro.</p>
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
export default AsistMedica;
