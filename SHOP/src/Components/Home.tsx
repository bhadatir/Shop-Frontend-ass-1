import { useState } from 'react'
import ShopNavbar from './ShopNavbar'
import ShopSidebar from './ShopSidebar'

function Home(){

    return (
        <div>
            {window.innerWidth <= 768 ? <ShopSidebar /> : <ShopNavbar />}
        </div>
    )
}

export default Home