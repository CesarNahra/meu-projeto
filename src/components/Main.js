import React from 'react';
import googleLogo from '../img/googlelogo.png';
import '../styles/Main.css'
import Button from './Button.js';

function Main() {
    return (  
        <React.Fragment>
            <div className='main'>
                <img src={googleLogo} alt="Logo Google" />
                <br />
                <input type="text" name="" id="" />
                <br />
                <Button prop1='Pesquisa Google' prop2='Google search' prop3/>
                <Button prop1='Estou com sorte' prop2='I"m lucky' prop3={false}/>
            </div>
        </React.Fragment>
    );
}

export default Main;
