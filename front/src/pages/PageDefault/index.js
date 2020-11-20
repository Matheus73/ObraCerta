import React, { Component } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

class PageDefault extends Component {
    render() {
        return (
            <>
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer white />
            </>
        );
    }
}

export default PageDefault;
