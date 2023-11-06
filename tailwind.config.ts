import plugin from 'tailwindcss/plugin';
import type { Config } from 'tailwindcss';

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
        'home-back': "url('/public/images/background.png')",
      },
      maxWidth: {
        headerWidth: '1700px',
      },
      colors: {
        purple: '#270B3E',
      },
      translate: {
        0.3: '0.3px',
      },
      container: {
        center: true,
        padding: '1rem',
      },
      screens: {
        '2xl': '1440px',
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
