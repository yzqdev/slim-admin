module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: true,
  },
  theme: {
    textColor: {
      primary: "#3490dc",
      secondary: "#ffed4a",
      danger: "#e3342f",
    },
    extend: {},
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        ".el-button": {
          "background-color": "var(--el-button-bg-color,var(--el-color-white))",
        },
      });
    },
  ],
};
