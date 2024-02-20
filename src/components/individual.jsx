import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

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
        const { t } = this.props;

        return (
            <section>
                <div class=" flex flex-col items-center px-3 py-8 mx-auto">
                    <div class="flex flex-col w-full text-left max-w-max lg:max-w-2xl">
                        <div class="w-full mx-auto">
                            <h2 data-aos="fade-up-left" className="text-4xl lg:text-5xl pb-14 pt-40 text-blue-dark">{t('individual.titulo')}</h2>
                            <h3 className="text-2xl lg:text-3xl pb-1">{t('individual.subtitulo')}</h3>
                        </div>
                        <img
                            className="flex flex-col items-center"
                            src="images/individual.png"
                            alt="accidentes"
                        />
                    </div>
                </div>
                <div class=" items-center w-full px-5">
                    <div class="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
                        <div class="relative justify-center lg:px-4">
                            <div class="lg:grid lg:grid-cols-2">
                                <div class="p-8">
                                    <h2 className="lg:text-3xl pb-12">{t('individual.principalesSegurosTitulo')}</h2>
                                    <lu>
                                        <li>{t('individual.segurosListado.0')}</li>
                                        <li>{t('individual.segurosListado.1')}</li>
                                        <li>{t('individual.segurosListado.2')}</li>
                                        <li>{t('individual.segurosListado.3')}</li>
                                        <li>{t('individual.segurosListado.4')}</li>
                                        <li>{t('individual.segurosListado.5')}</li>
                                        <li>{t('individual.segurosListado.6')}</li>
                                        <li>{t('individual.segurosListado.7')}</li>
                                        <li>{t('individual.segurosListado.8')}</li>
                                        <li>{t('individual.segurosListado.9')}</li>
                                    </lu>
                                    <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more">{t('individual.cotizar')}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default function IndividualWithTranslation() {
    const { t } = useTranslation();

    return <Individual t={t} />;
  }



