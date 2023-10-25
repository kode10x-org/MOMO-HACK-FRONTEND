import React from 'react'
import styled from '@emotion/styled'
import {FaUser} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import {BsFillTelephoneFill} from "react-icons/bs"
import {RiLockPasswordFill} from "react-icons/ri"
import {FcGoogle} from "react-icons/fc"
import {MdVisibilityOff} from "react-icons/md"
import {MdVisibility} from "react-icons/md"

const Container = styled.div`
height: 100vh;
display: flex;
`
const Wrapper = styled.div`
background-color: #F7F9FC;
width: 100%;

h2{
    font-size: 34px;
    font-weight: bold;
    color: #084A5F;
    /* padding-top: 20px; */
    margin-left: 30px;

    span{
        color: #FFCB05;
    }
}
@media (min-width: 320px) and (max-width: 767px){
    h2{
        font-size: 20px;
        margin-left: 15px;
        /* padding-top: 15px; */
        font-weight: bold;
    }
}
`
const Wrapper2 = styled.div`
background-color: slateblue;
width: 100%;
@media (min-width: 320px) and (max-width: 1023px){
    display: none;
}
`
const UserInput = styled.div`
display: flex;
align-items: center;
background-color: white;
margin-bottom: 20px;
border-radius: 10px;
padding: 0 20px;
gap: 15px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
input{
    background-color: transparent;
    width: 100%;
    height: 60px;
    padding-left: 5px;
    outline: #121212;
    color: black;
    font-size: 20px;
    border: none;
    ::placeholder{
        font-size: 18px;
    }
}
@media (min-width: 320px) and (max-width: 767px){
    margin: 15px 15px;
    input{
        font-size: 16px;
        height: 50px;
        width: 90%;
        font-size: 16px;
        ::placeholder{
            font-size: 16px;
        }
    }
}
`
const Para = styled.p`
    color: #121212eb;
    font-size: 17px;
    font-weight: lighter;
    @media (min-width: 320px) and (max-width: 767px){
    font-size: 12px;
}
`

const Icon = styled.div`
color: #084A5F;
font-size: 25px;
width: 34px;
height: 26px;
@media (min-width: 320px) and (max-width: 767px){
   font-size: 20px;
   width: 34px;
   height: 20px;
}
`
const CenterSignUp = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h2{
    margin: 0;
    padding-top: 0;
    font-size: 38px;
}
@media (min-width: 320px) and (max-width: 767px){
    margin-top: 60px;
    h2{
        font-size: 30px;
    }
}
`
const UserButton = styled.button`
background-color: #FFCB05;
color: #084A5F;
width: 100%;
height: 60px;
border-radius: 10px;
font-size: 20px;
font-weight: bold;
border: none;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
@media (min-width: 320px) and (max-width: 767px){
    width: 91%;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 30px;
}
`
const Button = styled.div`
    color: #084A5F;
    background-color: white;
    border-radius: 30px;
    height: 60px;
    width: 50%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;

    p{
        font-size: 18px;
        font-weight: bolder;
    }
    @media (min-width: 320px) and (max-width: 767px){
    width: 80%;
    margin-top: 30px;
    height: 50px;
    p{
        font-size: 15px;
    }
}
`
const GoogleIcon = styled.div`
font-size: 30px;
margin-right: 10px;
@media (min-width: 320px) and (max-width: 767px){
    font-size: 25px;
}
`
const Paras = styled.p`
    color: #12121298;
    font-size: 17px;
    font-weight: 600;
    margin: 15px 0 ;
    @media (min-width: 320px) and (max-width: 767px){
   font-size: 15px;
   margin: 10px 0;
}
`
const Visibility = styled.div`
color: #00000050;
font-size: 30px;
padding-right: 20px;
@media (min-width: 320px) and (max-width: 767px){
   font-size: 20px;
   padding-right: 10px;
}
`
const VisibilityOn = styled.div`
color: #00000050;
font-size: 30px;
padding-right: 20px;
display: none;
@media (min-width: 320px) and (max-width: 767px){
   font-size: 20px;
   padding-right: 10px;
}
`
const Member = styled.div`
    color: #12121298;
    font-size: 17px;
    font-weight: 600;
    /* margin-top: 30px ; */
    span{
        color: #084A5F;
        font-size: 18px;
    }
    @media (min-width: 320px) and (max-width: 767px){
    font-size: 14px;
    margin-top: 60px;
    span{
        font-size: 15px;
    }
}
`
const AgentSignUpLight:React.FC = () => {
  return (
    <Container>
        
        <Wrapper>
        <h2>MO<span>MO</span></h2>
        <CenterSignUp>
            <h2>Sign Up</h2>
            <Para>Join the Momo Community Today !</Para>
            <Button>
                <GoogleIcon>
                <FcGoogle/>
                </GoogleIcon>
                <p>Use Google Account</p>
            </Button>
            <Paras>or</Paras>
        <form>
                <UserInput>
                    <Icon>
                        <FaUser/>
                    </Icon>
                    <input type="text" 
                    required
                    placeholder='Full Name' />
                </UserInput>
                <UserInput>
                <Icon>
                <MdEmail/>
                </Icon>
                    <input type="email" 
                    required
                    placeholder='Email' />
                </UserInput>
                <UserInput>
                <Icon>
                    <BsFillTelephoneFill/>
                </Icon>
                    <input type="tel" 
                    required
                    placeholder='Phone Number' />
                </UserInput>
                <UserInput>
                <Icon>
                    <RiLockPasswordFill/>
                </Icon>
                    <input type="password" 
                    required
                    placeholder='Password' />
                    <Visibility>
                        <MdVisibilityOff/>
                    </Visibility>
                    <VisibilityOn>
                        <MdVisibility/>
                    </VisibilityOn>
                </UserInput>
                <UserButton>Sign Up</UserButton>
            </form>
            <Member>
                <p>Already a Member? <span>Sign In</span> </p>
            </Member>
        </CenterSignUp>

            
        </Wrapper>
        <Wrapper2>

        </Wrapper2>
    </Container>
  )
}

export default AgentSignUpLight