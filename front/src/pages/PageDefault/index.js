import React, { Component } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

class PageDefault extends Component {

    render() {
        return (
            <>
                <Navbar logged={this.props.logged}/>
                    <main>
                        {this.props.children}
                    </main>
                <Footer white />
            </>
        );
    }
}

export default PageDefault;
