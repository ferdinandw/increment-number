import React, { Component } from 'react';
import styled from 'styled-components';

class Increment extends Component {
    constructor(props){
        super(props);
        this.state = {
            num: 0,
            show:true
        };
    }
    tambahNum = () =>{
        this.setState({num: this.state.num +1 })
    }
    kurangNum = () =>{
        let num = this.state.num;
        if ( num == 0){
            window.alert('Tidak bisa Angka Minus')
        } else {
            this.setState({num: this.state.num -1 });
        }
    }
    reset = () =>{
        this.setState({num: this.state.num = 0})
    }

    render() {
        return (
            <div>
                <Wrapper>
                <span>
                <Button primary onClick={this.tambahNum}>+</Button>
                <Input value={this.state.num}></Input>
                <Button primary onClick={this.kurangNum}>-</Button>
                </span>
                </Wrapper>
                <Button primary onClick={this.reset}>RESET</Button>
            </div>
        )
    }
}

export default Increment;

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1.2em;
    margin: 0.5em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const Input = styled.input`
    padding: 0.7em;
    margin 0;
    background: white;
    border-color: pink;
    border-radius: 1px;
    text-align: center;
`;

const Wrapper = styled.section`
padding: 0;
margin: 0;
align-content : center;
`;