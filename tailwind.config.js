/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      boxShadow: {
        "shadow-custom": "0 32px 75px rgba(68, 77, 136, 0.2)",
        bst: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(255, 255, 255, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
      },
    },
  },
  plugins: [],
};
