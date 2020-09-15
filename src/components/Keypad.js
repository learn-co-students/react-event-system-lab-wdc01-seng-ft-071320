// Code Keypad Component Here
import React, {Component} from 'react';
import { render } from 'enzyme';

class Keypad extends Component{

handler = () =>{
    return console.log('Entering password...')
}

    render(){
        return(
            <div>
                <input type='password' onKeyUp={this.handler}>

                </input>
            </div>
        )
    }
}

export default Keypad;