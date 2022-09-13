import React from 'react';
import { Container } from "@/components/layout";
import {Navbar} from '../layout/navbar/Navbar';
import MainComponent from './MainComponent';

export const Main = () => {
    return (
       <main className='bg-[#E7ECEE] relative bg-fixed h-[200vh]'>
        <Container>  
           <Navbar/> 
           <MainComponent/>
        </Container>
        </main>
    );
};

