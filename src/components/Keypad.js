import React, {Component} from 'react';


export default class Keypad extends Component {

    printText = () => { 
        console.log('Entering password...')
    }
    
    render(){
        return (<input onKeyUp={this.printText} type="password"/>)
    }
}