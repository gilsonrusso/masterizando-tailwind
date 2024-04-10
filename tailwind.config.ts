import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr min-content',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)'
      },
      borderWidth: {
        6: '6px'
      },
      colors: {
        violet: {
          25: '#fcfaff'
        }
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-2px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        'fade-in-up': {
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
        }
    },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s cubic-bezier(0.16, 0.3, 1)',
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      }
    },
  },
  plugins: [],
};
export default config;
