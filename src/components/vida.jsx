import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { withTranslation } from 'react-i18next';

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
        const { t } = this.props;

        return (
            <section>
                <div className="flex flex-col items-center px-3 py-8 mx-auto">
                    <div className="flex flex-col w-full text-left max-w-max lg:max-w-2xl">
                        <div className="w-full mx-auto">
                            <h2 data-aos="fade-up-left" className="text-4xl lg:text-5xl pb-14 pt-40 text-blue-dark">{t('vida.titulo')}</h2>
                            <h3 className="text-2xl lg:text-3xl pb-1">{t('vida.subtitulo')}</h3>
                        </div>
                        <img className="flex flex-col items-center" src="images/vida.png" alt="vida" />
                    </div>
                </div>
                <div className="items-center w-full px-5">
                    <div className="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
                        <div className="relative justify-center lg:px-4">
                            <div className="lg:grid lg:grid-cols-2">
                                <div className="p-8">
                                    <h2 className="lg:text-3xl pb-12">{t('vida.porQueSeguroTitulo')}</h2>
                                    <lu>
                                        <li>{t('vida.razones.sostieneFamilia')}</li>
                                        <li>{t('vida.razones.ayudaDeudas')}</li>
                                        <li>{t('vida.razones.pagoEstudios')}</li>
                                        <li>{t('vida.razones.pagoHipoteca')}</li>
                                    </lu>
                                    <a href="/home#contact" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more">{t('vida.cotizar')}</a>
                                </div>
                                <div className="p-8">
                                    <h2 className="lg:text-3xl pb-12">{t('vida.beneficiosTitulo')}</h2>
                                    <lu>
                                        <li>{t('vida.beneficios.seguroVida')}</li>
                                        <li>{t('vida.beneficios.vidaAhorro')}</li>
                                        <li>{t('vida.beneficios.planesJubilacion')}</li>
                                        <li>{t('vida.beneficios.becaEstudiantil')}</li>
                                    </lu>
                                    <a href="/home#contact" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more">{t('vida.cotizar')}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation()(Vida);
