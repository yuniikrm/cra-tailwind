module.exports = {
  mode: "jit",
  corePlugins: {
    preflight: false,
  },
  purge: {
    enabled: true,
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Roboto"],
    },
    extend: {
      colors: {
        green: {
          DEFAULT: "#0ABC5F",
          10: "#E2F7EC",
          20: "#A2E6C2",
          30: "#7BDBA9",
          40: "#47CD87",
          50: "#0ABC5F",
          60: "#07A452",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
