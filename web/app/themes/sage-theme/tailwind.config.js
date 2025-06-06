/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.php',
    './resources/**/*.{php,blade.php,js,ts,vue}',
    './theme.json',
    './resources/views/**/*.blade.php',
  ],
  // No 'theme' or 'plugins' keys for this test
};
