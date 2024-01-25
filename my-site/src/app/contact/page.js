'use client'
import React, { useState } from "react";
import Head from 'next/head'
import { Button, Card} from "@mui/material";
import { AiFillMail } from "react-icons/ai";

export default function Home() {

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, viewport-fit=cover"></meta>
      </Head>
      <main className='caret-transparent bg-snowstorm-2 px-10 dark:bg-polarnight-4 transition duration-500 ease-in-out'>
        
      <div className="flex flex-col items-start" >
            <h1 className='mb-8 font-Varela text-5xl text-frost-1 dark:text-frost-3 font-bold lg:mb-10 lg:pb-10 '>contact</h1>
      </div>


        
      <div className=' mt-8 text-4xl text-frost-1 dark:text-snowstorm-2 flex justify-center space-x-8 '>
            <a href='s1tao@torontomu.ca' target='_blank'><AiFillMail /></a>
            {/* <a href='https://github.com/stephzilla20' target='_blank'><AiFillGithub /></a>
            <a href='https://drive.google.com/file/d/1MMMsK6ju8_qAZNNKrzJVSCENMK3VJ8-b/view' target="_blank"><IoMdDocument/></a> */}
          </div>

      </main>
    </div>
  );
}
