// import React from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// class Hogar extends React.Component {
//     componentDidMount() {
//         AOS.init({
//             duration: 600,
//             easing: "ease-in-sine",
//         });
//         AOS.refresh();
//         window.scrollTo(0, 0);
//     }

//     render() {
//         return (
//             <section>
//                 <div class=" flex flex-col items-center px-3 py-8 mx-auto">
//                     <div class="flex flex-col w-full text-left max-w-max lg:max-w-2xl">
//                         <div class="w-full mx-auto">
//                             <h2 data-aos="fade-up-left" className="text-4xl lg:text-5xl pb-14 pt-40 text-blue-dark">Seguros para HOGARES</h2>
//                             <h3 className="text-2xl lg:text-3xl pb-1">Lo mejor para tu familia</h3>
//                         </div>
//                         <img
//                             className="flex flex-col items-center"
//                             src="images/hogar.png"
//                             alt="hogar"
//                         />
//                     </div>
//                 </div>
//                 <div class=" items-center w-full px-5">
//                     <div class="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
//                         <div class="relative justify-center lg:px-4">
//                             <div class="lg:grid lg:grid-cols-2">
//                                 <div class="p-8">
//                                     <h2 className="lg:text-3xl pb-12">Principales beneficios:</h2>
//                                     <p> Un seguro de hogar es respaldo y seguridad para nuestro patrimonio, ya que está cubierto la propiedad como tal, los contenidos, los equipos electrónicos entre lo principal, contra los riesgos contratados de acuerdo a cada aseguradora.</p>
//                                     <p>De un seguro de hogar no solo se beneficia el propietario y su inmueble; también ayuda a la tranquilidad de tener asistencias para el hogar y cobertura si ocurre algún daño o lesión provocada a un vecino. El seguro de hogar permite que pueda contratarlo la persona que arrienda y proteger el contenido del inmueble.
//                                     </p>
//                                     <p>Lo mejor del producto su costo, que se adapta al presupuesto de cada persona.
//                                     </p>
//                                     <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
//                                 </div>
//                                 <div class="p-8">
//                                     <h2 className="lg:text-3xl pb-12">El producto de hogar se complementa e incluyen servicios de asistencias, entre las principales:</h2>
//                                     <lu>
//                                         <li>Electricidad</li>
//                                         <li>Cerrajería</li>
//                                         <li>Vidriería</li>
//                                         <li>Plomería</li>
//                                         <li>Asistencia Contenido</li>
//                                         <li>Asistencia para mascotas</li>
//                                         <li>Marido Sustituto que incluye: colocación de cuadros, instalación de luminarias, revisión de tomacorrientes, instalación de persianas</li>
//                                     </lu>
//                                     <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         );
//     }
// }

// export default Hogar;


import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { withTranslation } from 'react-i18next';

class Hogar extends React.Component {
    componentDidMount() {
        AOS.init({
            duration: 600,
            easing: "ease-in-sine",
        });
        AOS.refresh();
        window.scrollTo(0, 0);
    }

    render() {
        const { t } = this.props;
        return (
            <section>
                <div className="flex flex-col items-center px-3 py-8 mx-auto">
                    <div className="flex flex-col w-full text-left max-w-max lg:max-w-2xl">
                        <div className="w-full mx-auto">
                            <h2 data-aos="fade-up-left" className="text-4xl lg:text-5xl pb-14 pt-40 text-blue-dark">{t('hogar.titulo')}</h2>
                            <h3 className="text-2xl lg:text-3xl pb-1">{t('hogar.subtitulo')}</h3>
                        </div>
                        <img
                            className="flex flex-col items-center"
                            src="images/hogar.png"
                            alt={t('hogar.imagenHogarAlt')}
                        />
                    </div>
                </div>
                <div className="items-center w-full px-5">
                    <div className="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
                        <div className="relative justify-center lg:px-4">
                            <div className="lg:grid lg:grid-cols-2">
                                <div className="p-8">
                                    <h2 className="lg:text-3xl pb-12">{t('hogar.beneficiosTitulo')}</h2>
                                    {t('hogar.beneficiosDescripcion', { returnObjects: true }).map((beneficiosDescripcions, index) => (
                                        <p key={index}>{beneficiosDescripcions}</p>
                                    ))}
                                    <a href="/home#contact" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> {t('hogar.cotizar')} </a>
                                </div>
                                <div className="p-8">
                                    <h2 className="lg:text-3xl pb-12">{t('hogar.serviciosTitulo')}</h2>
                                    <lu>
                                        {t('hogar.serviciosListado', { returnObjects: true }).map((serviciosListados, index) => (
                                            <li key={index}>{serviciosListados}</li>
                                        ))}
                                    </lu>
                                    <a href="/home#contact" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> {t('hogar.cotizar')} </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation()(Hogar);
