// import React from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// class Howden extends React.Component {
//     componentDidMount() {
//         AOS.init({
//             duration: 1200,
//             easing: 'ease-in-sine',
//         });
//         AOS.refresh();
//     }

//     render() {
//         return (
//             <section className="howden" id="howden">
//                 <h2 data-aos="fade-right" className="text-center text-4xl font-light mb-16"><a href='https://www.howdengroup.com/' target="_blank" without rel="noreferrer" >Howden</a></h2>
//                 <h3 data-aos="fade-left" className="text-center text-2xl font-light mb-16">Formamos parte de la Red Internacional Howden One</h3>
//                 <p className="howden_p text-lg font-light mb-4" data-aos="fade-left">Howden es el corredor de seguros internacional más grande del mundo fuera de los Estados Unidos. Ofrece una gama de soluciones de seguros especializadas a clientes de todo el mundo.</p>
//                 <div className="howden-container-one flex justify-center items-center flex-wrap px-10 gap-4">
//                     <div className="howden-box flex flex-col items-center max-w-sm text-base">
//                         <i className='bx bx-check-circle text-main-color text-5xl pb-4'></i>
//                         <p>Sextos en el Ranking Nacional de asesores de seguros</p>
//                     </div>
//                     <div className="howden-box flex flex-col items-center max-w-sm text-base">
//                         <i className='bx bx-check-circle text-main-color text-5xl pb-4'></i>
//                         <p>Más de 58000 asegurados</p>
//                     </div>
//                     <div className="howden-box flex flex-col items-center max-w-sm text-base">
//                         <i className='bx bx-check-circle text-main-color text-5xl pb-4'></i>
//                         <p>Ventajas en la cadena de corretaje generando economías de escala para el cliente y evitando duplicidad de pólizas</p>
//                     </div>
//                     <div className="howden-box flex flex-col items-center max-w-sm text-base">
//                         <i className='bx bx-check-circle text-main-color text-5xl pb-4'></i>
//                         <p>Más de 36000 reclamos resueltos</p>
//                     </div>
//                     <div className="howden-box flex flex-col items-center max-w-sm text-base">
//                         <i className='bx bx-check-circle text-main-color text-5xl pb-4'></i>
//                         <p>Más de 22300000 dólares pagados en indemnizaciones</p>
//                     </div>
//                 </div>

//                 <h3 data-aos="fade-left" className="text-center text-2xl font-light my-16">Soluciones Globales</h3>
//                 <p data-aos="fade-left" className="text-lg font-light mb-8">Red de servicios a nivel mundial y convenios con las más importantes representaciones internacionales.</p>

//                 <div className="howden-container-two flex justify-center items-center flex-col px-10 gap-10">
//                     <div className="howden-box flex flex-row items-center text-base max-w-4xl">
//                         <img data-aos="fade-right" className="howden-img mr-8" src="images/rkh.jpg" alt="" />
//                         <p className="text-left">RKH SPECIALTY: Corredor líder e independiente especializado en crear soluciones para una amplia gama de industrias y clases de riesgo.</p>
//                     </div>
//                     <div className="howden-box flex flex-row items-center text-base max-w-4xl">
//                         <img data-aos="fade-right" className="howden-img mr-8" src="images/howden.jpg" alt="" />
//                         <p className="text-left">HOWDEN: Provee soluciones en seguros a diversos clientes a lo largo de Europa, Asia, Iberoamérica y Medio Oriente.</p>
//                     </div>
//                     <div className="howden-box flex flex-row items-center text-base max-w-4xl">
//                         <img data-aos="fade-right" className="howden-img mr-8" src="images/ICBA.png" alt="" />
//                         <p className="text-left">ICBA: Fundado en 2000, el ICBA es el segundo grupo independiente de corredores de seguros de crédito comercial más grande del mundo.</p>
//                     </div>
//                     <div className="howden-box flex flex-row items-center text-base max-w-4xl">
//                         <img data-aos="fade-right" className="howden-img mr-8" src="images/qual.jpg" alt="" />
//                         <p className="text-left">QUAL: La mayor agencia especialista de suscripción (MGA) internacional y de mayor “Coverholder” ante Lloyds.</p>
//                     </div>
//                     <div className="howden-box flex flex-row items-center text-base max-w-4xl">
//                         <img data-aos="fade-right" className="howden-img mr-8" src="images/hwi.png" alt="" />
//                         <p className="text-left">HWI: Corredor Independiente que ofrece soluciones rápidas a los intereses de nuestros clientes.</p>
//                     </div>
//                 </div>

//             </section>
//         );
//     }
// }
// export default Howden;

import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

function Howden() {
  const { t } = useTranslation();

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-sine',
    });
    AOS.refresh();
  }, []);

  return (
    <section className="howden" id="howden">
      <h2 data-aos="fade-right" className="text-center text-4xl font-light mb-16">
        <a href='https://www.howdengroup.com/' target="_blank" rel="noreferrer">{t('howden.tituloLink')}</a>
      </h2>
      <h3 data-aos="fade-left" className="text-center text-2xl font-light mb-16">{t('howden.subtitulo1')}</h3>
      <p className="howden_p text-lg font-light mb-4" data-aos="fade-left">{t('howden.parrafo1')}</p>
      <div className="howden-container-one flex justify-center items-center flex-wrap px-10 gap-4">
        {t('howden.datos', { returnObjects: true }).map((dato, index) => (
          <div key={index} className="howden-box flex flex-col items-center max-w-sm text-base">
            <i className='bx bx-check-circle text-main-color text-5xl pb-4'></i>
            <p>{dato}</p>
          </div>
        ))}
      </div>

      <h3 data-aos="fade-left" className="text-center text-2xl font-light my-16">{t('howden.subtitulo2')}</h3>
      <p data-aos="fade-left" className="text-lg font-light mb-8">{t('howden.parrafo2')}</p>

      <div className="howden-container-two flex justify-center items-center flex-col px-10 gap-10">
        {t('howden.soluciones', { returnObjects: true }).map((solucion, index) => (
          <div key={index} className="howden-box flex flex-row items-center text-base max-w-4xl">
            <img data-aos="fade-right" className="howden-img mr-8" src={solucion.imagen} alt="" />
            <p className="text-left">{solucion.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Howden;

