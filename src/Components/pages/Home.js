import React, { useEffect } from 'react'
import Navbar from '../Navbar'

function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            hELLO aBHI hOME
        </div>
    )
}

export default Home
