/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        wine: {
          900: '#2A060B',
          800: '#3D0A12',
          700: '#550E1A',
          600: '#721C24',
          500: '#8C1E2B',
          400: '#AA2837',
        },
        gold: {
          light: '#F5E6BE',
          DEFAULT: '#D4AF37',
          dark: '#A88420',
        }
      }
    },
  },
  plugins: [],
}
