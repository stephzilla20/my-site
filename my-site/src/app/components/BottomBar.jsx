import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import { IoMdDocument } from "react-icons/io";

export default function BottomBar(){


  return (
    
       
    <div className=' mt-8 text-4xl text-frost-1 dark:text-snowstorm-1 dark:hover:text-snowstorm-1 flex justify-center space-x-8 '>
      <a className="hover:text-frost-2 dark:hover:text-snowstorm-3-custom" href='https://www.linkedin.com/in/stephen-tao-7ab814210' target='_blank'><AiFillLinkedin /></a>
      <a className="hover:text-frost-2 dark:hover:text-snowstorm-3-custom"href='https://github.com/stephzilla20' target='_blank'><AiFillGithub /></a>
      <a className="hover:text-frost-2 dark:hover:text-snowstorm-3-custom" href='https://drive.google.com/file/d/1MMMsK6ju8_qAZNNKrzJVSCENMK3VJ8-b/view' target="_blank"><IoMdDocument/></a>
    </div>

  )


}