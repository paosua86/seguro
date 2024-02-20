import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { withTranslation } from 'react-i18next';

class AsistMedica extends React.Component {
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
                {t('asistMedica.tituloAsistenciaMedica')}
              </h2>
              <h3 className="text-2xl lg:text-3xl pb-1">
                {t('asistMedica.subtituloAsistenciaMedica')}
              </h3>
            </div>
            <img
              className="flex flex-col items-center"
              src="images/medicos.png"
              alt="medicos"
            />
          </div>
        </div>
        <div className="items-center w-full px-5">
          <div className="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
            <div className="relative justify-center lg:px-4">
              <div className="lg:grid lg:grid-cols-2">
                <div className="p-8">
                  <h2 className="lg:text-3xl pb-12">{t('asistMedica.beneficiosYCoberturasTitulo')}</h2>
                  <lu>
                    <li>{t('asistMedica.beneficio1')}</li>
                    <li>{t('asistMedica.beneficio2')}</li>
                    <li>{t('asistMedica.beneficio3')}</li>
                    <li>{t('asistMedica.beneficio4')}</li>
                    <li>{t('asistMedica.beneficio5')}</li>
                    <li>{t('asistMedica.beneficio6')}</li>
                  </lu>
                  <a href="/home#contact" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more">
                    {t('asistMedica.botonCotizar')}
                  </a>
                </div>
                <div className="p-8">
                  <h2 className="lg:text-3xl pb-12">{t('asistMedica.serviciosComplementariosTitulo')}</h2>
                  <lu>
                  <li>{t('asistMedica.servicio1')}</li>
                  <li>{t('asistMedica.servicio2')}</li>
                  <li>{t('asistMedica.servicio3')}</li>
                  <li>{t('asistMedica.servicio4')}</li>
                  <li>{t('asistMedica.servicio5')}</li>
                  <li>{t('asistMedica.servicio6')}</li>
                  </lu>
                  <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=" flex flex-col items-center lg:px-3 py-8 mx-auto">
          <div class="flex flex-col w-full text-left max-w-max lg:max-w-2xl">
            <div class="w-full mx-auto">
              <h2 data-aos="fade-up-left" className="text-4xl lg:text-5xl pb-14 pt-40 text-blue-dark">Seguros para GASTOS MÉDICOS MAYORES</h2>
              <h3 className="text-2xl lg:text-3xl pb-1">Si lo entiendes, definitivamente te da tranquilidad</h3>
            </div>
          </div>
        </div>
        <div class=" items-center w-full px-5">
          <div class="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
            <div class="relative justify-center lg:px-4">
              <div class="lg:grid lg:grid-cols-2">
                <div class="p-8">
                  <h2 className="lg:text-3xl pb-12">Qué es el seguro de Gastos Médicos Mayores?</h2>
                  <p>{t('asistMedica.descripcionGMM1')}</p>
                  <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
                </div>
                <div class="p-8">
                  <h2 className="lg:text-3xl pb-12">{t('asistMedica.comoFuncionaGMMTitulo')}</h2>
                  <p>{t('asistMedica.descripcionGMM2')}</p>
                  <a href="/home#contact" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Cotizar » </a>
                </div>
                <div class="p-8">
                  <h2 className="lg:text-3xl pb-12">{t('asistMedica.necesitoGMMTitulo')}</h2>
                  <p>{t('asistMedica.descripcionGMM3')}</p>
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


export default withTranslation()(AsistMedica); // Asegúrate de exportar el componente correctamente

