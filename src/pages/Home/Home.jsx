import React from 'react';
import BG from '../../assets/img/BG.jpg'
import Skills from '../Skills/Skills'
const Home = () => {
  return (
    <>
       
        <>
      <section className="flex flex-col items-center px-2 xl:px-10 font-montserrat-medium">
        <main className="container grid grid-cols-12 gap-5 mx-auto">
          <aside className="col-span-12 lg:col-span-4 h-68 xl:h-96 xl:sticky xl:top-0 ">
          <header className="bg-gray-900 shadow-slate-900/100 shadow-2xl text-gray-100 px-10 pt-5 pb-10 mt-5 rounded-xl">
      <section className="flex flex-col justify-center lg:justify-start lg:items-start">
        <div className="flex items-center">
          <img className="h-36 rounded-lg mr-3" src={BG} alt="bg" />
          <div className="flex flex-col">
            <h1 className="font-montserrat-bold text-2xl"> Glyjow Begenc Muradovich </h1>
            <h3 className="font-montserrat-bold text-md text-gray-300">
              Junior Fullstack developer
            </h3>
          </div>
        </div>

        <main className="flex flex-col">
          <aside>
            <div className="font-montserrat-medium text-xs lg:text-sm flex justify-between mt-10">
              <div>
                <p> Phone: </p>
                <small className="text-gray-400"> +99365292248 </small>
              </div>

              <div className="ml-5">
                <p> Email: </p>
                <small className="text-gray-400"> bekglycev@gmail.com </small>
              </div>
            </div>

            <div className="font-montserrat-medium text-xs lg:text-sm flex flex-col xl:flex-row justify-between mt-2 xl:mt-5">
              <div>
                <p> Github: </p>
                <small className="text-gray-400">
                  https://github.com/BegencGlyjow
                </small>
              </div>

              <div className="xl:ml-5 mt-2 xl:mt-0">
                <p> Location: </p>
                <small className="text-gray-400">Turkmenabat, Turkmenistan</small>
              </div>
            </div>
          </aside>
        </main>
      </section>
    </header>
          </aside>

          <aside className="col-span-12 lg:col-span-8 px-5 font-montserrat-medium">
            <h1 className="text-lg lg:text-2xl my-5 uppercase font-montserrat-bold text-green-500">
              About
            </h1>
            <p className="text-md lg:text-lg font-bold  text-gray-700">
            I am a student of the Turkmen Agricultural Institute.
            I am in the ranks of the programmers of the institute.
            I have been doing web programming for two years
              I have been professionally engaged in 
              web development for the last two years. I can write high-quality, scalable code. respect
              OOP and design patterns, but understand where and when they are appropriate
              apply. I strive for efficiency, so I know the features and
              the subtleties of the languages I use. I am actively studying new ones
              tools and approaches, but always come out of development
              considerations of expediency. I try to be as much as possible
              productive developer. Basic competencies:
              (front-end), back-end, layout, interfaces.
              frameworks, tools: <h1 className='text-green-600'>PHP 7, JavaScript, Python 3, Django, MySQL, Laravel, React,TailwindCss
              ,Operation System
              </h1>
            </p>

            <hr className="my-5" />

            <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-green-500 mt-5">
              Languages
            </h1>
            <div className="flex">
              <p className="bg-gray-300 px-3 py-1 rounded-lg mr-3">Turkmen</p>
              <p className="bg-gray-300 px-3 py-1 rounded-lg mr-3">Russian</p>
              <p className="bg-gray-300 px-3 py-1 rounded-lg mr-3">English</p>
              <p className="bg-gray-300 px-3 py-1 rounded-lg mr-3">Turkish</p>
            </div>

            <hr className="my-5" />

            <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-green-500">
              Experience
            </h1>
            <div className="border-l-4 border-gray-200 mb-4 lg:mb-7 px-5 py-2">
            <small className="bg-gray-900 text-white px-2 py-1 text-lg"> Turkmen Agricultural Institute</small>
            <h3 className="font-montserrat-bold text-md lg:text-xl text-gray-700 mt-1">3 years</h3>
            <h4 className="text-sm lg:text-md text-gray-500">Student</h4>
        </div>   

            <hr className="my-5" />

              <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-green-500 mt-5">
              Skills
            </h1>
            <div className="grid grid-cols-12 gap-3 xl:gap-5">
             <Skills/>
            </div>
          </aside>
        </main>

        <footer className="flex items-center p-5">
          <svg
            className="w-6 h-6 m-2 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
          Oguzly team. 2021
        </footer>
      </section>
    </>
    </>
  )
};

export default Home;
