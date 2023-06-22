import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Vida extends React.Component {
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
                <div class=" flex flex-col items-center px-3 py-8 mx-auto">
                    <div class="flex flex-col w-full text-left max-w-max lg:max-w-2xl">
                        <div class="w-full mx-auto">
                            <h2 data-aos="fade-up-left" className="text-4xl lg:text-5xl pb-14 pt-40 text-blue-dark">Seguros de VIDA</h2>
                            <h3 className="text-2xl lg:text-3xl pb-1">No podemos garantizar tu vida ... pero SÍ la tranquilidad económica de quienes amas y la protección de tu patrimonio.</h3>
                        </div>
                        <img
                            className="flex flex-col items-center"
                            src="images/vida.png"
                            alt="vida"
                        />
                    </div>
                </div>
                <div class=" items-center w-full px-5">
                    <div class="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
                        <div class="relative justify-center lg:px-4">
                            <div class="lg:grid lg:grid-cols-2">
                                <div class="p-8">
                                    <h2 className="lg:text-3xl pb-12">Por qué un seguro de vida?</h2>
                                    <lu>
                                        <li>Sostiene el estilo de vida de tu familia</li>
                                        <li>Te ayuda a pagar deudas</li>
                                        <li>Sostiene el pago de estudios de tus hijos</li>
                                        <li>Sostiene el pago de hipoteca de tu casa</li>
                                    </lu>
                                    <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
                                </div>
                                <div class="p-8">
                                    <h2 className="lg:text-3xl pb-12">Beneficios</h2>
                                    <lu>
                                        <li>Seguros de Vida de hasta de USD 1.000.000</li>
                                        <li>Productos de Vida Pura o Vida más Ahorro</li>
                                        <li>Planes de Jubilación</li>
                                        <li>Beca estudiantil</li>
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

export default Vida;
