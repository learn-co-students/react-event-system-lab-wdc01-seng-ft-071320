// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component{

    printFocus = () => {
        console.log("Good!")
    }

    printBlur = () => {
        console.log("Hey! Eyes on me!")
    }

    render(){
        return(
            <div>
                <button onFocus = {this.printFocus} onBlur = {this.printBlur}>Focus Button</button>
            </div>
        )
    }
}