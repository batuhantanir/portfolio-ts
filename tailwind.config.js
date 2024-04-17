/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0562BB',
        secondary: '#45505B',
        thirtd: '#F2F3F5',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '8rem',
          xl: '6rem',
          '2xl': '14rem',
        },
      },
      boxShadow: {
        costum: '0px 0px 10px 0px rgba(0,0,0,0.5)',
      },
      textShadow: {
        xs: '0 1px 1px var(--tw-shadow-color)',
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      'animate-delay': {
        100: '100ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1000: '1s',
      },
      'animate-duration': {
        100: '100ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1000: '1s',
      },
    },
  },
  plugins: [
    plugin(function ({
      addUtilities,
      matchUtilities,
      addComponents,
      e,
      theme,
      prefix,
      config,
    }) {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.horizontal-bt': {
          writingMode: 'horizontal-bt',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl',
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr',
        },
      };
      addUtilities(newUtilities);
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
      matchUtilities(
        {
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme('animate-delay') }
      );
      matchUtilities(
        {
          'animate-duration': (value) => ({
            animationDuration: value,
          }),
        },
        { values: theme('animate-duration') }
      );
    }),
  ],
};
