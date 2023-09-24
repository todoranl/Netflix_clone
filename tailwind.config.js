/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Define the paths to your React components
    './public/index.html', // Include your HTML file
  ],
  theme: {
    extend: {
      colors: {
        // Define custom colors or extend existing ones
        red: {
          '500': '#FF0000', // Example: Custom red color
        },
      },
    },
  },
  plugins: [],
};
