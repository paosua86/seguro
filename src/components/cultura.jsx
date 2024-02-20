// import React from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// class Cultura extends React.Component {
//   componentDidMount() {
//     AOS.init({
//       duration: 1200,
//       easing: 'ease-in-sine',
//     });
//     AOS.refresh();
//   }

//   render() {
//     return (
//       <section className="overflow-x-hidden px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
//         <h2 data-aos="fade-right"  className="py-20 text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-blue-dark">Nuestra Cultura</h2>
//         <p data-aos="fade-left" class="text-lg mb-12 leading-relaxed text-gray-500">
//           La cultura es un componente crítico de lo que hace que Asegbrok sea único. Trabajamos como un equipo comprometido con la colaboración, la integridad y el enfoque centrado en el cliente para ofrecer soluciones excepcionales.
//         </p>
//         <div className="grid grid-cols gap-8 md:grid-cols-2 lg:grid-cols-4">
//           <div className="bg-blue-bright border text-neutral-600 border-gray-300 rounded-lg p-8 transition duration-500 ease-in-out transform hover:scale-105">
//             <i className="bx bx-time text-6xl text-neutral-600 mb-4"></i>
//             <h3 className="text-xl font-semibold mb-2">Gestión</h3>
//             <p className="text-lg font-light">Asesoramiento y soporte técnico en el día a día</p>
//           </div>
//           <div className="bg-blue-base border text-white border-gray-300 rounded-lg p-8 transition duration-500 ease-in-out transform hover:scale-105">
//             <i className="bx bx-briefcase-alt-2 text-6xl text-neutral-600 mb-4"></i>
//             <h3 className="text-xl font-semibold mb-2">Trabajo</h3>
//             <p className="text-lg font-light">Gestión de riesgos y revisión de pólizas</p>
//           </div>
//           <div className="bg-blue-medium border text-neutral-600 border-gray-300 rounded-lg p-8 transition duration-500 ease-in-out transform hover:scale-105">
//             <i className="bx bx-happy text-6xl text-neutral-600 mb-4"></i>
//             <h3 className="text-xl font-semibold mb-2">Soporte</h3>
//             <p className="text-lg font-light">Gestión de reclamos y asistencia en incidentes importantes</p>
//           </div>
//           <div className="bg-blue-bright border text-neutral-600 border-gray-300 rounded-lg p-8 transition duration-500 ease-in-out transform hover:scale-105">
//             <i className="bx bx-phone-call text-6xl text-neutral-600 mb-4"></i>
//             <h3 className="text-xl font-semibold mb-2">Entrega</h3>
//             <p className="text-lg font-light">Soluciones innovadoras con las mejores coberturas y tasas</p>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default Cultura;
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { withTranslation, Trans } from 'react-i18next';

class Cultura extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-sine',
    });
    AOS.refresh();
  }

  render() {
    return (
      <section className="overflow-x-hidden px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <h2 data-aos="fade-right" className="py-20 text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-blue-dark">
          <Trans i18nKey="nuestraCultura.titulo" />
        </h2>
        <p data-aos="fade-left" className="text-lg mb-12 leading-relaxed text-gray-500">
          <Trans i18nKey="nuestraCultura.descripcion" />
        </p>
        <div className="grid grid-cols gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-blue-bright border text-neutral-600 border-gray-300 rounded-lg p-8 transition duration-500 ease-in-out transform hover:scale-105">
            <i className="bx bx-time text-6xl text-neutral-600 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2"><Trans i18nKey="nuestraCultura.valores.0.titulo" /></h3>
            <p className="text-lg font-light"><Trans i18nKey="nuestraCultura.valores.0.descripcion" /></p>
          </div>
          <div className="bg-blue-base border text-white border-gray-300 rounded-lg p-8 transition duration-500 ease-in-out transform hover:scale-105">
            <i className="bx bx-briefcase-alt-2 text-6xl text-neutral-600 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2"><Trans i18nKey="nuestraCultura.valores.1.titulo" /></h3>
            <p className="text-lg font-light"><Trans i18nKey="nuestraCultura.valores.1.descripcion" /></p>
          </div>
          <div className="bg-blue-medium border text-neutral-600 border-gray-300 rounded-lg p-8 transition duration-500 ease-in-out transform hover:scale-105">
            <i className="bx bx-happy text-6xl text-neutral-600 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2"><Trans i18nKey="nuestraCultura.valores.2.titulo" /></h3>
            <p className="text-lg font-light"><Trans i18nKey="nuestraCultura.valores.2.descripcion" /></p>
          </div>
          <div className="bg-blue-bright border text-neutral-600 border-gray-300 rounded-lg p-8 transition duration-500 ease-in-out transform hover:scale-105">
            <i className="bx bx-phone-call text-6xl text-neutral-600 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2"><Trans i18nKey="nuestraCultura.valores.3.titulo" /></h3>
            <p className="text-lg font-light"><Trans i18nKey="nuestraCultura.valores.3.descripcion" /></p>
          </div>
        </div>
      </section>
    );
  }
}

export default withTranslation()(Cultura);
