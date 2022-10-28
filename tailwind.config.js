/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      colors: {
        'pale-blue': 'hsl(var(--pale-blue))',
        'bright-blue': 'hsl(var(--bright-blue))',
        'very-pale-blue': 'hsl(var(--very-pale-blue))',
        'desaturated-blue': 'hsl(var(--desaturated-blue))',
        'dark-blue': 'hsl(var(--dark-blue))'
      },
      fontFamily: {
        'red-hat': ['Red Hat Display']
      }
    },
  },
  plugins: [],
}
