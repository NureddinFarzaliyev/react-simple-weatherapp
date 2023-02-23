// import React from "react";
import styled from 'styled-components';


//? Header

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Header = styled.div`
    display: flex;
    font-size: 1rem;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;

    svg{
        font-size: 4rem;
        margin-right: 5px;
    }

    div{
        display: flex;
    }
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    input{
        height: 3rem;
        width: 20rem;
        border-radius: 7px 0px 0px 7px;
        border: none;
        border-right: none;
        padding-left: .45rem;
        font-size: 1.2rem;
        font-weight: 1500;
        background-color: rgba(203,203,203, .5);
    }
    input:focus{
        border: none;
    }

    button{
        height: 3rem;
        width: 4rem;
        border-radius: 0px 7px 7px 0px;
        cursor: pointer;
        background-color: rgba(203,203,203, .5);
        border: none;=

        svg{
            font-size: 1.2rem;
        }
    }
`

//? Information

export const Card = styled.div`
    width: 35rem;
    height: 33rem;
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(203,203,203, .3);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
export const Region = styled.div`
    text-align: center;
    
    p{
        color: rgba(0, 0, 0, 1);
    }

    span{
        font-size: 12px;
        margin-top: 1rem;
        color: rgba(0, 0, 0, .8);
    }
`

export const Degree = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
    justify-content: center;

    div{
        display: flex;
        align-items: center;

        img{
            height: 6rem;
            margin-left: -2rem;
        }
        h1{
            font-size: 8rem;
        }
        span{
            font-size: 2.5rem;
            margin-top: 4.5rem;
            color: rgba(0, 0, 0, .9);
        }
    }

    p{
        font-size: 1.1rem;
        letter-spacing: .5rem;
    }
`

export const Details = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 1.8rem;

    .flexdiv{
        display: flex;
        flex-direction: column;

        div{
            display: flex;
            font-size: 1.2rem;
            line-height: 1.2rem;
            margin-top: 1rem;

            p{
                margin-left: 1rem;
            }
        }
    }

`