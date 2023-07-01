/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],

  theme: {
    extend: {

      screens: {
        sm: "350px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
           "colors": {
            gray: {
              "100": "#111827",
              "200": "#0e071f",
            },
            blue:{
"100":"#34d3d9",
"200":"#1471fc"

            },


   
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
