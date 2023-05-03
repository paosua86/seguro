import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Individual extends React.Component {
    componentDidMount() {
        AOS.init({
            duration: 1200,
            easing: 'ease-in-sine',
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
                        <h2 data-aos="fade-up-left" className="text-4xl lg:text-5xl pb-14 pt-40 text-blue-dark">Seguros INDIVIDUALES</h2>
                        <h3 className="text-2xl lg:text-3xl pb-1">No podemos garantizar tu vida ... pero SÍ la tranquilidad económica de quienes amas</h3>
                    </div>
                </div>
            </div>
            <div class=" items-center w-full px-5">
                <div class="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
                    <div class="relative justify-center lg:px-4">
                        <div class="lg:grid lg:grid-cols-2">
                            <div class="p-8">
                                <h2 className="lg:text-3xl pb-12">Principales</h2>
                                <lu>
                                    <li>Seguro de vida</li>
                                    <li>Gastos Médicos Mayores</li>
                                    <li>Seguro de viajes</li>
                                </lu>
                                <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
                            </div>
                            <div class="p-8">
                                <h2 className="lg:text-3xl pb-12">Beneficios</h2>
                                <lu>
                                    <li>Seguros de Vida de hasta de USD 1.000.000</li>
                                    <li>Productos de Vida Pura o Vida más Ahorro</li>
                                    <li>Planes de Jubilación</li>
                                    <li>Seguros de Asistencia Médica</li>
                                    <li>Accidentes Personales</li>
                                    <li>Cobertura de mascotas</li>
                                    <li>Seguro de viaje</li>
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

export default Individual;
