import image1 from "../images/desktop-image-hero-1.jpg";
import image2 from "../images/desktop-image-hero-2.jpg";
import image3 from "../images/desktop-image-hero-3.jpg";
import dark from "../images/image-about-dark.jpg";
import light from "../images/image-about-light.jpg";
import left from "../images/icon-angle-left.svg";
import right from "../images/icon-angle-right.svg";
import logo from "../images/logo.svg";
import menuIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";
import arrowIcon from "../images/icon-arrow.svg";
import { useState } from "react";

function App() {
  return <Homepage />;
}
function Homepage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: image1,
      title: "Discover innovative ways to decorate",
      description:
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
      image: image2,
      title: "We are available all across the globe",
      description:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      image: image3,
      title: "Manufactured with the best materials",
      description:
        "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    },
  ];
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  return (
    <section className="min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]">
        <div className="relative">
          <div className="flex items-center justify-between w-full absolute lg:justify-start p-16">
            <button
              className="block lg:hidden relative z-50"
              aria-label="Toggle menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                src={isOpen ? closeIcon : menuIcon}
                alt={isOpen ? "Close menu" : "Open menu"}
                className="w-6 h-6"
              />
            </button>
            <div className="flex justify-between items-center">
              <img src={logo} alt="" className="lg:mr-10" />
            </div>
            {/* Invisible spacer to balance the hamburger on mobile */}
            <div className="w-6 lg:hidden"></div>
            <nav className="hidden lg:block">
              <ul className="flex gap-4 text-white">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Shop</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
              </ul>
            </nav>
            {isOpen && (
              <nav>
                <ul className="flex gap-4 text-white lg:hidden">
                  <li onClick={() => setIsOpen(false)}>Home</li>
                  <li onClick={() => setIsOpen(false)}>Shop</li>
                  <li onClick={() => setIsOpen(false)}>About</li>
                  <li onClick={() => setIsOpen(false)}>Contact</li>
                </ul>
              </nav>
            )}
          </div>
          <img
            src={slides[currentSlide].image}
            alt="Room Decoration"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 right-0 lg:right-auto lg:left-0 flex  lg:hidden">
            <button
              className="bg-black hover:bg-gray-800 p-6 transition-colors"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <img src={left} alt="Previous" className="w-4 h-4" />
            </button>
            <button
              className="bg-black hover:bg-gray-800 p-6 transition-colors"
              onClick={nextSlide}
              aria-label="next slide"
            >
              <img src={right} alt="Next" className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center relative p-8 lg:p-20">
          <div className="relative">
            <h2 className=" uppercase text-3xl lg:text-4xl font-bold mb-6 tracking-wide font-spartan">
              {slides[currentSlide].title}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 font-spartan font-light">
              {slides[currentSlide].description}
            </p>
            <a
              href="#"
              className="uppercase tracking-widest text-sm hover:text-gray-600 transition-colors inline-flex flex items-center gap-4"
            >
              <span className="text-xl flex gap-4">SHOP NOW</span>
              <img src={arrowIcon} alt="" />
            </a>
          </div>
          <div className="absolute bottom-0 right-0 lg:right-auto lg:left-0 flex hidden lg:block">
            <button
              className="bg-black hover:bg-gray-800 p-6 transition-colors"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <img src={left} alt="Previous" className="w-4 h-4" />
            </button>
            <button
              className="bg-black hover:bg-gray-800 p-6 transition-colors"
              onClick={nextSlide}
              aria-label="next slide"
            >
              <img src={right} alt="Next" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr]">
        <div>
          <img
            src={dark}
            alt="Dark furniture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-8 lg:p-12">
          <h2 className="uppercase text-xl font-bold mb-4 tracking-wide">
            about our furniture
          </h2>
          <p className="text-gray-500 leading-relaxed font-spartan font-light ">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.{" "}
          </p>
        </div>
        <div>
          <img
            src={light}
            alt="light furniture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
export default App;
