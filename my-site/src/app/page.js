import Head from 'next/head'
import Image from 'next/image'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md'

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"></meta>

      </Head>
      <main className='bg-polarnight-3 px-10'>
        <section className="bg-polarnight-3 min-h-screen">
          <nav className='py-10 mb-15 flex justify-between'>
            <h1 className='text-xl font-Varela text-snowstorm-2'>stephen</h1>
            <ul className='text-xl font-Varela flex items-center text-white space-x-8'>
              <li><a href='https://drive.google.com/file/d/1MMMsK6ju8_qAZNNKrzJVSCENMK3VJ8-b/view'target='_blank'>Resume</a></li>
              <li><a href='https://www.linkedin.com/in/stephen-tao-7ab814210' target='_blank'>LinkedIn</a></li>
              <li><a href='https://github.com/stephzilla20' target='_blank'>GitHub</a></li>
            </ul>
          </nav>
          <div className='p-10'>
            <h1 className='font-Varela text-snowstorm-3 text-5xl py-10 text-center text-g'> Hi! My name is <span className='text-frost-3'>Stephen Tao</span></h1>
            <p className='font-Varela text-snowstorm-2 text-lg leading-7 pb-10'>I'm currently a <span className='text-frost-2'>second year</span> co-op student at Toronto Metropolitan University (Ryerson) studying computer science. You'll most likely find me at the gym, on the ball court, in the kitchen cooking, or learning the latest technologies. I just started to learn photography and will hopefully display my pictures here. Currently I'm interested in <span className='text-frost-2'>web development</span>. </p>
          </div>
          
          <hr className='pt-10'></hr>
          <div className='text-4xl  text-snowstorm-3 flex justify-center space-x-8'>
            <a href='https://www.linkedin.com/in/stephen-tao-7ab814210' target='_blank'><AiFillLinkedin /></a>
            <a href='https://github.com/stephzilla20' target='_blank'><AiFillGithub /></a>
            <a href='mailto:s1tao@torontomu.ca' target='_blank'><MdEmail /></a>
          </div>




        </section>

        

      </main>
    </div>
  );
}
