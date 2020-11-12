import React from 'react';
import Navbar from "../Navbar"
import Footer from "../Footer"

function PageDefault({children}){
    return (
        <>
            <div id="content">
                <Navbar/>        
                <div id="Main">
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    );

}

export default PageDefault;
