import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

class Pymes extends React.Component {
    componentDidMount() {
        AOS.init({
            duration: 600,
            easing: "ease-in-sine",
        });
        AOS.refresh();
    }

    render() {
        return (
            <section>
                <div class=" flex flex-col items-center lg:px-3 py-8 mx-auto">
                    <div class="flex flex-col w-full text-left max-w-max lg:max-w-2xl">
                        <div class="w-full mx-auto">
                            <h2 data-aos="fade-up-left" className="text-4xl lg:text-5xl pb-14 pt-40 text-blue-dark">Seguros para PYMES</h2>
                            <h3 className="text-2xl lg:text-3xl pb-1">Protege tu esfuerzo a un costo bajo.</h3>
                        </div>
                    </div>
                </div>
                <div class=" items-center w-full px-5">
                    <div class="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
                        <div class="relative justify-center lg:px-4">
                            <div class="lg:grid lg:grid-cols-2">
                                <div class="p-8">
                                    <h2 className="lg:text-3xl pb-12">Qué es el seguro PYMES?</h2>
                                    <p>Es un seguro diseñado para cubrir el patrimonio de empresas pequeñas y
                                        medianas frente a los diversos riesgos a las que están expuestas. Por
                                        desconocimiento general los emprendedores piensan que el seguro es muy
                                        caro y que sólo lo pueden costear las grandes compañías. Sin embargo cometen
                                        un error porque hay planes hechos a la medida específicamente para Pymes y
                                        su costo es relativamente bajo a comparación del beneficio adquirido.</p>
                                    <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
                                </div>
                                <div class="p-8">
                                    <h2 className="lg:text-3xl pb-12">Cómo funciona el seguro PYMES?</h2>
                                    <p>En caso de un siniestro, tal como un incendio, explosión, daño por agua,
                                        robo, rotura de maquinaria, infidelidad de algún empleado, entre otros; el
                                        seguro se activa pagando una indemnización al emprendedor. De tal forma
                                        que termina protegiendo su esfuerzo de varios años manteniendo su
                                        patrimonio, su operación y evitando su quiebra.</p>
                                    <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
                                </div>
                                <div class="p-8">
                                    <h2 className="lg:text-3xl pb-12">Necesito el seguro PYMES?</h2>
                                    <p>En el Ecuador 9 de cada 10 emprendedores no
                                        aseguran su negocio. Sin embargo,
                                        estadísticamente el 55% de estas empresas son
                                        propensas a padecer algún tipo de daño en sus
                                        instalaciones y el 40% corre el riesgo de sufrir
                                        algún tipo de robo. Basado en estos números, y
                                        conociendo que existen planes específicos para
                                        Pymes a un costo bajo, entonces sí,
                                        probablemente necesites este seguro.</p>
                                    <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
                                </div>
                                <div class="p-8">
                                    <h2 className="lg:text-3xl pb-12">Qué negocios se pueden asegurar?</h2>
                                    <p>Mira los giros de negocios que podrían aplicar:.</p>
                                    <lu>
                                        <li>Hoteles pequeños y Hostales</li>
                                        <li>Ferreterías</li>
                                        <li>Bares y Discotecas</li>
                                        <li>Oficinas y Talleres</li>
                                        <li>Restaurantes y Cafeterías</li>
                                        <li>Clínicas y consultorios</li>
                                        <li>Colegios</li>
                                        <li>Comercio en General</li>
                                    </lu>
                                    <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
                                </div>
                                <div class="p-8">
                                    <h2 className="lg:text-3xl pb-12">4 Motivos a tu Favor:</h2>
                                    <lu>
                                        <li>Costos Bajos</li>
                                        <li>No importa si eres dueño o arrendatario</li>
                                        <li>No requieres inspección para poder asegurar</li>
                                        <li>No tienes que enviar listados</li>
                                    </lu>
                                    <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
                                </div>
                                <div class="p-8">
                                    <h2 className="lg:text-3xl pb-12">Beneficios de tu seguro PYMES:</h2>
                                    <p>Cubre los principales riesgos como incendio, robo, equipo electrónico, fidelidad, rotura de maquinaria,<br></br>
                                        responsabilidad civil, y además obtienes estos beneficios extras sin costo:</p>
                                    <lu>
                                        <li>Asistencia Legal</li>
                                        <li>Médico a domicilio para tu empresa</li>
                                        <li>Asistencia PC para computadores</li>
                                        <li>Asistencia Conexión con profesionales</li>
                                        <li>Protección de vidrios, letreros y vallas</li>
                                        <li>Asistencia para plomería, electricidad, cerrajería</li>
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
export default Pymes;
