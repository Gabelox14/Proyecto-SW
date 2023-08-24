import SideBar from "../Components/SideBar";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <>
      <SideBar />
      <section className="w-full container mx-auto flex flex-col justify-center px-20 ml-32">
        <div className="mx-aut flex flex-col items-center gap-2 overflow-hidden ">
          <h1 className="font-bold text-2xl mb-4 text-brandColor">
            About Food Fleet
          </h1>
          <p className="text-white">
            FoodFleet es una plataforma en línea especializada en entregas de alimentos a domicilio,
           diseñada como parte de un proyecto final. Su principal objetivo es proporcionar a los usuarios
           una experiencia culinaria excepcional y conveniente a través de un sistema eficiente para gestionar
           pedidos de alimentos en línea. La plataforma se destaca por su interfaz intuitiva que permite a los
         usuarios explorar una amplia variedad de opciones gastronómicas en su área, desde comida rápida hasta
         establecimientos gourmet.
          </p>
          <p className="text-white">
            Una característica distintiva de FoodFleet es la personalización de pedidos, permitiendo a los usuarios
           adaptar sus comidas según sus preferencias individuales, ya sea agregando ingredientes extra o solicitando
           opciones dietéticas específicas. Además de facilitar la selección y personalización de pedidos, la plataforma
           se enfoca en la gestión eficiente de los mismos. Con un sistema integrado y optimizado, se garantiza un procesamiento rápido
           y preciso de los pedidos, mejorando la eficiencia operativa y reduciendo los tiempos de espera.
          </p>
          <p className="text-white">
            FoodFleet se ha desarrollado con una interfaz intuitiva, tecnologías modernas y una infraestructura confiable,
           todo con el propósito de brindar a los usuarios una experiencia culinaria excepcional. Con su enfoque en la eficiencia y seguridad,
           la plataforma asegura una experiencia de usuario excepcional en cada pedido realizado.
          </p>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-brandColor" href="https://example.com">
            foodfleet@email.com
          </a>
          <p className="leading-normal my-5 text-white">
            123 Avenida Universidad.
            <br />
            San Pedro, San Jose
            <br />
            Ulacit, Costa Rica
          </p>
          <span className="inline-flex">
            <a
              className="text-brandColor cursor-pointer"
              href="www.facebook.com"
              target="_blank"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              className="ml-4 text-brandColor cursor-pointer"
              href="www.twitter.com"
              target="_blank"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              className="ml-4 text-brandColor cursor-pointer"
              href="www.instagram.com"
              target="_blank"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              className="ml-4 text-brandColor cursor-pointer"
              href="www.linkedin.com"
              target="_blank"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </span>
        </div>
      </section>
    </>
  );
};

export default About;
