/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [{
      tarkov: {
        "primary": "#9A8866",
        "secondary": "#8B8873",
        "accent": "#251C29",
        "neutral": "#262626",
        "base-100": "#171715",
        "info": "#5F378E",
        "success": "#007800",
        "warning": "#FF9900",
        "error": "#C80000",
      },
    },],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: 'dark',
  },
}
