import { Divider } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styles from './layout.module.css';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
const Layout = ({children})=>{
    const router = useRouter();

    return (
        <div>
            <Navbar classsName={styles.Navbar} bg="dark" variant='dark'>
                <Navbar.Brand href='#home'><img src={"/favicon.ico"}></img>تاپ فیلم</Navbar.Brand>
                <Divider style={{backgroundColor:'white !important'}} type='vertical'></Divider>
                <Nav className='ml-auto'>
                        <Link href={"/"}><><Nav.Link active={router.pathname === "/"} href='#home'>خانه</Nav.Link></></Link>
                        <Link href={"/films"}><> <Nav.Link active={router.pathname.split('/')[1]==="#films"} href='#films'>فیلم ها</Nav.Link></></Link>
                </Nav>
                <Button variant='light'>ورود</Button>
            </Navbar>
            <div>
            {
                children
            }
            </div>
        </div>
    )
}

export default Layout;
