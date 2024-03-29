import React from "react";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";
import { FaCross, FaCreativeCommonsBy, FaCashRegister, FaIndustry, FaCar, FaHandHoldingMedical, FaAccessibleIcon, FaHome, FaMoneyBillWaveAlt} from "react-icons/fa";
import { BsFillAirplaneFill } from "react-icons/bs";
import { TbDrone } from "react-icons/tb";

const Services = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-sine",
    });
  }, []);

  return (
      <section className="overflow-x-hidden bg-white" id="services_home">
        <h2
          data-aos="fade-right"
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-blue-dark pt-32"
        >
          {t("services.titulo")}
        </h2>

        <div class="py-20 overflow-x-hidden flex flex-wrap mx-auto lg:flex-nowrap p-12 justify-center ">

          <a href="#/individuales">
            <div class="flex w-full">
              <div class="bg-blue-base relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform shadow-2xl rounded-xl w-52 md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <FaCreativeCommonsBy class="w-full rounded-t-xl text-white md:h-36 pt-5" />
                <div class="px-6 py-8">
                  <h4 class="mt-4 text-2xl font-semibold text-white">
                    <span class="">
                      {t("services.categorias.0.titulo")}
                    </span>
                  </h4>
                  <p class="mt-4 text-base font-normal text-white leading-relax">{t("services.categorias.0.descripcion")}</p>
                </div>
              </div>
            </div>
          </a>

          <a href="#/pymes">
            <div class="flex w-full">
              <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-blue-bright shadow-2xl rounded-xl w-52 md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <FaCashRegister class="w-full rounded-t-xl text-white md:h-36 pt-5" />
                <div class="px-6 py-8">
                  <h4 class="mt-4 text-2xl font-semibold text-neutral-600">
                    <span class="">{t("services.categorias.1.titulo")}</span>
                  </h4>
                  <p class="mt-4 text-base font-normal text-gray-500 leading-relax">{t("services.categorias.1.descripcion")}</p>
                </div>
              </div>
            </div>
          </a>

          <a href="#/corporativo">
            <div class="flex w-full">
              <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-blue-medium shadow-2xl rounded-xl w-52 md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <FaIndustry class="w-full rounded-t-xl text-white md:h-36 pt-5" />
                <div class="px-6 py-8">
                  <h4 class="mt-4 text-2xl font-semibold text-neutral-600">
                    <span class="">{t("services.categorias.2.titulo")}</span>
                  </h4>
                  <p class="mt-4 text-base font-normal text-gray-500 leading-relax">{t("services.categorias.2.descripcion")}</p>
                </div>
              </div>
            </div>
          </a>

        </div>

        <div class="py-20 overflow-x-hidden flex flex-wrap mx-auto lg:flex-nowrap p-12 justify-center">

          <a href="#/vehiculo">
            <div class="flex flex-col w-full">
            <div class="bg-blue-base relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform shadow-2xl rounded-xl w-52 md:w-36 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <FaCar class="w-full rounded-t-xl text-white h-24 md:h-32 pt-8" />
                <div class="px-6 py-8">
                  <h4 class="mt-4 h-16 text-2xl md:text-xl font-semibold text-white">
                    <span class="">{t("services.categorias.3.titulo")}</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>

          <a href="#/atencionmedica">
            <div class="flex w-full">
              <div class="bg-blue-bright relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform shadow-2xl rounded-xl w-52 md:w-36 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <FaHandHoldingMedical class="w-full rounded-t-xl text-white h-24 md:h-32 pt-8" />
                <div class="px-6 py-8">
                  <h4 class="mt-4 h-16 text-2xl md:text-xl font-semibold text-neutral-600">
                    <span class="">{t("services.categorias.4.titulo")}</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>

          <a href="#/accidentespersonales">
            <div class="flex w-full">
              <div class="bg-blue-medium relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform shadow-2xl rounded-xl w-52 md:w-36 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <FaAccessibleIcon class="w-full rounded-t-xl text-white h-24 md:h-32 pt-8" />
                <div class="px-6 py-8">
                  <h4 class="mt-4 h-16 text-2xl md:text-xl font-semibold text-white">
                    <span class="">{t("services.categorias.5.titulo")}</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>

          <a href="#/vida">
            <div class="flex w-full">
              <div class="bg-blue-medium-dark relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform shadow-2xl rounded-xl w-52 md:w-36 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <FaCross class="w-full rounded-t-xl text-white h-24 md:h-32 pt-8" />
                <div class="px-6 py-8">
                  <h4 class="mt-4 h-16 text-2xl md:text-xl font-semibold text-white">
                    <span class="">{t("services.categorias.6.titulo")}</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>

         <a href="#/viajes">
            <div class="flex w-full">
            <div class="bg-blue-dark relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform shadow-2xl rounded-xl w-52 md:w-36 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <BsFillAirplaneFill class="w-full rounded-t-xl text-white h-24 md:h-32 pt-8" />
                <div class="px-6 py-8">
                  <h4 class="mt-4 h-16 text-2xl md:text-xl font-semibold text-white">
                    <span class="">{t("services.categorias.7.titulo")}</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>

          <a href="#/hogar">
            <div class="flex w-full">
            <div class="bg-blue-base relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform shadow-2xl rounded-xl w-52 md:w-36 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <FaHome class="w-full rounded-t-xl text-white h-24 md:h-32 pt-8" />
                <div class="px-6 py-8">
                  <h4 class="mt-4 h-16 text-2xl md:text-xl font-semibold text-white">
                    <span class="">{t("services.categorias.8.titulo")}</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>

          <a href="#/innovadores">
            <div class="flex w-full">
            <div class="bg-blue-bright relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform shadow-2xl rounded-xl w-52 md:w-36 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <TbDrone class="w-full rounded-t-xl text-white h-24 md:h-32 pt-8" />
                <div class="px-6 py-8">
                  <h4 class="mt-4 h-16 text-2xl md:text-xl font-semibold text-neutral-600">
                    <span class="">{t("services.categorias.9.titulo")}</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>

          <a href="#/fianzas">
            <div class="flex w-full">
              <div class="bg-blue-medium relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform shadow-2xl rounded-xl w-52 md:w-36 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <FaMoneyBillWaveAlt class="w-full rounded-t-xl text-white h-24 md:h-32 pt-8" />
                <div class="px-6 py-8">
                  <h4 class="mt-4 h-16 text-2xl md:text-xl font-semibold text-white">
                    <span class="">{t("services.categorias.10.titulo")}</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>

        </div>
      </section >
    );
  }


export default Services;
