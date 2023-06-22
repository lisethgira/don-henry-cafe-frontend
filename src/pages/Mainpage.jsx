import React, {
  Component,
  Fragment,
} from 'react';

import { Link } from 'react-router-dom';

// assets icons
import checkCircle from '../assets/icons/check-circle.svg';
import checkIcon from '../assets/icons/check.svg';
import loveIcon from '../assets/icons/love.svg';
import placeIcon from '../assets/icons/place.svg';
import starIcon from '../assets/icons/star.svg';
import staffIcon from '../assets/icons/user.svg';
import mapImage from '../assets/images/global.svg';
import amazonLogo from '../assets/images/partners/amazon.svg';
import discordLogo from '../assets/images/partners/discord.svg';
import netflixLogo from '../assets/images/partners/netflix.svg';
import redditLogo from '../assets/images/partners/reddit.svg';
import spotifyLogo from '../assets/images/partners/spotify.svg';
import phProfile from '../assets/images/placeholder-profile.jpg';
import productImage1 from '../assets/images/product-1.webp';
// assets images
import provideImage from '../assets/images/team-work.webp';
// components
import Footer from '../components/Footer';
import Header from '../components/Header';

class Mainpage extends Component {
  state = {
    provide: [
      "Café de granos de alta calidad",
      "Comidas saludables, puedes solicitar los ingredientes",
      "Chatea con nuestro personal para obtener una mejor experiencia al hacer pedidos",
      
    ],
    reviews: [
      {
        name: "Foo Barr",
        text: "Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!",
      },
      {
        name: "Yessica Christy",
        text: "I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte",
      },
      {
        name: "Kim Young Jou",
        text: "This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town",
      },
    ],
  };
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <section className="bg-main bg-cover bg-center py-20 text-white font-bold">
            <div className="global-px">
              <div className="flex flex-col gap-6 w-[75%] lg:w-[50%] text-sm">
                <h2 className="text-4xl font-bold">
                  Inicia tu día con un buen cafe!  
                </h2>
                <p>
                Ofrecemos alta calidad, buen gusto y comidas saludables hechas con amor solo para ti.
                </p>
                <div className="mt-5">
                  <Link
                    className="bg-secondary px-6 py-4 text-[#6A4029] rounded-xl"
                    to={"/products/"}
                  >
                    Haz tu compra!
                  </Link>
                </div>
              </div>
             {/*  <section className="relative bg-white mt-20 mb-[-9rem] rounded-xl shadow-xl text-quartenary flex flex-row py-5 justify-center items-center text-center md:text-left">
                <aside className="flex-1 border-r-2 py-2 md:py-6 flex flex-col md:flex-row justify-center gap-3 md:gap-8 items-center">
                  <div>
                    <div className="bg-secondary rounded-full p-2 w-10 aspect-square flex justify-center items-center">
                      <img src={staffIcon} alt="" />
                    </div>
                  </div>
                  <div>
                    <p className="text-md lg:text-xl">90+</p>
                    <p className="font-normal text-primary">Staff</p>
                  </div>
                </aside>
                <aside className="flex-1 border-r-2 py-2 md:py-6 flex flex-col md:flex-row justify-center gap-3 md:gap-8 items-center">
                  <div className="bg-secondary rounded-full p-2 w-10 aspect-square flex justify-center items-center">
                    <img src={loveIcon} alt="" />
                  </div>
                  <div>
                    <p className="text-md lg:text-xl">800+</p>
                    <p className="font-normal text-primary">Customers</p>
                  </div>
                </aside>
                <aside className="flex-1 py-2 md:py-6 flex flex-col md:flex-row justify-center gap-3 md:gap-8 items-center">
                  <div className="bg-secondary rounded-full p-2 w-10 aspect-square flex justify-center items-center">
                    <img src={placeIcon} alt="" />
                  </div>
                  <div>
                    <p className="text-md lg:text-xl">30+</p>
                    <p className="font-normal text-primary">Stores</p>
                  </div>
                </aside>
              </section> */}
            </div>
          </section>
          <div className="mb-8 md:mb-20"></div>
          <section className="flex flex-col lg:flex-row global-px py-20 lg:gap-32">
            <div className="flex-1 img">
              <img src={provideImage} alt="" width="100%" />
            </div>
            <div className="flex-1 flex flex-col justify-center gap-5">
              <h2 className="text-quartenary font-semibold text-[35px]">
              Brindamos Buen Café y Comidas Saludables
              </h2>
              <p className="text-[#4F5665]">
              Nuestras Bebidas saludables están hechas con ingredientes de alta calidad.
              Puedes solicitar los ingredientes que deseas en tu pedido.
              </p>
              <ul className="flex flex-col max-w-md space-y-1 text-[#4F5665] list-inside gap-4">
                {this.state.provide.map((text, idx) => (
                  <li className="flex items-center gap-4" key={idx}>
                    <img src={checkCircle} alt="" /> {text}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="global-px py-8 md:py-20">
            <div className="flex flex-col items-center">
              <h2 className="text-4xl text-quartenary font-semibold mb-5 text-center">
              Aquí tienes algunas sugerencias de los favoritos de la gente
              </h2>
              <p className="text-base text-gray-700 text-center">
              obtener una experiencia de pedido más satisfactoria.
              

              </p>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-12 mt-20">
              {Array("", "", "").map((item, idx) => (
                <div
                  className="flex-1 flex flex-col justify-center border-gray-400 border rounded-xl px-5 py-5 md:py-12 items-center gap-5 text-base"
                  key={idx}
                >
                  <img
                    src={productImage1}
                    alt=""
                    width="140px"
                    className="rounded-full mb-7"
                  />
                  <h3 className="text-lg font-medium">capuchino vienes</h3>
                  <ul className="flex flex-col gap-5 mb-8 md:mb-20">
                    <li className="flex items-center gap-4">
                      <img src={checkIcon} alt="" /> 
                    </li>
                    <li className="flex items-center gap-4">
                      <img src={checkIcon} alt="" />
                    </li>
                    <li className="flex items-center gap-4">
                      <img src={checkIcon} alt="" /> 
                    </li>
                    <li className="flex items-center gap-4">
                      <img src={checkIcon} alt="" /> 
                    </li>
                  </ul>
                  <p className="font-medium text-2xl"></p>
                  <button className="bg-secondary text-tertiary px-9 py-3 rounded-3xl font-bold">
                    Compra
                  </button>
                </div>
              ))}
            </div>
          </section>
          <section className="global-px py-8 md:py-20">
            <div className="flex flex-col items-center mb-8 md:mb-20">
              <h2 className="text-4xl text-quartenary font-semibold mb-5 text-center">
              Visita Nuestra Tienda
                <br />
                
              </h2>
              <p className="text-base text-gray-700 text-center">
              Visita Nuestra Tienda en el lugar en el mapa a continuación pase su buen día allí. ¡Nos vemos pronto!
                    
                    
                
              </p>
            </div>
            <div className="mt-10">
              <img src={mapImage} alt="global map" />
            </div>
          </section>
          <section className="global-px py-8 md:py-20">
            <div className="flex flex-col items-center mb-8 md:mb-20">
              <h2 className="text-4xl text-quartenary font-semibold mb-5 text-center">
              ¡Descubre HenryCafé
              </h2>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center gap-4 md:gap-12 ">
              {/*<img
                src={netflixLogo}
                alt=""
                width="100px"
                className="lg:w-[15%] aspect-[3/2] object-contain grayscale opacity-20 duration-300 hover:filter-none hover:opacity-100"
              />
              <img
                src={redditLogo}
                alt=""
                width="100px"
                className="lg:w-[15%] aspect-[3/2] object-contain grayscale opacity-20 duration-300 hover:filter-none hover:opacity-100"
              />
              <img
                src={amazonLogo}
                alt=""
                width="100px"
                className="lg:w-[15%] aspect-[3/2] object-contain grayscale opacity-20 duration-300 hover:filter-none hover:opacity-100"
              />
              <img
                src={discordLogo}
                alt=""
                width="100px"
                className="lg:w-[15%] aspect-[3/2] object-contain grayscale opacity-20 duration-300 hover:filter-none hover:opacity-100"
              />
             {/* <img
                src={spotifyLogo}
                alt=""
                width="100px"
                className="lg:w-[15%] aspect-[3/2] object-contain grayscale opacity-20 duration-300 hover:filter-none hover:opacity-100"*/}
              
            </div>
          </section>
          <section className="global-px py-8 md:py-20">
            <div className="flex flex-col items-center mb-8 md:mb-20 text-center">
              <h2 className="text-3xl md:text-[35px] text-quartenary font-semibold mb-5">
              Visítanos hoy y disfruta de la combinación perfecta 
                <br /> 
              </h2>
              <p className="text-[1rem] text-center max-w-[555px] text-primary">
              Estas son las historias de nuestros clientes que nos han visitado con mucho gusto.
              </p>
            </div>
            <div className="overflow-auto flex flex-row gap-5 flex-wrap lg:flex-nowrap ">
              {this.state.reviews.map((review, idx) => {
                return (
                  <div
                    className="w-[400px] border-gray-300 hover:border-tertiary border-2 duration-200 rounded-xl p-7 space-y-4 hover:shadow-2xl mx-auto"
                    key={idx}
                  >
                    <div className="flex flex-row gap-2 items-center">
                      <img
                        src={phProfile}
                        alt=""
                        className="w-14 aspect-square object-cover rounded-full"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-quartenary text-lg">
                          {review.name}
                        </p>
                        <p className="text-primary text-sm"></p>
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        4.5 <img src={starIcon} alt="" />
                      </div>
                    </div>
                    <p className="text-quartenary">“{review.text}</p>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="global-px z-10 relative w-full mb-6 md:mb-[-6rem]">
            <div className="shadow-primary rounded-xl flex flex-col md:flex-row py-10 md:py-14 px-8 md:px-16 bg-white text-center md:text-left">
              <aside className="flex-1 space-y-4 mb-5 md:mb-0">
                <p className="text-3xl font-semibold">¡Consulta nuestra promoción de hoy!</p>
                <p className="text-primary">
                  &apos; mira las ofertas y elige la tuya
                </p>
              </aside>
              <aside className="hidden lg:block lg:flex-1"></aside>
              <aside className="flex-1 flex flex-col justify-center">
                <button className="ml-auto w-[100%] md:w-[75%]  bg-secondary rounded-xl py-4 text-tertiary font-bold">
                Ver promoción
                </button>
              </aside>
            </div>
          </section>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Mainpage;
