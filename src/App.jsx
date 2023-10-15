import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import CardComponent from './component/CardComponent'






function App() {

 

 
  const dataArray = [
    {
      imageSrc: "https://lh3.googleusercontent.com/p/AF1QipP4H0LhiHwYJoUaYeKxatz4LJgAx6-VqNvt6s-w=s1360-w1360-h1020",
      imageAlt: 'Image 1 Description',
      title: 'Plitvice Lakes National Park',
      description: 'Plitviče Lakes National Park is a 295-sq.-km forest reserve in central Croatia. Its known for a chain of 16 terraced lakes, joined by waterfalls, that extend into a limestone canyon. Walkways and hiking trails wind around and across the water, and an electric boat links the 12 upper and 4 lower lakes.',
    },
    {
      imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1280px-Machu_Picchu%2C_Peru.jpg',
      imageAlt: 'Image 2 Description',
      title: 'Machu Picchu',
      description: 'Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter (7,970 ft) mountain ridge. Often referred to as the "Lost City of the Incas", it is the most familiar icon of the Inca Empire. It is located in the Machupicchu District within Urubamba Province[4] above the Sacred Valley, which is 80 kilometers (50 mi) northwest of Cusco. The Urubamba River flows past it, cutting through the Cordillera and creating a canyon with a tropical mountain climate',
    },
    // Add more objects as needed
  ];

  return (
    <>
     <Navbar/>
     <CardComponent data={dataArray} />
     <Footer/>
   
    </>
  )
}

export default App;
