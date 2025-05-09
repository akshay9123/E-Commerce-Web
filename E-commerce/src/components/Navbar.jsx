import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';



const Navbar = ({setFilterCatogary}) => {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate(`/search/${searchTerm}`)
        setSearchTerm("")
    }

  return (

    <>
        <header className='top-nav'>
            <div className="nav-bar">
                <Link to={'/'} className="brand">E-Cart</Link>


                <form onSubmit={handleSubmit}
                className="search-bar">
                    <input type="text" 
                    placeholder='Search Products'
                    onChange={(e)=> setSearchTerm(e.target.value)}
                    value={searchTerm}
                    />
                </form>

                
                <Link to={'/cart'} className="cart">Cart</Link>
            </div>

            <div className="nav-bar-wrapper" >
                
                <div className="items" onClick={()=>setFilterCatogary("")}>No Filter</div>
                <div className="items" onClick={()=>setFilterCatogary("mobiles")}>Mobiles</div>
                <div className="items" onClick={()=>setFilterCatogary("laptops")}>Laptops</div>
                <div className="items" onClick={()=>setFilterCatogary("tablets")}>Tablets</div>
              
            </div>
        </header>
       
        
    </>
  )
}

export default Navbar