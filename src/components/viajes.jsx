import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

class Viajes extends React.Component {
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
                            <h2 data-aos="fade-up-left" className="text-4xl lg:text-5xl pb-14 pt-40 text-blue-dark">Seguros para VIAJES</h2>
                            <h3 className="text-2xl lg:text-3xl pb-1">Durante tu viaje podrías tener un plan que solucione estos riesgos. Somos parte del equipaje.</h3>
                        </div>
                        <img
                            className="flex flex-col items-center"
                            src="images/viajes.png"
                            alt="viajes"
                        />
                    </div>
                </div>
                <div class=" items-center w-full px-5">
                    <div class="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
                        <div class="relative justify-center lg:px-4">
                            <div class="lg:grid lg:grid-cols-2">
                                <div class="p-8">
                                    <h2 className="lg:text-3xl pb-12">Por qué contratar?</h2>
                                    <p> Si viajas por placer, negocios o estudios te ofrecemos los mejores beneficios y coberturas para tu viaje.</p>
                                    <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
                                </div>
                                <div class="p-8">
                                    <h2 className="lg:text-3xl pb-12">Ventajas y novedades al contratar con nosotros</h2>
                                    <lu>
                                        <li>Sin límite de edad</li>
                                        <li>Bajo Costo</li>
                                        <li>Amplias Coberturas</li>
                                        <li>Agilidad en rembolsos</li>
                                        <li>Gastos médicos por accidentes y/o enfermedades</li>
                                    </lu>
                                    <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
                                </div>
                                <div class="p-8">
                                    <h2 className="lg:text-3xl pb-12">Servicios complementarios</h2>
                                    <p>Asistencia por extravío y/o robo de documentos.</p>
                                    <p>Asesoría legal para honorarios de abogados y/o adelanto de fianzas.</p>
                                    <p>Pérdida de equipaje hasta el límite del plan contratado a partir de 72 horas de extraviado.</p>
                                    <p>Repatriación de herido o enfermo por recomendación médica.</p>
                                    <p>Repatriación en caso de fallecimiento.</p>
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
export default Viajes;
