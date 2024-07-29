'use client'

//using next-themes themeprovider to create a context to wrap components 

import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'



export default function Providers({children}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if(!mounted){
    return <>{children}</>
  }
  return (
    
    <ChakraProvider>
      <ThemeProvider defaultTheme='system' attribute='class'>{children}</ThemeProvider>
    </ChakraProvider>
    

  );
}
