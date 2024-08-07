/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        'small-circle-move': {
          '0%, 70%': { transform: 'scale(0)', boxShadow: '2px 2px 3px 3px rgba(0,0,0,.2)' },
          '100%': { transform: 'scale(1)', boxShadow: '10px 10px 15px 0 rgba(0,0,0,.5)' },
        },
        'medium-circle-move': {
          '0%, 40%': { transform: 'scale(0)', boxShadow: '2px 2px 3px 3px rgba(0,0,0,.2)' },
          '100%': { transform: 'scale(1)', boxShadow: '10px 10px 15px 0 rgba(0,0,0,.5)' },
        },
        'large-circle-move': {
          '0%, 10%': { transform: 'scale(0)', boxShadow: '2px 2px 3px 3px rgba(0,0,0,.2)' },
          '100%': { transform: 'scale(1)', boxShadow: '10px 10px 15px 0 rgba(0,0,0,.5)' },
        },
      },
      animation: {
        'small-circle-move': 'small-circle-move 3s cubic-bezier(.21,.98,.6,.99) infinite alternate',
        'medium-circle-move': 'medium-circle-move 3s cubic-bezier(.21,.98,.6,.99) infinite alternate',
        'large-circle-move': 'large-circle-move 3s cubic-bezier(.21,.98,.6,.99) infinite alternate',
      },
    },
  },
  plugins: [],
}

