// import React from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// class Innovadores extends React.Component {
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
//                             <h2 data-aos="fade-up-left" className="text-4xl lg:text-5xl pb-14 pt-40 text-blue-dark">Seguros INNOVADORES</h2>
//                             <h3 className="text-2xl lg:text-3xl pb-1">Los seguros más vanguardistas al alcance de tu mano</h3>
//                         </div>
//                         <img
//                             className="flex flex-col items-center"
//                             src="images/dron.png"
//                             alt="dron"
//                         />
//                     </div>
//                 </div>
//                 <div class=" items-center w-full px-5">
//                     <div class="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
//                         <div class="relative justify-center lg:px-4">
//                             <div class="lg:grid lg:grid-cols-2">
//                                 <div class="p-8">
//                                     <h2 className="lg:text-3xl pb-12">Cyber Risk</h2>
//                                     <p> En un seguro que permite cubrir el
//                                         área digital y tecnológica de tu
//                                         compañía. Te protege contra hackeos,
//                                         fraudes electrónicos, cyber extorsión,
//                                         robo de información, secuestro de
//                                         datos, entre otros.
//                                     </p>
//                                     <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
//                                 </div>
//                                 <div class="p-8">
//                                     <h2 className="lg:text-3xl pb-12">Drones</h2>
//                                     <p>En un seguro que te permite
//                                         cubrir los daños que pudiere
//                                         ocasionar tu dron en un
//                                         sinnúmero de usos
//                                         profesionales</p>
//                                     <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
//                                 </div>
//                                 <div class="p-8">
//                                     <h2 className="lg:text-3xl pb-12">STOCK THROUGHPUT STP</h2>
//                                     <p>Es un seguro que cubre los bienes que
//                                         sean transportados a lo largo de toda la
//                                         cadena de suministro desde el inicio
//                                         del viaje, fábrica de origen, hasta la
//                                         distribución interna en el destino final,
//                                         evitando cualquier brecha en la
//                                         cobertura</p>
//                                     <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
//                                 </div>
//                                 <div class="p-8">
//                                     <h2 className="lg:text-3xl pb-12">Directores y administradores D&0</h2>
//                                     <p>Es un seguro que cubre los perjuicios
//                                         causados a terceros como consecuencia
//                                         de un acto negligente, imprudente, error u
//                                         omisión realizado por los directores o
//                                         administradores de la compañía. De igual
//                                         forma cubre los gastos de defensa si
//                                         hubiere una demanda por dicho error.</p>
//                                     <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
//                                 </div>
//                                 <div class="p-8">
//                                     <h2 className="lg:text-3xl pb-12">Paramétrico</h2>
//                                     <p>Es un seguro que cubre la
//                                         probabilidad de que ocurra un
//                                         evento predefinido, parámetro o
//                                         índice, en lugar de indemnizar la
//                                         pérdida real incurrida.</p>
//                                     <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
//                                 </div>
//                                 <div class="p-8">
//                                     <h2 className="lg:text-3xl pb-12">Responsabilidad civil profesional</h2>
//                                     <p>Es un seguro que cubre los daños que,
//                                         involuntariamente, por sus errores u
//                                         omisiones, el profesional haya podido
//                                         causar a sus clientes en el ejercicio de
//                                         su profesión</p>
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

// export default Innovadores;
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { withTranslation } from 'react-i18next'; // Importar withTranslation para clases

class Innovadores extends React.Component {
    componentDidMount() {
        AOS.init({
            duration: 600,
            easing: "ease-in-sine",
        });
        AOS.refresh();
        window.scrollTo(0, 0);
    }

    render() {
        const { t } = this.props; // Acceder a la función t de las props

        return (
            <section>
                <div className="flex flex-col items-center px-3 py-8 mx-auto">
                    <div className="flex flex-col w-full text-left max-w-max lg:max-w-2xl">
                        <div className="w-full mx-auto">
                            <h2 data-aos="fade-up-left" className="text-4xl lg:text-5xl pb-14 pt-40 text-blue-dark">{t('innovadores.segurosInnovadoresTitulo')}</h2>
                            <h3 className="text-2xl lg:text-3xl pb-1">{t('innovadores.segurosVanguardistas')}</h3>
                        </div>
                        <img
                            className="flex flex-col items-center"
                            src="images/dron.png"
                            alt="dron"
                        />
                    </div>
                </div>
                <div className="items-center w-full px-5">
                    <div className="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
                        <div className="relative justify-center lg:px-4">
                            <div className="lg:grid lg:grid-cols-2">
                                <div className="p-8">
                                    <h2 className="lg:text-3xl pb-12">{t('innovadores.cyberRiskTitulo')}</h2>
                                    <p>{t('innovadores.cyberRiskDescripcion')}</p>
                                    <a href="/home#contact" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more">{t('innovadores.cotizar')}</a>
                                </div>
                                <div className="p-8">
                                    <h2 className="lg:text-3xl pb-12">{t('innovadores.dronesTitulo')}</h2>
                                    <p>{t('innovadores.dronesDescripcion')}</p>
                                    <a href="/home#contact" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more">{t('innovadores.cotizar')}</a>
                                </div>
                                <div className="p-8">
                                    <h2 className="lg:text-3xl pb-12">{t('innovadores.stockThroughputTitulo')}</h2>
                                    <p>{t('innovadores.stockThroughputDescripcion')}</p>
                                    <a href="/home#contact" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more">{t('innovadores.cotizar')}</a>
                                </div>
                                <div className="p-8">
                                    <h2 className="lg:text-3xl pb-12">{t('innovadores.directoresAdministradoresTitulo')}</h2>
                                    <p>{t('innovadores.directoresAdministradoresDescripcion')}</p>
                                    <a href="/home#contact" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more">{t('innovadores.cotizar')}</a>
                                </div>
                                <div className="p-8">
                                    <h2 className="lg:text-3xl pb-12">{t('innovadores.parametricoTitulo')}</h2>
                                    <p>{t('innovadores.parametricoDescripcion')}</p>
                                    <a href="/home#contact" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more">{t('innovadores.cotizar')}</a>
                                </div>
                                <div className="p-8">
                                    <h2 className="lg:text-3xl pb-12">{t('innovadores.responsabilidadCivilProfesionalTitulo')}</h2>
                                    <p>{t('innovadores.responsabilidadCivilProfesionalDescripcion')}</p>
                                    <a href="/home#contact" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more">{t('innovadores.cotizar')}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation()(Innovadores);
