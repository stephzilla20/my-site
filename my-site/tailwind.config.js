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
        open: ["Open-Sans", "sans-serif"]
      },

      colors:{
        'polarnight-1': '#4C566A',
        'polarnight-2': '#434C5E',
        'polarnight-3': '#3B4252',
        'polarnight-4': '#2E3440',
        'snowstorm-1': '#ECEFF4',
        'snowstorm-2': '#E5E9F0',
        'snowstorm-3': '#D8DEE9',
        'snowstorm-3-custom': 'rgb(216, 222, 233, 0.5)',
        'frost-1': '#5E81AC',
        'frost-2': '#81A1C1',
        'frost-3': '#88C0D0',
        'frost-4': '#8FBCBB',
        'custom-slate': 'rgba(140, 151, 156, .5)', // Custom color with 50% opacity
        
      },
      keyframes:{
        bubble: {
          '0%':  { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '10%': { borderRadius: '50% 60% 40% 30% / 30% 50% 60% 70%' },
          '20%': { borderRadius: '40% 50% 70% 30% / 50% 70% 40% 60%' },
          '30%': { borderRadius: '30% 60% 50% 70% / 70% 40% 60% 30%' },
          '40%': { borderRadius: '60% 40% 50% 70% / 30% 70% 40% 60%' },
          '50%': { borderRadius: '40% 60% 30% 50% / 60% 30% 50% 70%' },
          '60%': { borderRadius: '50% 60% 30% 70% / 60% 30% 70% 40%' },
          '70%': { borderRadius: '60% 50% 40% 30% / 30% 60% 50% 70%' },
          '80%': { borderRadius: '40% 60% 40% 50% / 50% 60% 30% 60%' },
          '90%': { borderRadius: '50% 40% 60% 30% / 60% 50% 30% 40%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)', // Reduced bounce height
          },
        },
      },
      animation: {
        bubble: 'bubble 30s linear infinite;',
        bounce: 'bounce 0.7s ease infinite'
      },
      boxShadow: {
          'bubbleShadow': " 0 3px 3px 3px rgb(94, 129, 172, 0.4)",
          'bubbleShadowDk':" 0 2px 2px 2px rgb(236, 239, 244, 0.2)"
      },
      spacing: {
        "100": "450px",
        "300px": "300px"
      }
    },
  },
  plugins: [],
}
