'use client'
import React, { useState } from "react";
import Head from 'next/head'
import Image from 'next/image'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {BsSun} from "react-icons/bs";
import {MdEmail} from 'react-icons/md'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"></meta>
      </Head>
      <main className='bg-snowstorm-2 px-10 dark:bg-polarnight-4 transition duration-500 ease-in-out'>
        <section className="bg-snowstorm-2 min-h-screen dark:bg-polarnight-4 transition duration-500 ease-in-out">
          <nav className='py-10 mb-15 flex justify-between '>
            <h1 className='text-xl font-Varela text-polarnight-2 dark:text-snowstorm-2'>stephen</h1>
            <ul className='text-xl font-Varela flex items-center text-polarnight-2 dark:text-snowstorm-2 space-x-8'>
              <li><a href='https://drive.google.com/file/d/1MMMsK6ju8_qAZNNKrzJVSCENMK3VJ8-b/view'target='_blank'>Resume</a></li>
              <li>
                <div onClick ={() => setDarkMode(!darkMode)} className='transition duration-500 ease-in-out cursor-pointer text-polarnight-2 dark:text-snowstorm-2 text-2xl'>
                  {darkMode ? <BsSun/> : <BsFillMoonStarsFill/>}
                </div>
              </li>

            </ul>
          </nav>
          <div className='p-10'>
            <h1 className='font-Varela text-polarnight-2 dark:text-snowstorm-2 text-5xl py-10 text-center text-g'> Hi! My name is <span className='text-frost-1 font-bold transition duration-500 ease-in-out'>Stephen Tao</span></h1>
            <p className='font-Varela text-polarnight-2 dark:text-snowstorm-2 text-lg leading-7 pb-10'>I'm currently a <span className='text-frost-1 transition duration-500 ease-in-out'>second year</span> co-op student at Toronto Metropolitan University (Ryerson) studying computer science. You'll most likely find me at the gym, on the ball court, in the kitchen cooking, or learning the latest technologies. I just started to learn photography and will hopefully display my pictures here. Currently I'm interested in <span className='text-frost-1'>web development</span>. #2ELorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.3440
  </p>
          </div>
          
          {/* <hr className='pt-10'></hr> */}
          <div className='text-4xl text-frost-1 dark:text-snowstorm-2 flex justify-center space-x-8 transition duration-500 ease-in-out'>
            <a href='https://www.linkedin.com/in/stephen-tao-7ab814210' target='_blank'><AiFillLinkedin /></a>
            <a href='https://github.com/stephzilla20' target='_blank'><AiFillGithub /></a>
            <a href='mailto:s1tao@torontomu.ca' target='_blank'><MdEmail /></a>
          </div>




        </section>

        

      </main>
    </div>
  );
}
