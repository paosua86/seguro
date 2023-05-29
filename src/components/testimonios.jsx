import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsFacebook } from 'react-icons/bs';

const tweets = [
  {
    id: 1,
    username: "Roberto Barriga",
    handle: "Vehículos",
    url: "https://www.facebook.com/roberto.barriga.520?mibextid=ZbWKwL",
    text: "Soy cliente de Asegbrok varios años, estoy muy contento con el servicio y la asesoría brindada durante todo este tiempo. Muy recomendado.",
  },
  {
    id: 2,
    username: "David Suarez",
    handle: "Vehículos",
    url: "https://www.facebook.com/profile.php?id=100013553477889",
    text: "Me cumple manifestar y agradecer a Asegbrok que es una empresa que cumple al 100 X 100 lo acordado soy un usuario altamente satisfecho e invitaría a todos mis amigos, allegados y más a ser parte de esta prestigiosa empresa.",
  },
  {
    id: 3,
    username: "Daniela Suarez Bonilla",
    handle: "Asistencia Medica",
    url: "https://www.facebook.com/dany.suarez.31149",
    text: "A todos los que estén buscando asesoría en la contratación de un seguro de asistencia médica, Asegbrok brinda un servicio muy agradable los recomiendo.",
  },
  {
    id: 4,
    username: "ZRestaurants",
    handle: "Ramos Generales",
    url: "https://www.facebook.com/zrestaurantes",
    text: "Asegbrok es nuestro Asesor de Seguros ya varios años; el servicio y la asesoría brindada es excelente.",
  },
  {
    id: 5,
    username: "Lourdes Jarrin",
    handle: "Casa Habitacion",
    url: "https://www.facebook.com/lourdes.jarrin.3?mibextid=ZbWKwL",
    text: "Mis seguros los dejo en manos de Asegbrok; estoy muy contenta con el asesoramiento brindado.",
  },
  {
    id: 6,
    username: "Los Choris - Mauricio Delgado",
    handle: "Ramos Generales",
    url: "https://www.facebook.com/loschorisec/",
    text: "Trabajamos con Asegbrok ya varios años, el servicio y asesoría brindada es ágil y oportuna.",
  },
];

const Testimonios = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }, []);

  const tweetsJSX = tweets.map((tweet) => (
    <div
      key={tweet.id}
      className="overflow-x-hidden bg-white flex flex-col h-full w-full max-w-lg p-8 text-left shadow-2xl lg:mx-auto rounded-xl transition duration-500 ease-in-out transform hover:scale-105"
    >
      <div className="flex  items-center mb-4">
        <div>
          <p className="tweet-username text-xl font-bold mr-2">
            {tweet.username}
          </p>
          <p className="tweet-handle text-gray-600">{tweet.handle}</p>
        </div>
        <a href={tweet.url} target="_blank" rel="noreferrer">
          <i className="bx bxl-facebook-circle text-blue-600 text-2xl"></i>
          < BsFacebook className="text-blue-600" />
        </a>
      </div>
      <div className="tweet-body text-lg mb-4">{tweet.text}</div>
      <div className="tweet-footer"></div>
    </div>
  ));

  return (
    <section class="relative items-center w-full px-0 py-12 lg:px-24 bg-gradient-to-b from-white to-blue-medium-dark" id="testimonios">
      <h2
        data-aos="fade-left"
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center py-20 text-blue-dark"
      >
        Nuestros clientes nos avalan
      </h2>
      <div className="flex justify-center items-center">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 max-w-7xl justify-items-center items-center">{tweetsJSX}</div>
      </div>

    </section>

  );
};

export default Testimonios;
