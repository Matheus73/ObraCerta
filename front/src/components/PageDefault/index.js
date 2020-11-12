import React from 'react';
import Navbar from "../Navbar"
import Footer from "../Footer"

function PageDefault({children}){
    return (
        <>
            <Navbar/>        
                <div id="Main">
                    {children}
                </div>
            <Footer/>
        </>
    );

}

export default PageDefault;
