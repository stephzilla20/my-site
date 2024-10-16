import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import { IoMdDocument } from "react-icons/io";

export default function BottomBar(){


  return (
    
       
    <div className=' mt-8 text-4xl text-frost-1-custom dark:text-snowstorm-1-custom flex justify-center space-x-8 '>
      <a className="hover:text-frost-2 dark:hover:text-snowstorm-1" href='https://www.linkedin.com/in/stephen-tao-7ab814210' target='_blank'><AiFillLinkedin /></a>
      <a className="hover:text-frost-2 dark:hover:text-snowstorm-1"href='https://github.com/stephzilla20' target='_blank'><AiFillGithub /></a>
      <a className="hover:text-frost-2 dark:hover:text-snowstorm-1" href='https://drive.google.com/drive/folders/1l4DHbbjp_z07gfQAARV0bWPxk8goKVzo?usp=sharing' target="_blank"><IoMdDocument/></a>
    </div>

  )


}