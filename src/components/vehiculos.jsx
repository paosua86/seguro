import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

class Vehiculos extends React.Component {
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
                <div class="flex flex-col items-center px-3 py-8 mx-auto">
                    <div class="flex flex-col w-full text-left max-w-max lg:max-w-2xl">
                        <div class="w-full mx-auto">
                            <h2 data-aos="fade-up-left" className="text-4xl lg:text-5xl pb-14 pt-40 text-blue-dark">Seguros para VEHÍCULOS</h2>
                            <h3 className="text-2xl lg:text-3xl pb-1"> Lo mejor para tu inversión</h3>
                        </div>
                        <img
                            className="flex flex-col items-center"
                            src="images/carro.png"
                            alt="carro"
                        />
                    </div>
                </div>
                <div class=" items-center w-full px-5">
                    <div class="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
                        <div class="relative justify-center lg:px-4">
                            <div class="lg:grid lg:grid-cols-2">
                                <div class="p-8">
                                    <h2 className="lg:text-3xl pb-12">Qué incluye?</h2>
                                    <p>Todo riesgo, incluyendo, choques, volcaduras, robo total y parcial,
                                        daño malicioso, motín y huelga, alborotos populares,incendio y/o rayo,
                                        explosión, conmoción civil, vandalismo, rotura de vidrios, impacto de
                                        proyectiles, desplome de edificios, caída de objetos extraños, de
                                        aeronaves y sus partes y/o muros y/o postes y/o árboles, derrumbe de
                                        puentes y carreteras, deslaves, deslizamiento de tierra, eventos de la
                                        naturaleza.</p>
                                    <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
                                </div>
                                <div class="p-8">
                                    <h2 className="lg:text-3xl pb-12">Cobertura:</h2>
                                    <lu>
                                        <li>Amparo Patrimonial</li>
                                        <li>Responsabilidad Civil desde LUC USD 25,000.00</li>
                                        <li>Accidentes personales/ocupante desde USD 5,000.00</li>
                                        <li>Gastos médicos/ocupante desde USD 3,000.00</li>
                                        <li>Gastos de sepelio/ocupante desde USD 200.00</li>
                                        <li>Cobertura de Muerte Accidental para el titular de la póliza a
                                            consecuencia de un evento cubierto en la misma USD 10,000.00.</li>
                                        <li>Asistencia Vehicular y legal las 24 horas del día, 365 días del año.</li>
                                    </lu>
                                    <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
                                </div>
                                <div class="p-8">
                                    <h2 className="lg:text-3xl pb-12">Soat Incluido</h2>
                                    <p>Seguro OBLIGATORIO para todos los vehículos
                                        públicos y privados que transiten dentro del territorio
                                        ecuatoriano, que ampara los daños corporales que causen a las
                                        personas en accidentes de tránsito; ya sean estos peatones,
                                        pasajeros o conductores.</p>
                                    <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
                                </div>
                                <div class="p-8">
                                    <h2 className="lg:text-3xl pb-12">Ventajas y novedades al contratar con nosotros:</h2>
                                    <p>Cobertura de mascotas:</p>
                                    <lu>
                                        <li>Consulta médica a domicilio o consulta telefónica en caso de accidente de tu mascota</li>
                                    </lu>
                                    <p>Conductor elegido:</p>
                                    <lu>
                                        <li>Si tienes algún evento y consumas bebidas alcohólicas puedes solicitar un conductor elegido</li>
                                    </lu>
                                    <p>Conductor reemplazo:</p>
                                    <lu>
                                        <li>Si sufres alguna dolencia que te imposibilite
                                            continuar conduciendo recibe la asistencia de conductor reemplazo</li>
                                    </lu>
                                    <p>Asistencia exequial:</p>
                                    <lu>
                                        <li>Ante accidentes automovilísticos fatales
                                            recibe esta asistencia para poder cubrir gastos exequiales</li>
                                    </lu>
                                    <p>Asistencia Secuestro Express:</p>
                                    <lu>
                                        <li>Asistencia por robo a través de
                                            retiro de dinero en tarjeta de débito y crédito bajo modalidad
                                            secuestro express</li>
                                    </lu>
                                    <p>Auto sustituto:</p>
                                    <lu>
                                        <li>Recibe un Auto sustituto para poder movilizarte
                                            mientras tu vehículo se encuentre en reparación</li>
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

export default Vehiculos;
