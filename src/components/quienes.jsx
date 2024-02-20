import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation, Trans } from 'react-i18next';


const Quienes = () => {
    const { t } = useTranslation();

    React.useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-in-sine',
        });
    }, []);

    return (
        <section className="bg-blue-medium-dark" id="quienessomos">
            <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
                <h2 data-aos="fade-left" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center py-20 text-white">
                    {t('quienesSomos.titulo')}
                </h2>
                {/* Sección de Experiencia e Internacional */}
                <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
                     {/* Experiencia */}
                     <div className="p-6">
                        <h3 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-white lg:text-3xl">
                            <Trans i18nKey="quienesSomos.experiencia.titulo" />
                        </h3>
                        <p className="mx-auto text-base leading-relaxed text-white">
                            <Trans i18nKey="quienesSomos.experiencia.descripcion" components={{ strong: <strong /> }} />
                        </p>
                    </div>
                    {/* Internacional */}
                    <div className="p-6">
                        <h3 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-white lg:text-3xl">
                            <Trans i18nKey="quienesSomos.internacional.titulo" />
                        </h3>
                        <p className="mx-auto text-base leading-relaxed text-white">
                            <Trans i18nKey="quienesSomos.internacional.descripcion1" components={{ a: <a href="https://www.howdengroup.com/" target="_blank" rel="noreferrer">content</a>, strong: <strong /> }} />
                        </p>
                        <p className="mx-auto text-base leading-relaxed text-white">
                            <Trans i18nKey="quienesSomos.internacional.descripcion2" />
                        </p>
                    </div>
                </div>
                {/* Sección de Responsabilidad Social */}
                <div class="pt-20 grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
                     <div class="p-6">
                        <h3 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-white lg:text-3xl">
                            <Trans i18nKey="quienesSomos.responsabilidadSocial.titulo" />
                        </h3>
                        <p className="mx-auto text-base leading-relaxed text-white">
                            <Trans i18nKey="quienesSomos.responsabilidadSocial.descripcion" components={{ strong: <strong /> }} />
                        </p>
                        </div>
                      <div class="p-6">
                        <h4 className="py-1 mx-auto text-xl leading-relaxed text-white">
                            <Trans i18nKey="quienesSomos.responsabilidadSocial.colaboradores.titulo" components={{ strong: <strong /> }} />
                        </h4>
                        <p className="mx-auto text-base leading-relaxed text-white">
                            <Trans i18nKey="quienesSomos.responsabilidadSocial.colaboradores.descripcion" />
                        </p>
                        <h4 className="py-1 mx-auto text-xl leading-relaxed text-white">
                            <Trans i18nKey="quienesSomos.responsabilidadSocial.medioAmbiente.titulo" components={{ strong: <strong /> }} />
                        </h4>
                        <p className="mx-auto text-base leading-relaxed text-white">
                            <Trans i18nKey="quienesSomos.responsabilidadSocial.medioAmbiente.descripcion" />
                        </p>
                        <h4 className="py-1 mx-auto text-xl leading-relaxed text-white">
                            <Trans i18nKey="quienesSomos.responsabilidadSocial.sociedad.titulo" components={{ strong: <strong /> }} />
                        </h4>
                        <p className="mx-auto text-base leading-relaxed text-white">
                            <Trans i18nKey="quienesSomos.responsabilidadSocial.sociedad.descripcion" />
                        </p>
                    </div>
                </div>
                {/* Sección de Imágenes y Proyectos Sociales */}
                <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
                    <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
                        {/* Imagen 1 */}
                        <div className="p-6">
                            <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl transition duration-500 ease-in-out transform hover:scale-105" src="images/social1.jpg" alt={<Trans i18nKey="quienesSomos.imagenes.alt1" />} />
                            <p className="mx-auto text-base leading-relaxed text-white">
                            <Trans i18nKey="quienesSomos.imagenes.descripcion1" components={{ strong: <strong /> }} />
                            </p>
                        </div>
                        {/* Imagen 2 */}
                        <div className="p-6">
                            <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl transition duration-500 ease-in-out transform hover:scale-105" src="images/social2.jpg" alt={<Trans i18nKey="quienesSomos.imagenes.alt2" />} />
                            <p className="mx-auto text-base leading-relaxed text-white">
                                <Trans i18nKey="quienesSomos.imagenes.descripcion2" components={{ strong: <strong /> }} />
                            </p>
                        </div>
                        {/* Imagen 3 */}
                        <div className="p-6">
                            <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl transition duration-500 ease-in-out transform hover:scale-105" src="images/social3.jpg" alt={<Trans i18nKey="quienesSomos.imagenes.alt3" />} />
                            <p className="mx-auto text-base leading-relaxed text-white">
                                <Trans i18nKey="quienesSomos.imagenes.descripcion3" components={{ strong: <strong /> }} />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quienes;


// import React from 'react';
// import 'aos/dist/aos.css';

// class Quienes extends React.Component {

//     render() {
//         return (

//             <section class="bg-blue-medium-dark" id="quienessomos">
//                 <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
//                     <h2 data-aos="fade-left" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center py-20 text-white">
//                         Quienes somos
//                     </h2>
//                     <div class="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
//                         <div class="p-6">
//                             <h3 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-white lg:text-3xl">Experiencia</h3>
//                             <p class="mx-auto text-base leading-relaxed text-white">Somos una empresa constituida hace 20 años y formamos parte de un grupo experto en el corretaje de seguros y reaseguros y en el desarrollo de masivos, posicionándonos en el <strong>mercado de seguros nacional e internacional, </strong>tanto en el sector público como en el privado. Trabajamos para satisfacer las necesidades de nuestros clientes, administrando eficientemente sus riesgos con una asesoría integral para su programa de seguros que incluye: <strong>administración de riesgos, innovación, tecnología y nuevos productos de seguros. </strong>Mientras algunos se enfocan en rentabilidad nosotros nos enfocamos en ofrecer servicio al cliente, soluciones innovadoras y sobre todo en hacer las cosas de manera correcta, fortaleciendo nuestro manejo actual e incorporando nuevos productos en ramos generales, vida, asistencia médica y seguros masivos.</p>
//                         </div>
//                         <div class="p-6">
//                             <h3 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-white lg:text-3xl">Internacional</h3>
//                             <p class="mx-auto text-base leading-relaxed text-white">Contamos con un socio internacional <a href="https://www.howdengroup.com/" target="_blank" rel="noreferrer"> <u> Howden Group </u></a>con <strong>profesionales especializados</strong> en diferentes líneas de negocios, formando parte de una red global y network a nivel internacional. Esta alianza nos permite ofrecer a los clientes una diversidad de productos y soluciones innovadoras para cumplir sus necesidades estructurando programas de seguros a su medida.</p>
//                             <p class="mx-auto text-base leading-relaxed text-white">Howden Group tiene un liderazgo en Latinoamérica y a nivel mundial tiene ingresos de USD 15.9 Billones en primas y sigue en un continuo crecimiento con nuevas alianzas y adquisiciones que ha generado un performance del 48% de crecimiento en ingresos y un crecimiento del 50% en EBITDA.</p>
//                         </div>
//                     </div>
//                     <div class="pt-20 grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
//                         <div class="p-6">
//                             <h3 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-white lg:text-3xl">Responsabilidad Social</h3>
//                             <p class="mx-auto text-base leading-relaxed text-white">En Asegbrok entendemos la importancia de estar en una <strong>empresa socialmente responsable.</strong> Promovemos beneficios sociales y económicos para nuestra comunidad, destacando principalmente lo siguiente:</p>
//                         </div>
//                         <div class="p-6">
//                             <p class="py-1 mx-auto text-base leading-relaxed text-white"><strong>Colaboradores</strong></p>
//                             <p class="py-1 mx-auto text-base leading-relaxed text-white">Generación de proyectos in house con el involucramiento del personal y accionistas</p>
//                             <p class="py-1 mx-auto text-base leading-relaxed text-white"><strong>Medio Ambiente</strong></p>
//                             <p class="py-1 mx-auto text-base leading-relaxed text-white">Promovemos el cuidado del medio ambiente con proyectos de reforestación, ahorro de energía y reciclaje.</p>
//                             <p class="py-1 mx-auto text-base leading-relaxed text-white"><strong>Sociedad</strong></p>
//                             <p class="py-1 mx-auto text-base leading-relaxed text-white">Contribución constante a distintas fundaciones como: Fundación Hermano Miguel, Hogar Santa Lucía, entre otras.</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
//                     <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
//                         <div class="p-6">
//                             <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl  transition duration-500 ease-in-out transform hover:scale-105" src="images/social1.jpg" alt="blog" />
//                             <p class="mx-auto text-base leading-relaxed text-white">Apoyamos con la reconstrucción de <strong>20 viviendas en la provincia de Manabí</strong> luego del terremoto del 2016 que afectó a las costas de Ecuador.</p>

//                         </div>
//                         <div class="p-6">
//                             <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl  transition duration-500 ease-in-out transform hover:scale-105" src="images/social2.jpg" alt="blog" />
//                             <p class="mx-auto text-base leading-relaxed text-white">El proyecto <strong>“Mi propósito en Bahía” nació como iniciativa corporativa</strong> y durante el proceso de desarrollo se decidió incluir a actores que ya tenían experiencia en reasentamientos comunitarios, así como a accionistas, empleados y la misma comunidad que fue beneficiaria.</p>
//                         </div>
//                         <div class="p-6">
//                             <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl  transition duration-500 ease-in-out transform hover:scale-105" src="images/social3.jpg" alt="blog" />
//                             <p class="mx-auto text-base leading-relaxed text-white">El enfoque no era solo a la reconstrucción de las viviendas, también tenía un tinte <strong>social que contribuyó a las personas afectadas con capacitaciones, atención médica y psicológica,</strong> creando herramientas que les permita reactivar su economía personal y familiar.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         );
//     };
// }
// export default Quienes;
