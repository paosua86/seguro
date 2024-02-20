import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';

const Riesgos = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }, []);

  return (
    <section className="overflow-x-hidden px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24" id="riesgos_home">
      <h2 data-aos="fade-right" className="py-20 text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-blue-dark">
        {t('riesgos.gestionYAdministracionDeRiesgos')}
      </h2>

      <p data-aos="fade-left" className="text-lg mb-12 leading-relaxed text-gray-500">
        {t('riesgos.descripcionRiesgos1')}
      </p>
      <p data-aos="fade-left" className="text-lg mb-12 leading-relaxed text-gray-500">
        {t('riesgos.descripcionRiesgos2')}
      </p>
      <div className="flex justify-center items-center py-20">
        <div
          data-aos="zoom-in"
          className="transition duration-300 ease-in-out delay-150 transform shadow-2xl rounded-xl"
        >
          <img
            className="rounded-xl"
            src="images/par360.png"
            alt={t('riesgos.altRiesgosYCoberturas')}
          />
        </div>
      </div>
    </section>
  );
};

export default Riesgos;
