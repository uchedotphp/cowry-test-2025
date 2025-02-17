/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    fontFamily: {
      inter: 'var(--font-family-inter)',
    },
    fontSize: {
      sm: ['var(--cw-sm-font-size)', 'calc(var(--cw-sm-font-size) * 1.5)'],
      base: ['var(--cw-base-font-size)', 'calc(var(--cw-base-font-size) * 1.5)'],
      md: ['var(--cw-md-font-size)', 'calc(var(--cw-md-font-size) * 1.5)'],
      lg: ['var(--cw-lg-font-size)', 'calc(var(--cw-lg-font-size) * 1.5)'],
      xl: 'var(--cw-xl-font-size)',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        DEFAULT: 'var(--cw-white)',
      },
      blue: {
        DEFAULT: 'var(--cw-blue)',
      },
      grey: {
        100: 'var(--cw-grey-100)',
        200: 'var(--cw-grey-200)',
        300: 'var(--cw-grey-300)',
        400: 'var(--cw-grey-400)',
        500: 'var(--cw-grey-500)',
        600: 'var(--cw-grey-600)',
      },
    },
    extend: {},
  },
  plugins: [],
}
