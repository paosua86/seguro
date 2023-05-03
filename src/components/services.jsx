import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCreativeCommonsBy, FaCashRegister, FaIndustry, FaCar, FaHandHoldingMedical, FaAccessibleIcon, FaHome, FaMoneyBillWaveAlt} from "react-icons/fa";
import { BsFillAirplaneFill } from "react-icons/bs";
import { TbDrone } from "react-icons/tb";


class Services extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1200,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }

  render() {
    return (
      <section className="overflow-x-hidden bg-white" id="services">
        <h2
          data-aos="fade-right"
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-blue-dark pt-32"
        >
          Variedad de seguros para cada necesidad
        </h2>

        <div class="py-20 overflow-x-hidden flex flex-wrap mx-auto md:flex-nowrap p-12 justify-center">

          <a href="#/individuales">
            <div class="flex w-full">
              <div class="bg-blue-base relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform shadow-2xl rounded-xl w-52 md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <FaCreativeCommonsBy class="w-full rounded-t-xl text-white md:h-36 pt-5" />
                <div class="px-6 py-8">
                  <h4 class="mt-4 text-2xl font-semibold text-white">
                    <span class="">Individuales</span>
                  </h4>
                  <p class="mt-4 text-base font-normal text-white leading-relax">Viajes, vida y gastos médicos mayores</p>
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
                    <span class="">Pymes</span>
                  </h4>
                  <p class="mt-4 text-base font-normal text-gray-500 leading-relax">Cubre el patrimonio de empresas pequeñas y medianas.</p>
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
                    <span class="">Corporativos</span>
                  </h4>
                  <p class="mt-4 text-base font-normal text-gray-500 leading-relax">Tu compañía y tu personal siempre protegidos</p>
                </div>
              </div>
            </div>
          </a>

        </div>

        <div class="grid grid-cols mx-auto md:flex md:flex-nowrap p-12 justify-center">

          <a href="#/vehiculo">
            <div class="flex flex-col w-full">
              <div class="bg-blue-base relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform shadow-2xl rounded-xl w-52 md:w-52 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <FaCar class="w-full rounded-t-xl text-white h-24 md:h-32 pt-8" />
                <div class="px-6 py-8">
                  <h4 class="mt-4 h-16 text-2xl font-semibold text-white">
                    <span class="">Vehículos</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>

          <a href="#/atencionmedica">
            <div class="flex w-full">
              <div class="bg-blue-bright relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform shadow-2xl rounded-xl w-52 md:w-52 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <FaHandHoldingMedical class="w-full rounded-t-xl text-white h-24 md:h-32 pt-8" />
                <div class="px-6 py-8">
                  <h4 class="mt-4 h-16 text-2xl font-semibold text-neutral-600">
                    <span class="">Asistencia Médica</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>

          <a href="#/accidentespersonales">
            <div class="flex w-full">
              <div class="bg-blue-medium relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform shadow-2xl rounded-xl w-52 md:w-52 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <FaAccessibleIcon class="w-full rounded-t-xl text-white h-24 md:h-32 pt-8" />
                <div class="px-6 py-8">
                  <h4 class="mt-4 h-16 text-2xl font-semibold text-white">
                    <span class="">Accidentes Personales</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>

         <a href="#/viajes">
            <div class="flex w-full">
              <div class="bg-blue-medium-dark relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform shadow-2xl rounded-xl w-52 md:w-52 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <BsFillAirplaneFill class="w-full rounded-t-xl text-white h-24 md:h-32 pt-8" />
                <div class="px-6 py-8">
                  <h4 class="mt-4 h-16 text-2xl font-semibold text-white">
                    <span class="">Viajes</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>

          <a href="#/hogar">
            <div class="flex w-full">
              <div class="bg-blue-dark relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform shadow-2xl rounded-xl w-52 md:w-52 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <FaHome class="w-full rounded-t-xl text-white h-24 md:h-32 pt-8" />
                <div class="px-6 py-8">
                  <h4 class="mt-4 h-16 text-2xl font-semibold text-white">
                    <span class="">Hogar</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>

          <a href="#/innovadores">
            <div class="flex w-full">
              <div class="bg-blue-base relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform shadow-2xl rounded-xl w-52 md:w-52 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <TbDrone class="w-full rounded-t-xl text-white h-24 md:h-32 pt-8" />
                <div class="px-6 py-8">
                  <h4 class="mt-4 h-16 text-2xl font-semibold text-white">
                    <span class="">Innovadores</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>

          <a href="#/fianzas">
            <div class="flex w-full">
              <div class="bg-blue-bright relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform shadow-2xl rounded-xl w-52 md:w-52 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <FaMoneyBillWaveAlt class="w-full rounded-t-xl text-white h-24 md:h-32 pt-8" />
                <div class="px-6 py-8">
                  <h4 class="mt-4 h-16 text-2xl font-semibold text-neutral-600">
                    <span class="">Fianzas</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>

        </div>
      </section >
    );
  }
}

export default Services;
