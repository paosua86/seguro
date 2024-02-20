import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { withTranslation } from 'react-i18next';

class Fianzas extends React.Component {
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
              <h2 data-aos="fade-up-left" className="text-4xl lg:text-5xl pb-14 pt-40 text-blue-dark">
                {t('fianzas.titulo')}
              </h2>
              <h3 className="text-2xl lg:text-3xl pb-1">
                {t('fianzas.subtitulo')}
              </h3>
            </div>
            <img
              className="flex flex-col items-center"
              src="images/contrato.png"
              alt={t('fianzas.imagenAlt')}
            />
          </div>
        </div>
        <div className="items-center w-full px-5">
          <div className="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
            <div className="relative justify-center lg:px-4">
              <div className="lg:grid lg:grid-cols-2">
                <div className="p-8">
                  <h2 className="lg:tsext-3xl pb-12">
                    {t('fianzas.coberturaTitulo')}
                  </h2>
                  <lu>
                    {t('fianzas.coberturas', { returnObjects: true }).map((cobertura, index) => (
                      <li key={index}>{cobertura}</li>
                    ))}
                  </lu>
                  <a href="/home#contact" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more">
                    {t('fianzas.botonCotizar')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withTranslation()(Fianzas);
