import React, { useState } from 'react';
import Topbar from '../MyProfile/Topbar';
import Menu from '../MainPage/Menu';
import bg from '../../img/bg.svg';
import styled from 'styled-components';
import GlobalStyle from '../LandingPage/GlobalStyle';


import Companies from './Companies';

const CompaniesDashboard = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    

    
    return (
            <BodyStyle>
            <GlobalStyle />
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            
            <Companies />
            </BodyStyle>

    );
}

const BodyStyle = styled.header`
    height: 100vh;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    background-position-y: 100%;
    .header-content{
        padding: 0 10rem;
    }
`;

export default CompaniesDashboard;
