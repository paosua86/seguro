// import React from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// class Formulario extends React.Component {
//     componentDidMount() {
//         AOS.init({
//             duration: 1200,
//             easing: "ease-in-sine",
//         });
//         AOS.refresh();
//     }

//     render() {
//         return (
//             <section class="bg-gradient-to-b from-white to-blue-medium-dark" id="contact">
//                 <h2
//                     data-aos="fade-left"
//                     className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-blue-dark"
//                 >
//                     Contáctanos
//                 </h2>
//                 <div class="px-4 py-24 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
//                     <div class="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">

//                         <div class="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
//                             <div class="hidden w-full lg:block">
//                                 <img class="object-cover h-full bg-cover rounded-l-lg pl-2" src="images/contacto.svg" alt="" />
//                             </div>
//                             <div class="w-full px-6 py-3">
//                                 <div>
//                                     <div class="mt-3 text-left sm:mt-5">
//                                         <div class="mt-4 text-base text-gray-500">
//                                             <p>A nuestro equipo le encantará atender tu solicitud.</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div class="mt-6 space-y-2">
//                                     <div>
//                                         <label for="name" class="sr-only">Nombre</label>
//                                         <input type="text" name="name" id="name" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-blue-bright rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Escribe tu nombre" />
//                                     </div>
//                                     <div>
//                                         <label for="email" class="sr-only">Email</label>
//                                         <input type="text" name="email" id="email" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-blue-bright rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Escribe tu email" />
//                                     </div>
//                                     <div>
//                                         <label for="number" class="sr-only">Email</label>
//                                         <input type="number" name="number" id="number" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-blue-bright rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Escribe tu celular" />
//                                     </div>
//                                     <div class="partes">
//                                         <textarea
//                                             name="text"
//                                             id="text"
//                                             cols="10"
//                                             rows="3"
//                                             placeholder="Tu mensaje"
//                                             class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-blue-bright rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
//                                         ></textarea>
//                                     </div>
//                                     <div class="flex flex-col mt-4 lg:space-y-2">
//                                         <button type="button" class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-base rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Enviar</button>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="flex justify-center items-center p-4">
//                                 <iframe
//                                     className="rounded-lg shadow-md"
//                                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.797667225976!2d-78.48470312618099!3d-0.1843546354120453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a7d8b57ab7f%3A0xd3ccda6a0da4fb19!2sShyris%20Center%20Alvarezconst%20S.A.!5e0!3m2!1sen!2sec!4v1685394191745!5m2!1sen!2sec"
//                                     width="950"
//                                     height="300"
//                                     style={{ border: "0" }}
//                                     allowFullScreen=""
//                                     loading="Lazy"
//                                     referrerPolicy="no-referrer-when-downgrade">
//                                 </iframe>
//                             </div>
//                             <div class="flex justify-center items-center">
//                                 <img class="object-cover h-80 bg-cover rounded-l-lg pl-2" src="images/edificio.jpg" alt="" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         );
//     }
// }

// export default Formulario;
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';

class Formulario extends React.Component {
    componentDidMount() {
        AOS.init({
            duration: 1200,
            easing: "ease-in-sine",
        });
        AOS.refresh();
    }

    render() {
        const { t } = this.props;
        return (
            <section class="bg-gradient-to-b from-white to-blue-medium-dark" id="contact">
                <h2
                    data-aos="fade-left"
                    className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-blue-dark"
                >
                    {t('formulario.titulo')}
                </h2>
                <div class="px-4 py-24 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
                    <div class="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">

                        <div class="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
                            <div class="hidden w-full lg:block">
                                <img class="object-cover h-full bg-cover rounded-l-lg pl-2" src="images/contacto.svg" alt="" />
                            </div>
                            <div class="w-full px-6 py-3">
                                <div>
                                    <div class="mt-3 text-left sm:mt-5">
                                        <div class="mt-4 text-base text-gray-500">
                                            <p>{t('formulario.intro')}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-6 space-y-2">
                                    <div>
                                        <label for="name" class="sr-only">{t('formulario.nombre')}</label>
                                        <input type="text" name="name" id="name" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-blue-bright rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder={t('formulario.nombre')} />
                                    </div>
                                    <div>
                                        <label for="email" class="sr-only">{t('formulario.email')}</label>
                                        <input type="text" name="email" id="email" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-blue-bright rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder={t('formulario.email')} />
                                    </div>
                                    <div>
                                        <label for="number" class="sr-only">{t('formulario.celular')}</label>
                                        <input type="number" name="number" id="number" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-blue-bright rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder={t('formulario.celular')} />
                                    </div>
                                    <div class="partes">
                                        <textarea
                                            name="text"
                                            id="text"
                                            cols="10"
                                            rows="3"
                                            placeholder={t('formulario.mensaje')}
                                            class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-blue-bright rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                        ></textarea>
                                    </div>
                                    <div class="flex flex-col mt-4 lg:space-y-2">
                                        <button type="button" class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-base rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">{t('formulario.enviar')}</button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center items-center p-4">
                                <iframe
                                    className="rounded-lg shadow-md"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.797667225976!2d-78.48470312618099!3d-0.1843546354120453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a7d8b57ab7f%3A0xd3ccda6a0da4fb19!2sShyris%20Center%20Alvarezconst%20S.A.!5e0!3m2!1sen!2sec!4v1685394191745!5m2!1sen!2sec"
                                    width="950"
                                    height="300"
                                    style={{ border: "0" }}
                                    allowFullScreen=""
                                    loading="Lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                            <div class="flex justify-center items-center">
                                <img class="object-cover h-80 bg-cover rounded-l-lg pl-2" src="images/edificio.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default (props) => <Formulario {...props} t={useTranslation().t} />;
