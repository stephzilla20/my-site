'use client'
import React, { useState } from "react";
import Head from 'next/head'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import { IoMdDocument } from "react-icons/io";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    //page with dark theme button integrated 
    // <div className={darkMode ? "dark" : ""}>
    //   <Head>
    //     <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, viewport-fit=cover"></meta>
    //   </Head>
    //   <main className='caret-transparent bg-snowstorm-2 px-10 dark:bg-polarnight-4 '>
    //     <section className=" bg-snowstorm-2 min-h-screen dark:bg-polarnight-4 ">
    //       <nav className='py-10 mb-15 flex justify-between '>
    //         <ul className='text-xl font-Varela flex items-center text-polarnight-2 dark:text-snowstorm-2 space-x-8'>
    //           <li><a href='https://drive.google.com/file/d/1MMMsK6ju8_qAZNNKrzJVSCENMK3VJ8-b/view'target='_blank'>Resume</a></li>
    //           <li>
    //             <div onClick ={() => setDarkMode(!darkMode)} className=' cursor-pointer text-polarnight-2 dark:text-snowstorm-2 text-2xl'>
    //               {darkMode ? <BsSun/> : <BsFillMoonStarsFill/>}
    //             </div>
    //           </li>

    //         </ul>
    //       </nav>
    //       <div className="text-center">
    //         <h2 className='mb-[-2.5rem] font-Varela text-polarnight-2 dark:text-snowstorm-2 text-4xl py-10'> hi! i'm </h2>
    //         <h1 className='mb-8 font-Varela text-5xl text-frost-1 dark:text-frost-3 text-center font-bold  '>Stephen Tao</h1>
    //         <p className='font-Varela text-polarnight-2 dark:text-snowstorm-2 text-lg leading-7 pb-10'>
    //           I'm currently a <span className='text-frost-1 dark:text-frost-3 '>second year</span> co-op student at Toronto Metropolitan University (Ryerson) studying computer science.  Feel free to connect with me below or check out my resume at the top! 
    //         </p>
    //       </div>

       
    //       <div className='text-4xl text-frost-1 dark:text-snowstorm-2 flex justify-center space-x-8 '>
    //         <a href='https://www.linkedin.com/in/stephen-tao-7ab814210' target='_blank'><AiFillLinkedin /></a>
    //         <a href='https://github.com/stephzilla20' target='_blank'><AiFillGithub /></a>
    //         <a href='mailto:s1tao@torontomu.ca' target='_blank'><MdEmail /></a>
    //       </div>




    //     </section>

        

    //   </main>
    // </div>


    //page with dark theme button as react component 
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, viewport-fit=cover"></meta>
      </Head>
      <main className='caret-transparent  px-10 bg-snowstorm-2 dark:bg-polarnight-4 '>
          <div className="flex flex-col justify-center" >
            <div className='mb-3 mt-3 flex justify-center items-center'>
              <Image
                  src="/pics/my-pic.JPG"
                  width={500}
                  height={500}
                  alt="profile pic"
                  className="rounded-full overflow-hidden w-[240px] h-[240px] object-cover"
                />
            </div>
            <h2 className='mb-[-2.5rem] font-Varela text-polarnight-2 dark:text-snowstorm-2 text-4xl py-10 '> hi! i'm </h2>
            <h1 className='mb-8 font-Varela text-5xl text-frost-1 dark:text-frost-3 font-bold '>Stephen Tao</h1>
            <p className='font-Varela text-polarnight-2 dark:text-snowstorm-2 text-lg leading-7 pb-10 '>
              I'm currently a 2nd year co-op student at <span className='text-frost-1 dark:text-frost-3 '>Toronto Metropolitan University (Ryerson)</span> studying computer science. Feel free to connect with me below and check out my resume!
            </p>
          </div>

       
          <div className=' mt-8 text-4xl text-frost-1 dark:text-snowstorm-2 flex justify-center space-x-8 '>
            <a href='https://www.linkedin.com/in/stephen-tao-7ab814210' target='_blank'><AiFillLinkedin /></a>
            <a href='https://github.com/stephzilla20' target='_blank'><AiFillGithub /></a>
            <a href='https://drive.google.com/file/d/1MMMsK6ju8_qAZNNKrzJVSCENMK3VJ8-b/view' target="_blank"><IoMdDocument/></a>
          </div>




        

      </main>
    </div>
  );
}
