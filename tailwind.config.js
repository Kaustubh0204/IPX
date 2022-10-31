/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages//.js",
    "./pages/index.js",
    "./pages/login.js",
    "./pages/signup.js",
    "./pages/forgot-password.js",
    "./pages/listing.js",
    "./components/navbar.js",
    "./components/navbar-2.js",
    "./components/list-block.js",
    "./components/footer.js"
  ],
  theme: {
    extend: {
      colors: {
        'ipxdarkbg': 'black',
        'ipxdarknavbar': '#27272A',
        'ipxdarkinput' : '#9AA2AE',
        'ipxdarkinputbg' : '#1A1A1A',
        'ipxdarktext' : 'white',
        'ipxdarktextmuted' : '#63738B',   
        'ipxlight': 'white',
        'ipxlightinputbg' : '#C5D3E0',
        'ipxlightnavbar' : '#0E192C'
        
      },
      fontSize: {
        'xs': ['8px', {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
        
      },

    },
  },
  plugins: [],
}