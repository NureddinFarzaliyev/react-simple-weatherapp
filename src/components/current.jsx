import React, { useState } from "react";
import { Wrapper, Header, Form } from './styled';
import { BsThermometerSun } from 'react-icons/bs';
import { BsSearch } from "react-icons/bs";
import Info from "./information";

const key = "b5b34e4cf0cf46e4874152046232202"
// https://api.weatherapi.com/v1/current.json?key=b5b34e4cf0cf46e4874152046232202&q=48.8567,2.3508

const Current = () => {
    // set search query to query variable
    const [query, setQuery] = useState('');
    const [data, setData] = useState()

    // handle submit
    const submitHandler = async (e) => {
        e.preventDefault()

        if (query != '') {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${query}`)
            const data = await response.json();
            setData(data)
        }

        setQuery('')
    }


    return (
        <Wrapper>
            <Header>
                <BsThermometerSun />
                <h1>WeatherApp</h1>
            </Header>
            <Form onSubmit={submitHandler}>
                <input type="text" onChange={(e) => { setQuery(e.target.value) }} value={query} />
                <button type="submit"><BsSearch /></button>
            </Form>
            <Info data={data} />
        </Wrapper>
    )
}

export default Current