/** @type {import('tailwindcss').Config} */

export default {
  
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      fontFamily: {
        poppins: ["Poppins"],
        kanit: ["Kanit"],
      },
      extend: {
        keyframes: {
          slidein: {
            from: {
              opacity: "0",
              transform: "translateY(-10px)",
            },
            to: {
              opacity: "1",
              transform: "translateY(0)",
            },
          },
        },
        animation: {
          slidein300: "slidein 1s ease 300ms",
          slidein500: "slidein 1s ease 500ms",
          slidein700: "slidein 1s ease 700ms",
        },
      },
    },
    plugins: [],
};
