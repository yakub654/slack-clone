
import React from 'react'
import styled from "styled-components";
import { auth, provider } from '../firebase';

function Login(props) {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result)=>{
            const newUser = {
                name: result.user.displayName,
                photo: result.user.photoURL,
            }
            localStorage.setItem('user', JSON.stringify(newUser));
            props.setUser(newUser);
        })
        .catch((error)=>{
            alert(error.message)
        })
    }
    return (
        <Container>
            <Content>
                <SlackImg src="/slackLogo.png"/>
                <h1>Sign in Slack Clone</h1>
                <SignInButton onClick = {()=>signIn()}>
                    Sign in with Google
                </SignInButton>
                
            </Content>
        </Container>
    )
}

export default Login;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center; 

`
const Content = styled.div`
    background: white; 
    padding: 100px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 3px rgb(0 0 0  / 12%), 0 1px 2px rgb(0 0 0 / 24%);
`

const SlackImg = styled.img`
    height: 100px;
`

const SignInButton = styled.button`
    margin-top: 50px;
    background-color: #0A8D48;
    color: white;
    border: none;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
    fonrt-size: 15px;
`