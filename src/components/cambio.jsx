import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

class Cambio extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-sine',
    });
    AOS.refresh();
  }

  render() {
    const { t } = this.props;

    return (
      <section className="overflow-x-hidden px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <h2 data-aos="fade-right" className="py-20 text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-blue-dark">
          {t("cambio.titulo")}
        </h2>
        <p data-aos="fade-left" className="text-lg mb-12 leading-relaxed text-gray-500">
          {t("cambio.descripcion")}
        </p>
        <div className="grid grid-cols gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-blue-bright border text-neutral-600 border-gray-300 rounded-lg p-8 transition duration-500 ease-in-out transform hover:scale-105">
            <i className="bx bx-time text-6xl text-neutral-600 mb-4"></i>
            <p className="text-lg font-light">{t("cambio.beneficios.0.texto")}</p>
          </div>
          <div className="bg-blue-base border text-white border-gray-300 rounded-lg p-8 transition duration-500 ease-in-out transform hover:scale-105">
            <i className="bx bx-briefcase-alt-2 text-6xl text-neutral-600 mb-4"></i>
            <p className="text-lg font-light">{t("cambio.beneficios.1.texto")}</p>
          </div>
          <div className="bg-blue-medium border text-neutral-600 border-gray-300 rounded-lg p-8 transition duration-500 ease-in-out transform hover:scale-105">
            <i className="bx bx-happy text-6xl text-neutral-600 mb-4"></i>
            <p className="text-lg font-light">{t("cambio.beneficios.2.texto")}</p>
          </div>
          <div className="bg-blue-bright border text-neutral-600 border-gray-300 rounded-lg p-8 transition duration-500 ease-in-out transform hover:scale-105">
            <i className="bx bx-phone-call text-6xl text-neutral-600 mb-4"></i>
            <p className="text-lg font-light">{t("cambio.beneficios.3.texto")}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default function CambioWithTranslation() {
  const { t } = useTranslation();

  return <Cambio t={t} />;
}
