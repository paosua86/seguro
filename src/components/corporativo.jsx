

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { withTranslation } from 'react-i18next'; // Importar withTranslation para clases

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
        const { t } = this.props; // Acceder a la función t de las props

        return (
            <section>
                <div className="flex flex-col items-center px-3 py-8 mx-auto">
                    <div className="flex flex-col w-full text-left max-w-max lg:max-w-2xl">
                        <div className="w-full mx-auto">
                            <h2 data-aos="fade-up-left" className="text-4xl lg:text-5xl pb-14 pt-40 text-blue-dark">{t('corporativo.tituloSeguros')}</h2>
                            <h3 className="text-2xl lg:text-3xl pb-1">{t('corporativo.subtitulo')}</h3>
                        </div>
                        <img
                            className="flex flex-col items-center"
                            src="images/corporativo.png"
                            alt="accidentes"
                        />
                    </div>
                </div>
                <div className="items-center w-full px-5">
                    <div className="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
                        <div className="relative justify-center lg:px-4">
                            <div className="lg:grid lg:grid-cols-2">
                                <div className="p-8">
                                    <h2 className="lg:text-3xl pb-12">{t('corporativo.queRamosPregunta')}</h2>
                                    <p>{t('corporativo.coberturaTitulo')}</p>
                                    <lu>
                                        <li>{t('corporativo.incendio')}</li>
                                        <li>{t('corporativo.roboAsalto')}</li>
                                        <li>{t('corporativo.lucroCesante')}</li>
                                        <li>{t('corporativo.fidelidad')}</li>
                                        <li>{t('corporativo.transporteLogistica')}</li>
                                        <li>{t('corporativo.equipoElectronico')}</li>
                                        <li>{t('corporativo.roturaMaquinaria')}</li>
                                        <li>{t('corporativo.equipoMaquinaria')}</li>
                                        <li>{t('corporativo.todoRiesgoConstruccion')}</li>
                                        <li>{t('corporativo.todoRiesgoMontaje')}</li>
                                        <li>{t('corporativo.todoRiesgoPetroleo')}</li>
                                        <li>{t('corporativo.cascoAereo')}</li>
                                        <li>{t('corporativo.cascoMaritimo')}</li>
                                    </lu>
                                    <a href="/home#contact" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more">{t('corporativo.cotizar')}</a>
                                </div>
                                <div className="p-8">
                                    <h2 className="lg:text-3xl pb-12">{t('corporativo.segurosVidaTitulo')}</h2>
                                    <p>{t('corporativo.segurosVidaDescripcion')}</p>
                                    <lu>
                                        <li>{t('corporativo.vida')}</li>
                                        <li>{t('corporativo.asistenciaMedica')}</li>
                                        <li>{t('corporativo.seguroDental')}</li>
                                        <li>{t('corporativo.seguroEstudiantil')}</li>
                                    </lu>
                                    <a href="/home#contact" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more">{t('corporativo.cotizar')}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation()(Corporativo);
