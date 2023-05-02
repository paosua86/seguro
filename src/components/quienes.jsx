import React from 'react';
import 'aos/dist/aos.css';

class Quienes extends React.Component {

    render() {
        return (

            <section class="bg-gradient-to-b from-white to-blue-medium-dark" id="quienessomos">
                <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
                    <h2 data-aos="fade-left" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center py-20 text-blue-dark">
                        Quienes somos
                    </h2>
                    <div class="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
                        <div class="p-6">
                            <h3 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Experiencia</h3>
                            <p class="mx-auto text-base leading-relaxed text-gray-800">Somos una empresa constituida hace 20 años, posicionándonos en el <strong>mercado de seguros en Ecuador</strong>, tanto en el sector público como en el privado. Trabajamos para satisfacer las necesidades de nuestros clientes, administrando eficientemente sus riesgos con una asesoría integral para su programa de seguros que incluye: <strong>administración de riesgos, innovación, tecnología y nuevos productos de seguros.</strong></p>
                        </div>
                        <div class="p-6">
                            <h3 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Internacional</h3>
                            <p class="mx-auto text-base leading-relaxed text-gray-800">Contamos con un socio internacional <a href="https://www.howdengroup.com/" target="_blank" rel="noreferrer"> <u> Howden One </u></a>con <strong>profesionales especializados</strong> en diferentes líneas de negocios, formando parte de una red global y network a nivel internacional. Esta alianza nos permite ofrecer a los clientes una diversidad de productos y soluciones innovadoras para cumplir sus necesidades estructurando programas de seguros a su medida.</p>
                        </div>
                    </div>
                </div>
                <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
                    <div class="grid w-full grid-cols-1 mx-auto">
                        <div class="max-w-md p-6 mx-auto">
                            <h3 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Responsabilidad Social</h3>
                            <p class="mx-auto text-base leading-relaxed text-gray-800">En Asegbrok entendemos la importancia de estar en una <strong>empresa socialmente responsable.</strong> Promovemos beneficios sociales y económicos para nuestra comunidad, destacando principalmente lo siguiente:</p>
                            <p class="mx-auto text-base leading-relaxed text-white"><strong>Colaboradores</strong></p>
                            <p class="mx-auto text-base leading-relaxed text-white">Generación de proyectos in house con el involucramiento del personal y accionistas</p>
                            <p class="mx-auto text-base leading-relaxed text-white"><strong>Medio Ambiente</strong></p>
                            <p class="mx-auto text-base leading-relaxed text-white">Promovemos el cuidado del medio ambiente con proyectos de reforestación, ahorro de energía y reciclaje.</p>
                            <p class="mx-auto text-base leading-relaxed text-white"><strong>Sociedad</strong></p>
                            <p class="mx-auto text-base leading-relaxed text-white">Contribución constante a distintas fundaciones como: Fundación Hermano Miguel, Hogar Santa Lucía, entre otras.</p>
                        </div>
                    </div>
                </div>
                <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
                    <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
                        <div class="p-6">
                            <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl  transition duration-500 ease-in-out transform hover:scale-105" src="images/social1.jpg" alt="blog"/>
                             <p class="mx-auto text-base leading-relaxed text-white">Apoyamos con la reconstrucción de <strong>20 viviendas en la provincia de Manabí</strong> luego del terremoto del 2016 que afectó a las costas de Ecuador.</p>

                        </div>
                        <div class="p-6">
                            <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl  transition duration-500 ease-in-out transform hover:scale-105" src="images/social2.jpg" alt="blog"/>
                                <p class="mx-auto text-base leading-relaxed text-white">El proyecto <strong>“Mi propósito en Bahía” nació como iniciativa corporativa</strong> y durante el proceso de desarrollo se decidió incluir a actores que ya tenían experiencia en reasentamientos comunitarios, así como a accionistas, empleados y la misma comunidad que fue beneficiaria.</p>
                                </div>
                        <div class="p-6">
                            <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl  transition duration-500 ease-in-out transform hover:scale-105" src="images/social3.jpg" alt="blog"/>
                                <p class="mx-auto text-base leading-relaxed text-white">El enfoque no era solo a la reconstrucción de las viviendas, también tenía un tinte <strong>social que contribuyó a las personas afectadas con capacitaciones, atención médica y psicológica,</strong> creando herramientas que les permita reactivar su economía personal y familiar.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}
export default Quienes;
