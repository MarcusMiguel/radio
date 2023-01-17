const themeSwapper = require('tailwindcss-theme-swapper')

 const fontSizes =  {
  'xs': '0.4rem',
  'sm': '0.55rem',
   'base': '0.67rem',
   'bigger' : '0.75rem',
   'lg': '0.8rem',
   'xl': '1rem',
   '2xl': '1.2rem',
   '4xl': '1.7rem',
   '5xl': '2.4rem',
 };
 
const darkColors = {
  'background-default' : '#282626',
  'background-darker' : '#1D1B1A',
  'background-icon' : '#60605E',
  'background-badge' : '#76C3F7',
  'background-input' : '#575553',
  'background-textarea' : '#4A4948',
  'background-textarea-focused' : '#1D1B1A',
  'background-input-focused' : '#1D1B1A',
  'background-player-button' : '#343330',  
  'background-shortcut-button' : '#777777',
 'background-navitem-viewers' : '#777777', 
  'text-icon' : '#F3F2F2',
  'text-primary' : '#F3F2F2',
  'text-default' :  '#DCDDDC',
  'text-secondary' : '#C7C6C4',
  'text-full' : '#FFFFFFF',
  'text-button' : '#343330',
  'text-admin' : '#FF8D0A',
  'text-self' : '#1D9AF1',
  'border-mild' : '#3F3D3C',
  'border-default': '#4A4948',
  'border-intense' : '#60605E',
  'border-super-intense' : '#F3F2F2',
  'hover-mild' :  '#343330',
  'hover-default' :  '#4A4948',
  'hover-intense' : '#60605E',
  'hover-super-intense' : '#8F8D8C',
  'orange' : '#FF8D0A',
  'orange-90' : '#F6A322',
  'orange-80' : '#F6AD3B',
  'orange-70' : '#F8B754',
  'orange-60' : '#F9C16C',
  'orange-50' : '#FACA84',
  'orange-40' : '#FAD49D',
  'orange-30' : '#FDE0B7',
  'orange-20' : '#FDEBCF',
  'orange-15' : '#FFF0DB',
  'orange-10' : '#FEF5E7',
  'orange-5' : '#FFFBF2',
  'orange-disabled': '#E0A34A',
  'orange-input' : '#E1CBAC',
  'orange-input-focused' : '#F6EBD4',
  'blue' : '#1D9AF1',
  'blue-90' : '#34A5F3',
  'blue-80' : '#4AAFF5',
  'blue-70' : '#61B8F7',
  'blue-60' : '#77C2F7',
  'blue-50' : '#8ECCF9',
  'blue-20' : '#D3EAFC',
  'blue-disabled' : '#4F86A2',
  'blue-button' : '#2A9DE5',
  'black-100' : '#1D1B1A',
  'black-98' : '#20211E',
  'black-95' : '#282626',
  'black-90' : '#343330',
  'black-85' : '#3F3D3C',
  'black-80' : '#4A4948',
  'black-75' : '#575553',
  'black-70' : '#60605E',
  'black-60' : '#777777',
  'black-50' : '#8F8D8C',
  'black-40' : '#A4A4A2',
  'black-30' : '#BDBBBA',
  'black-25' : '#C7C6C4',
  'black-20' : '#D2D1D1',
  'black-15' : '#DCDDDC',
  'black-10' : '#E9E8E9',
  'black-5' : '#F3F2F2',
  'black-4' : '#F6F7F7',
  'black-3' : '#F8F9F9',
  'black-2' : '#FBFAFA',
  'black-1' : '#FCFDFC',
};

const lightColors = {
  'background-default' : '#FFFFFF',
      'background-darker' : '#FBFAFA',
      'background-icon' : '#4A4948',
      'background-badge' : '#8ECCF9',
      'background-input' : '#E9E8E9',
      'background-textarea' : '#E9E8E9',
      'background-textarea-focused' : '#FCFDFC',
      'background-input-focused' : '#FCFDFC',
      'background-player-button' : '#FFFFFF',
      'background-shortcut-button' : '#FFFFFF',
      'background-navitem-viewers' : '#60605E', 
      'text-icon' : '#FFFFFF',
      'text-primary' : '#1D1B1A',
      'text-default' :  '#60605E',
      'text-secondary' : '#777777',
      'text-primary-inverted' : '#F3F2F2',
      'text-full' : '#000000',
      'text-button' : '#FFFFFF',
      'text-admin' : '#d97f00',
      'text-self' : '#007acd',
      'border-mild' : '#DCDDDC',
      'border-default': '#D2D1D1',
      'border-intense' : '#C7C6C4',
      'border-super-intense' : '#4A4948',
      'hover-mild' :  '#F6F7F7',
      'hover-default' :  '#E9E8E9',
       'hover-intense' : '#DCDDDC',
       'hover-super-intense' : '#BDBBBA',
       'orange' : '#F5970A',
       'orange-90' : '#F6A322',
       'orange-80' : '#F6AD3B',
       'orange-70' : '#F8B754',
       'orange-60' : '#F9C16C',
       'orange-50' : '#FACA84',
       'orange-40' : '#FAD49D',
       'orange-30' : '#FDE0B7',
       'orange-20' : '#FDEBCF',
       'orange-15' : '#FFF0DB',
       'orange-10' : '#FEF5E7',
       'orange-5' : '#FFFBF2',
      'orange-disabled': '#EFB664',
      'orange-input' : '#FDEBCF',
      'orange-input-focused' : '#FFFBF2',
      'blue' : '#1D9AF1',
      'blue-90' : '#34A5F3',
      'blue-80' : '#4AAFF5',
      'blue-70' : '#61B8F7',
      'blue-60' : '#77C2F7',
      'blue-50' : '#8ECCF9',
      'blue-20' : '#D3EAFC',
      'blue-disabled' : '#76C3F7',
      'blue-button' : '#1D9AF1',
      'black-100' : '#1D1B1A',
      'black-98' : '#20211E',
      'black-95' : '#282626',
      'black-90' : '#343330',
      'black-85' : '#3F3D3C',
      'black-80' : '#4A4948',
      'black-75' : '#575553',
      'black-70' : '#60605E',
      'black-60' : '#777777',
      'black-50' : '#8F8D8C',
      'black-40' : '#A4A4A2',
      'black-30' : '#BDBBBA',
      'black-25' : '#C7C6C4',
      'black-20' : '#D2D1D1',
      'black-15' : '#DCDDDC',
      'black-10' : '#E9E8E9',
      'black-5' : '#F3F2F2',
      'black-4' : '#F6F7F7',
      'black-3' : '#F8F9F9',
      'black-2' : '#FBFAFA',
      'black-1' : '#FCFDFC',
};

const lightShadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.1)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.2), 0 1px 2px -1px rgb(0 0 0 / 0.2)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.2), 0 2px 4px -2px rgb(0 0 0 / 0.2)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.2)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.2), 0 8px 10px -6px rgb(0 0 0 / 0.2)',
  '2xl':  '0 25px 50px -12px rgb(0 0 0 / 0.05)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.1)',
  none: '0 0 #0000',
}

const darkShadows = {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.35)',
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.7), 0 1px 2px -1px rgb(0 0 0 / 0.7)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.7), 0 2px 4px -2px rgb(0 0 0 / 0.7)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.7), 0 4px 6px -4px rgb(0 0 0 / 0.7)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.7), 0 8px 10px -6px rgb(0 0 0 / 0.7)',
    '2xl':  '0 25px 50px -12px rgb(0 0 0 / 0.175)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.35)',
    none: '0 0 #0000',
}

const lightOpacity = {
  'disabled' : '.7',
}

const darkOpacity = {
  'disabled' : '.5',
}

const borders  = {
  DEFAULT: '1px',
  '0': '0',
  '2': '2px',
 '3': '3px',
  '4': '4px',
 '6': '6px',
 '8': '8px',
}

const phoneBorders  = {
  DEFAULT: '1px',
  '0': '0',
  '2': '1px',
 '3': '3px',
  '4': '4px',
 '6': '6px',
 '8': '8px',
}

const base = {
  theme: {
    colors: lightColors,
    boxShadow: lightShadows,
    fontSize: fontSizes,
    opacity: lightOpacity,
    borderWidth: borders,
  },
};

const dark = {
  theme: {
    colors: darkColors,
    boxShadow: darkShadows,
    fontSize: fontSizes,
    opacity: darkOpacity,
    borderWidth: borders,
    }
};

const phone = {
  theme: {
    borderWidth: phoneBorders,
  }
};

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class',
  plugins: [
    themeSwapper({
      themes: [
        { name: 'base', selectors: [':root'], theme: base.theme },
        { name: 'dark', selectors: ['.dark'], theme: dark.theme },
        { name: 'phone', selectors: ['.phone'], theme: phone.theme },
      ],
    }),
  ]
};
