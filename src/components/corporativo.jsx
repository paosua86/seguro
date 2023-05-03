import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

class Corporativo extends React.Component {
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
                            <h2 data-aos="fade-up-left" className="text-4xl lg:text-5xl pb-14 pt-40 text-blue-dark">Seguros CORPORATIVOS</h2>
                            <h3 className="text-2xl lg:text-3xl pb-1"> Tu compañía y tu personal siempre protegidos</h3>
                        </div>
                    </div>
                </div>
                <div class=" items-center w-full px-5">
                    <div class="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
                        <div class="relative justify-center lg:px-4">
                            <div class="lg:grid lg:grid-cols-2">
                                <div class="p-8">
                                    <h2 className="lg:text-3xl pb-12">Qué negocios se pueden asegurar?</h2>
                                    <p>Cobertura:</p>
                                    <lu>
                                        <li>Incendio</li>
                                        <li>Robo y Asalto</li>
                                        <li>Lucro Cesante</li>
                                        <li>Fidelidad</li>
                                        <li>Transporte y Logística</li>
                                        <li>Equipo Electrónico</li>
                                        <li>Rotura de Maquinaria</li>
                                        <li>Equipo y Maquinaria</li>
                                        <li>Todo Riesgo Construcción</li>
                                        <li>Todo Riesgo Montaje</li>
                                        <li>Todo Riesgo Petróleo</li>
                                        <li>Casco Aéreo</li>
                                        <li>Casco Marítimo</li>
                                    </lu>
                                    <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
                                </div>
                                <div class="p-8">
                                    <h2 className="lg:text-3xl pb-12">Seguros de Vida y Asistencia Médica Corporativa</h2>
                                    <p>Tranquilidad para el personal de tu empresa con la mejor cobertura de salud y vida</p>
                                    <lu>
                                        <li>Vida</li>
                                        <li>Asistencia Médica</li>
                                        <li>Seguro Dental</li>
                                        <li>Seguro Estudiantil</li>
                                    </lu>
                                    <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
};


export default Corporativo;




