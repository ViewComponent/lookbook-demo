const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/components/**/*.html.erb",
    "./app/components/**/*.css",
    "./app/components/**/*.rb",
    "./app/views/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/assets/stylesheets/**/*.css",
    "./app/javascript/**/*.js",
  ],
  theme: {
    fontFamily: {
      body: ["Nunito", ...defaultTheme.fontFamily.sans],
      mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [require("@tailwindcss/typography")],
  safelist: [
    ".theme-github-light",
    ".lookbook-panel",
    ".hll",
    ".c",
    ".err",
    ".k",
    ".o",
    ".cm",
    ".cp",
    ".c1",
    ".cs",
    ".gd",
    ".gd .x",
    ".ge",
    ".gr",
    ".gh",
    ".gi",
    ".gi .x",
    ".go",
    ".gp",
    ".gs",
    ".gu",
    ".gt",
    ".kc",
    ".kd",
    ".kn",
    ".kp",
    ".kr",
    ".kt",
    ".m",
    ".s",
    ".n",
    ".na",
    ".nb",
    ".nc",
    ".no",
    ".ni",
    ".ne",
    ".nf",
    ".nn",
    ".nt",
    ".nv",
    ".ow",
    ".w",
    ".mf",
    ".mh",
    ".mi",
    ".mo",
    ".sb",
    ".sc",
    ".sd",
    ".s2",
    ".se",
    ".sh",
    ".si",
    ".sx",
    ".sr",
    ".s1",
    ".ss",
    ".bp",
    ".vc",
    ".vg",
    ".vi",
    ".il",
    ".gc",
  ],
};
