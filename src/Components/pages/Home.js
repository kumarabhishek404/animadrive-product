import React, { useState, useEffect, useRef } from 'react'
import './Home.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import Axios from 'axios';

const images = [
    'https://m.media-amazon.com/images/I/41+fXlXMPyL._SR500,500_.jpg',
    'https://elcopcbonline.com/photos/product/4/176/4.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/5103Xi7yQgL._SL1024_.jpg'
]

function Home() {

 Axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: true,
});

Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form- urlencoded';
Axios.defaults.withCredentials = true;
Axios.defaults.crossDomain = true;

    const targetSrc = useRef()
    const [imageIndex, setImageIndex] = useState(0)
    const [user,setUser]=useState({});
    const [error,setError]=useState(null);
    const [authenticated,setAuthenticated]=useState(false);


    useEffect(() => {
        // window.scrollTo(0, 0)
        const interval = setInterval(() => {
            if (imageIndex < images.length) {
                targetSrc.current.src = images[imageIndex]
                setImageIndex(prevState => prevState + 1)
            }
            else {
                setImageIndex(0)
            }
        }, 2000);
        return () => clearInterval(interval)
    }, [imageIndex])
    
      useEffect(()=>{
          Axios.get("http://localhost:3000/authSuccess")
          .then(response=>{
            console.log(response.status)
              if(response.status === 200) {
                setUser(response.data.user)
                setAuthenticated(true)
            }
            else{
            setAuthenticated(false)

            }
          })
          .catch(error=>{
            // setLoading(false)
              setAuthenticated(false)
              setError(error)
          })
      },[])

    // const handleImageSrc = (e) => {
    //     if (imageIndex < images.length) {
    //         targetSrc.current.src = images[imageIndex]
    //         setImageIndex(prevState => prevState + 1)
    //     }
    //     else {
    //         setImageIndex(0)
    //     }
    // }

    return (
        <>
            <div className='home'>
                <div className='home_container'>
                    <div className='home_wrapper'>
                        <div className='home_image_slide'>
                            <figure >
                                <img src='https://rukminim1.flixcart.com/flap/50/50/image/283de1e2883fb0fd.jpg?q=50' alt='Image' ref={targetSrc} />
                            </figure>
                        </div>
                        <div className='all_products'>
                            <div className='single_product'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
