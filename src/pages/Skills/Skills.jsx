import React from 'react';
import Laravel from '../../assets/img/logo/laravel.svg'
import reactImg from '../../assets/img/logo/react.svg'
import reduxImg from '../../assets/img/logo/redux.svg'
import linux from '../../assets/img/logo/linux.svg'
import git from '../../assets/img/logo/github.svg'
import debian from '../../assets/img/logo/debian.svg'
import mysql from '../../assets/img/logo/mysql.svg'
import compos from '../../assets/img/logo/composer.svg'
import js from '../../assets/img/js.png'
const Skills = () => {
    return (
        <>
        
        <div className="col-span-4 lg:col-span-3 flex flex-col  items-center justify-center text-center w-full border px-4 py-3 rounded-lg">
      <img src={Laravel} alt="" className="h-10 lg:h-16" />
      <p className="font-montserrat-bold text-xs mt-3">Laravel</p>
      <small className='text-green text-xs opacity-75'>1 year</small>
    </div>

    <div className="col-span-4 lg:col-span-3 flex flex-col items-center justify-center text-center w-full border px-4 py-3 rounded-lg">
      <img src={reactImg} alt="" className="h-10 lg:h-16" />
      <p className="font-montserrat-bold text-xs mt-3">React</p>
      <small className='text-green text-xs opacity-75'>1 year</small>
    </div>

    <div className="col-span-4 lg:col-span-3 flex flex-col items-center justify-center text-center w-full border px-4 py-3 rounded-lg">
      <img src={reduxImg} alt="" className="h-10 lg:h-16" />
      <p className="font-montserrat-bold text-xs mt-3">Redux</p>
      <small className='text-green text-xs opacity-75'>1 year</small>
    </div>

    <div className="col-span-4 lg:col-span-3 flex flex-col items-center justify-center text-center w-full border px-4 py-3 rounded-lg">
      <img src={linux} alt="" className="h-10 lg:h-16" />
      <p className="font-montserrat-bold text-xs mt-3">Linux</p>
      <small className='text-green text-xs opacity-75'>1 year</small>
    </div>

    <div className="col-span-4 lg:col-span-3 flex flex-col items-center justify-center text-center w-full border px-4 py-3 rounded-lg">
      <img src={mysql} alt="" className="h-10 lg:h-16" />
      <p className="font-montserrat-bold text-xs mt-3">MySql</p>
      <small className='text-green text-xs opacity-75'>1 year</small>
    </div>

    <div className="col-span-4 lg:col-span-3 flex flex-col items-center justify-center text-center w-full border px-4 py-3 rounded-lg">
      <img src={git} alt="" className="h-10 lg:h-16" />
      <p className="font-montserrat-bold text-xs mt-3">GitHub</p>
      <small className='text-green text-xs opacity-75'>1 year</small>
    </div>
    <div className="col-span-4 lg:col-span-3 flex flex-col items-center justify-center text-center w-full border px-4 py-3 rounded-lg">
      <img src={debian} alt="" className="h-10 lg:h-16" />
      <p className="font-montserrat-bold text-xs mt-3">Debian</p>
      <small className='text-green font-monsterrat-bold text-xs opacity-75'>1 year</small>
    </div>
    <div className="col-span-4 lg:col-span-3 flex flex-col items-center justify-center text-center w-full border px-4 py-3 rounded-lg">
      <img src={compos} alt="" className="h-10 lg:h-16" />
      <p className="font-montserrat-bold text-xs mt-3">Composer</p>
      <small className='text-green text-xs opacity-75'>1 year</small>
    </div>
    <div className="col-span-4 lg:col-span-3 flex flex-col items-center justify-center text-center w-full border px-4 py-3 rounded-lg">
      <img src={js} alt="" className="h-10 lg:h-16" />
      <p className="font-montserrat-bold text-xs mt-3">JavaScript</p>
      <small className='text-green text-xs opacity-75'>1 year</small>
    </div>
        </>
        
    )
};

export default Skills;
