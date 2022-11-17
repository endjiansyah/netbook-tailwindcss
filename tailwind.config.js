/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        fontFamily:{
            inter:['Inter'],
            sans:['Inter'],
            body:['Inter'],
            
        }
        ,
        container: {
            padding:{
                sm: '20px',
                md: '20px'
            },
            screens:{
                xl: '1170px',
            },
            center:true,
        },
        extend: {
            colors: {
                primary: '#217BF4',
                title: '#0A093D',
                secondary : '#656464',
                blueli : '#171648',
            }
        }
      },
    plugins: [],
  }