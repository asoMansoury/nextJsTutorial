import { Divider } from 'antd';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styles from './layout.module.css';

const Layout = ({children})=>{
    return (
        <div>
            <Navbar classsName={styles.Navbar} bg="dark" variant='dark'>
                <Navbar.Brand href='#home'><img src={"/favicon.ico"}></img>تاپ فیلم</Navbar.Brand>
                <Divider style={{backgroundColor:'white !important'}} type='vertical'></Divider>
                <Nav className='ml-auto'>
                    <Nav.Link href='#home'>خانه</Nav.Link>
                    <Nav.Link href='#features'>فیلم ها</Nav.Link>
                </Nav>
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
