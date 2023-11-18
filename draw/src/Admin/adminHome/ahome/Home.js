
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs';
 import Sidebar from './Sidebar';
 import './Home.css';
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from '../header';
import 'bootstrap/dist/css/bootstrap.css';




function Home() {


    // ===========  Get Product start ======================= // 

    const [data, setData] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost/DRAW/connection/dashbord/get_product.php')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);


  const productId = () => {
    const ids = data.map(item => item.id);
  
    return ids.length;
  };
  
  const idCount = productId();

  console.log(`Number of IDs in data: ${idCount}`);


      // ===========  Get Product end ======================= // 



  
// ===========  Get Categorie start ======================= // 

  const [categories, setCategories] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost/DRAW/connection/dashbord/get_categories.php')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);


  const categoriesId = () => {
    const ids = categories.map(item => item.id);
  
    return ids.length;
  };
  
  const idCountCategories = categoriesId();

  console.log(`Number of IDs in data: ${idCountCategories}`);
  
// ===========  Get Categorie end ======================= // 


// ===========  Get Users start ======================= // 


const [users, setUsers] = useState([]);
  

useEffect(() => {
  axios.get('http://localhost/DRAW/connection/dashbord/get_users.php')
    .then(response => {
        setUsers(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}, []);


const usersId = () => {
  const ids = users.map(item => item.id);

  return ids.length;
};

const idCountUsers= usersId();

console.log(`Number of IDs in data: ${idCountUsers}`);


// ===========  Get Users end ======================= // 




// ===========  Get Artist start ======================= // 



const [artist, setArtist] = useState([]);
  

useEffect(() => {
  axios.get('http://localhost/DRAW/connection/dashbord/get_artist.php')
    .then(response => {
      setArtist(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}, []);


const artistId = () => {
  const ids = artist.map(item => item.id);

  return ids.length;
};

const idOrderUsers= artistId();

console.log(`Number of IDs in data: ${idOrderUsers}`);

// ===========  Get Orders end ======================= // 

  return (

    <main className='main-container-fixed'>
      <Header/>
      <div className='sidebar'>
    <Sidebar />
  </div>
  <div className='content'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PRODUCTS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>{idCount}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CATEGORIES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>{idCountCategories}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Users</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>{idCountUsers}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Artists</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>{idOrderUsers}</h1>
            </div>

            <div>
      <h1> Chart </h1>
      <LineChart /> 
    </div>
        </div>
</div>
       <section>
      {/* <Footer/> */}
      </section>
    </main>
    
  )
}

export default Home