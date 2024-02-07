import React from "react";
import { ImLinkedin, ImInstagram  } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";


class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-black text-white flex justify-around flex-col md:flex-row">
        <div className="flex justify-between items-center px-9 py-8 gap-7">
          <div className="flex flex-col">
            <div className="mb-4">Dirección Matriz:</div>
            <div className="mb-4">Teléfono :</div>
            <div className="mb-4">Celular :</div>
            <div>Email :</div>
          </div>
          <div className="flex flex-col">
            <div className="mb-4">
              Shyris N34 - 152 y Holanda, Edificio Shyris Center, Piso 4
            </div>
            <div className="mb-4">+ 593 2 4799 917</div>
            <div className="mb-4">+ 593 96 047 2777</div>
            <div>info@asegbrok.com.ec</div>
          </div>
          </div>
          <div>
          <div className="flex flex-col items-center py-8">
            <div className="mb-4 ">Síguenos</div>
            <div className="flex items-center">
              <a
                href="https://www.facebook.com/Asegbrok/"
                target="_blank"
                rel="noreferrer"
                className="social-icon mx-3"
              >
                < FaFacebookSquare className="text-3xl"/>
              </a>
              <a
                href="https://www.linkedin.com/in/maria-jose-ubilluz-5336a13a/"
                target="_blank"
                rel="noreferrer"
                className="social-icon mx-3"
              >
              <ImLinkedin ImInstagram className="text-3xl"/>
              </a>
              <a
                href="https://www.instagram.com/Asegbrok/"
                target="_blank"
                rel="noreferrer"
                className="social-icon mx-3"
              >
              < ImInstagram className="text-3xl"/>
              </a>
            </div>
            <div className="mt-4">Quito, Ecuador</div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
