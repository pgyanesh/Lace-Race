import React from 'react'
import './HomePage.css'
import Navbar from '../../Components/Navbar/Navbar'
import all from '../../Assets/All-Resources/All'
import HomePageItem from '../HomePageItem/HomePageItem'
const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <div className="homePageouter">
        <div className="homePage">
          <div className="homePageHead">

          </div>
          <div className="homePageContent">
            {all.map((item)=>{
              return <HomePageItem key={item.id} name={item.name} image={item.image} brand={item.brand} price={item.price}/>
            })}
         
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
