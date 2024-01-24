'use client'
import React, { useState } from "react";
import Head from 'next/head'
import Image from "next/image";




function About() {

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, viewport-fit=cover"></meta>
      </Head>
      <main className='caret-transparent bg-snowstorm-2 px-10 dark:bg-polarnight-4'>
        <div className="flex flex-col items-start" >
            <h1 className='mb-8 font-Varela text-5xl text-frost-1 dark:text-frost-3 font-bold '>about me</h1>
            {/* <div className='mb-8'>
              <Image
                  src="/pics/my-pic.JPG"
                  width={500}
                  height={500}
                  alt="profile pic"
                  className="rounded-full overflow-hidden w-[200px] h-[200px] object-cover"
                />
            </div> */}

              
            <p className='font-Varela text-polarnight-2 dark:text-snowstorm-2 text-lg leading-7 pb-10 '>
              I'm a computer science student studying at Toronto Metropolitan University! I try my best to be involved at school and am currently part of the Computer Science Course Union as a deputy and the Google Developer Student Club at TMU as the VP Events.  
            </p>

            <p className='font-Varela text-polarnight-2 dark:text-snowstorm-2 text-lg leading-7 pb-10 '>
              I am a big foodie, and love exploring the different restaurents downtown right where my school is! Besides that, my other hobbies include basketball and fitness.
            </p>

            <p className='font-Varela text-polarnight-2 dark:text-snowstorm-2 text-lg leading-7 pb-10 '>
            I'm currently interested in web development and learning <span className='text-frost-1 dark:text-frost-3 '>React</span> and <span className='text-frost-1 dark:text-frost-3 '>Nextjs.</span> I also recently started to learn mobile development with <span className='text-frost-1 dark:text-frost-3 '>React-Native</span>! 
            </p>
            

          </div>

        

      </main>
    </div>
  );
}

export default About