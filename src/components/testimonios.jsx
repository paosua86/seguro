import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { BsFacebook } from 'react-icons/bs';

const Testimonios = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }, []);

  const tweets = t("testimonios.tweets", { returnObjects: true });
 // Verifica si tweets es un arreglo antes de intentar mapearlo
 if (!Array.isArray(tweets)) {
  console.error("tweets is not an array:", tweets);
  return null; // O manejar el error de forma que prefieras
}
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
          <BsFacebook className="text-blue-600" />
        </a>
      </div>
      <div className="tweet-body text-lg mb-4">{tweet.text}</div>
    </div>
  ));

  return (
    <section className="relative items-center w-full px-0 py-12 lg:px-24 bg-gradient-to-b from-white to-blue-medium-dark" id="testimonios">
      <h2
        data-aos="fade-left"
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center py-20 text-blue-dark"
      >
        {t("testimonios.titulo")}
      </h2>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 max-w-7xl justify-items-center items-center">{tweetsJSX}</div>
      </div>
    </section>
  );
};

export default Testimonios;
