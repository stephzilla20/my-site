/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Varela: ["Varela-Regular"]
      },
      colors:{
        'polarnight-1': '#4C566A',
        'polarnight-2': '#434C5E',
        'polarnight-3': '#3B4252',
        'polarnight-4': '#2E3440',
        'snowstorm-1': '#ECEFF4',
        'snowstorm-2': '#E5E9F0',
        'snowstorm-3': '#D8DEE9',
        'frost-1': '#5E81AC',
        'frost-2': '#81A1C1',
        'frost-3': '#88C0D0',
        'frost-4': '#8FBCBB',
        
      }
    },
  },
  plugins: [],
}
