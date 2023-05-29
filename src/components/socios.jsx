import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Socios extends React.Component {
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
                <h2 data-aos="fade-left" className="py-20 text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-blue-dark">
                    Socios estratégicos
                </h2>
                <div
                    data-aos="zoom-in-up"
                    className="flex flex-wrap justify-center items-center gap-8"
                >
                    <img src="asociados/11.png" alt="" className="h-16" />
                    <img src="asociados/19.png" alt="" className="h-16" />
                    <img src="asociados/8.png" alt="" className="h-16" />
                    <img src="asociados/3.png" alt="" className="h-16" />
                    <img src="asociados/4.png" alt="" className="h-16" />
                    <img src="asociados/5.png" alt="" className="h-16" />
                    <img src="asociados/6.png" alt="" className="h-16" />
                    <img src="asociados/7.png" alt="" className="h-16" />
                    <img src="asociados/9.png" alt="" className="h-16" />
                    <img src="asociados/15.png" alt="" className="h-16" />
                    <img src="asociados/10.png" alt="" className="h-16" />
                    <img src="asociados/20.png" alt="" className="h-16" />
                    <img src="asociados/21.png" alt="" className="h-16" />
                    <img src="asociados/22.png" alt="" className="h-16" />
                    <img src="asociados/1.png" alt="" className="h-16" />
                    <img src="asociados/2.png" alt="" className="h-16" />
                    <img src="asociados/13.png" alt="" className="h-16" />
                    <img src="asociados/14.png" alt="" className="h-16" />
                    <img src="asociados/12.png" alt="" className="h-16" />
                    <img src="asociados/16.png" alt="" className="h-16" />
                    <img src="asociados/17.png" alt="" className="h-16" />
                    <img src="asociados/18.png" alt="" className="h-16" />
                </div>
            </section >
        );
    };
}

export default Socios;
