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
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, viewport-fit=cover"></meta>
      </Head>
      <main className='caret-transparent bg-snowstorm-2 px-10 dark:bg-polarnight-4 transition duration-500 ease-in-out'>
        <section className="bg-snowstorm-2 min-h-screen dark:bg-polarnight-4 transition duration-500 ease-in-out">
          <nav className='py-10 mb-15 flex justify-between '>
            <h1 className='text-xl font-Varela text-polarnight-2 dark:text-snowstorm-2'>S</h1>
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
            <h1 className='font-Varela text-polarnight-2 dark:text-snowstorm-2 text-5xl py-10 text-center text-g'> hi! my name is <span className='text-frost-1 dark:text-frost-3  font-bold transition duration-500 ease-in-out '>Stephen Tao</span></h1>
            <p className='font-Varela text-polarnight-2 dark:text-snowstorm-2 text-lg leading-7 pb-10'>
              I'm currently a <span className='text-frost-1 dark:text-frost-3 transition duration-500 ease-in-out'>second year</span> co-op student at Toronto Metropolitan University (Ryerson) studying computer science. You'll most likely find me at the gym, on the ball court, in the kitchen cooking, or learning the latest technologies. I also recently started learn photography and photo editing. Currently I'm interested in <span className='text-frost-1 dark:text-frost-3'>web development</span> and hope to learn more about <span className='text-frost-1 dark:text-frost-3'>cloud development</span> and <span className='text-frost-1 dark:text-frost-3'>cyber security</span>. Feel free to connect with me below or check out my resume at the top! 
            </p>
          </div>

          {/* <div>
            <Image src={pic}></Image>
          </div> */}
          
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
