import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'home-people': 'url(/images/background-xl.png)',
        'more-about-background': 'url(/images/background-union.png)',
        phone: 'url(/images/phone.png)',
        'footer-left': 'url(/images/footer-left.svg)',
        'footer-right': 'url(/images/footer-right.svg)',
        footer: 'url(/images/footer.png)',
      },
      maxWidth: {
        headerWidth: '1700px',
      },
      colors: {
        purple: '#270B3E',
        lightGray: '#D8D8D8',
        lightGray2: '#F2F2F2',
        red: '#FF2927',
        orange: '#FD6530',
        yellow: '#FFC122',
        lightOrange: '#FB8835',
      },
      translate: {
        0.3: '0.3px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '2.5rem',
          sm: '1rem',
        },
      },
      screens: {
        // '2xl': '1440px',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        inder: ['var(--font-inder)'],
      },
      fontSize: {
        /* 
        46px, 2.875rem
        */
        '3,5xl': '2.875rem',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.bg-orange-gradient': {
          background: 'linear-gradient(237deg, #FF2927 20.42%, #FD6530 44.43%, #FFC122 86.27%)',
        },
      });
    }),
  ],
};

export default config;
