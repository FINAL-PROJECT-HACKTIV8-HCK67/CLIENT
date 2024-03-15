import { useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/1.jpg";
import image2 from "../assets/3.jpg";
import image3 from "../assets/training.jpg";
export default function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3];
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
      <div className="relative w-screen h-screen overflow-hidden bg-white">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link to={"/login"}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                object-Fit="contain"
              />
            </Link>
          </div>
        ))}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <h2 className="text-3xl font-bold text-center mt-10">Our Courses</h2>
      <section className="text-gray-600 body-font mt-5">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="https://th.bing.com/th/id/R.add6bc31cf82c53352031dce67d077a4?rik=lYtnA3Z9e9PBtg&riu=http%3a%2f%2fwww.brianbrookshire.com%2fwp-content%2fuploads%2f2016%2f03%2fbiology.jpg&ehk=QfxvmcdW7C6po%2f1aRKSxLac87D1beLocF1Sotj37ZB0%3d&risl=&pid=ImgRaw&r=0"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY-1
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                    Biology
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe voluptates incidunt suscipit, eius blanditiis animi
                    culpa libero praesentium mollitia adipisci corrupti nostrum!
                    Blanditiis fugiat harum enim possimus tempore at eligendi.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link to={"/login"}>
                      <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                        Learn more
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="https://kitamenulis.id/wp-content/uploads/2021/09/Cover-Depan-30-scaled.jpg"
                  alt="blog"
                  objectFit="contain"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY-1
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                    Biology Reproduksi
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe voluptates incidunt suscipit, eius blanditiis animi
                    culpa libero praesentium mollitia adipisci corrupti nostrum!
                    Blanditiis fugiat harum enim possimus tempore at eligendi.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link to={"/login"}>
                      <button className="bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">
                        Learn more
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="https://th.bing.com/th/id/R.d869c3253905036774b4965a39853e95?rik=1orU6m08LlnqPA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-m4JvYm72EoY%2fVA9Mdn9es8I%2fAAAAAAAAABg%2fa7pa9uUbQ6c%2fs1600%2fbiology.gif&ehk=UJNRT6WgEqhR1x8GIhXTlD7oKt%2bX6wdyAECkv77I9H4%3d&risl=&pid=ImgRaw&r=0"
                  alt="blog"
                  objectFit="contain"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY-1
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                    Biology
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe voluptates incidunt suscipit, eius blanditiis animi
                    culpa libero praesentium mollitia adipisci corrupti nostrum!
                    Blanditiis fugiat harum enim possimus tempore at eligendi.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link to={"/login"}>
                      <button className="bg-gradient-to-r from-fuchsia-300 to-pink-400 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg">
                        Learn more
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
