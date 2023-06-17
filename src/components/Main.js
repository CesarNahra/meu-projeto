import React from 'react';
import googleLogo from '../img/googlelogo.png';
import '../styles/Main.css'
import Button from './Button.js';
import Lupa from '../img/lupa.png';

function Main() {
    return (  
        <React.Fragment>
            <div className='main'>
                <img src={googleLogo} alt="Logo Google" />
                <br />
                <input type="text" name="" id="" />
                <br />
                <Button prop1='Pesquisa Google' prop2={25} prop3/>
                <Button prop1='Estou com sorte' prop2={30} prop3={false}/>
            </div>
        </React.Fragment>
    );
}

export default Main;
