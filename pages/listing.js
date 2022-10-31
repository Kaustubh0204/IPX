import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar2 from '../components/navbar-2'
// import Anton from '@next/font/google'
import ListBlock from '../components/list-block'
import Footer from '../components/footer'
import { useEffect } from 'react';

export default function Listing() {
    useEffect(() =>
    {        
        document.body.classList.add("bg-black", "font-['ADELIA']", "custom-scrollbar");
    });
    return (

        <div>

            <Navbar2/>
            <ListBlock/>
            <Footer/>

        </div>

    )
}
