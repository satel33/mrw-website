module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/CMSComponents/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/icons/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './helpers/**/*.{js,ts,jsx,tsx}',
    './src/CMSComponents/container/*.{js,ts,jsx,tsx}',
    // Add more here
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Gilroy', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        sans: ['Gilroy'],
        serif: ['Gilroy'],
        mono: ['Gilroy'],
        display: ['Gilroy'],
        body: ['Gilroy'],
      },
      colors: {
        // 100 is the base
        // --- Primary Shades
        'primary-120': '#0c243e',
        'primary-110': '#0e2946',
        'primary-100': '#0F2D4E',
        'primary-90': '#274260',
        'primary-80': '#3f5771',
        // --- Secondary Shades
        'secondary-100': '#FF4000',
        // --- Terciary Shades
        'terciary-100': '#3E92CC',
        'white-100': '#FFFAFF',
        'black-100': '#1E1B18',
        // --- CALL TO ACTION BLOCK
        'bluish-100': '#0f2d4e',
      },
      height: {
        500: '500px',
        648: '648px',
        768: '768px',
        820: '820px',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['active'],
      translate: ['active', 'group-hover'],
      border: ['last'],
      visibility: ['hover', 'focus'],
      width: ['responsive', 'hover', 'focus'],
    },
    scrollbar: ['rounded'],
  },
  plugins: [require('tailwind-scrollbar')],
}
