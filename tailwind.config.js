/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // sageGreen: "#9CAF88",
        sageGreen: "#A3B684",
        softCream: "#F1E6D9",
        mutedBlush: "#D9C7C5",
        oliveGreen: "#4A5845",
        charcoalGrey: "#333333",
        mossGreen: "#6F8B6C",
        backgroundColor: "#272726",
        shadowColor: "#556B2F",
      },
      fontFamily: {
        unkempt: ["Unkempt"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
