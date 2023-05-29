import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Clientes extends React.Component {
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
            Algunos clientes de varios sectores
            </h2>
            <div
                data-aos="zoom-in-up"
                className="flex flex-wrap justify-center items-center gap-8"
            >
                <img src="clients/4.png" alt="" className="h-16" />
                <img src="clients/13.png" alt="" className="h-16" />
                <img src="clients/7.png" alt="" className="h-16" />
                <img src="clients/8.png" alt="" className="h-16" />
                <img src="clients/9.png" alt="" className="h-16" />
                <img src="clients/10.png" alt="" className="h-16" />
                <img src="clients/11.png" alt="" className="h-16" />
                <img src="clients/5.png" alt="" className="h-16" />
                <img src="clients/6.png" alt="" className="h-16" />
                <img src="clients/14.png" alt="" className="h-16" />
                <img src="clients/15.png" alt="" className="h-16" />
                <img src="clients/16.png" alt="" className="h-16" />
                <img src="clients/17.png" alt="" className="h-16" />
                <img src="clients/1.png" alt="" className="h-16" />
                <img src="clients/2.png" alt="" className="h-16" />
                <img src="clients/12.png" alt="" className="h-16" />
                <img src="clients/3.png" alt="" className="h-16" />
            </div>

        </section >
);
};
}

export default Clientes;
