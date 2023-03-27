import Link from "next/link"
import styles from '@/styles/Navbar.module.css'
import { useState } from "react"

function navbar() {

  const [activeLink, setActiveLink] = useState('Home');

  return (
    <div>
        <div className={styles.navbar}> 
            <Link href="/" className={styles.logo} onClick={()=> setActiveLink('Home')}> Anonymous Notes </Link> 
            <div className={styles.linksContainer}> 
                <Link href="/" className={ activeLink === "Home" ? styles.activeLink : "active"} onClick={()=> setActiveLink('Home')}> Home </Link>
                <Link href="/page/write" className={ activeLink === "Write" ? styles.activeLink : "active"} onClick={()=> setActiveLink('Write')}> Write a Note </Link> 
                <Link href="/page/about" className={ activeLink === "About" ? styles.activeLink : "active"} onClick={()=> setActiveLink('About')}> About </Link>
            </div>
        </div> 
    </div>
  )
}

export default navbar