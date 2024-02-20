import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';

const Reaseguro = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }, []);

  return (
    <section className="overflow-x-hidden px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24" id="riesgos_home">
      <h2 data-aos="fade-right"  className="py-20 text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-blue-dark">
        {t("reinsurance.title")}
      </h2>

      <p data-aos="fade-left" className="text-lg mb-12 leading-relaxed text-gray-500">
        {t("reinsurance.description1")}
      </p>
      <p data-aos="fade-left" className="text-lg mb-12 leading-relaxed text-gray-500" dangerouslySetInnerHTML={{ __html: t("reinsurance.description2") }}></p>
    </section>
  );
}

export default Reaseguro;
