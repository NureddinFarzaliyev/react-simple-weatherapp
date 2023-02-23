import React from "react";
import { Card, Region, Degree, Details } from "./styled";
import { AiFillSkin } from 'react-icons/ai'
import { BsWind, BsFillCloudsFill } from "react-icons/bs";
import { WiHumidity } from 'react-icons/wi'

const Info = (props) => {
    if (props.data) {
        const location = props.data.location;
        const current = props.data.current;

        return (
            <Card>
                <Region>
                    <h1>{location.name}</h1>
                    <p>{location.region}, {location.country}</p>
                    <span>Last Updated: {current.last_updated}</span>
                </Region>
                <Degree>
                    <div>
                        <img src={"https:" + current.condition.icon} alt={current.condition.text} />
                        <h1>{current.temp_c}</h1><span>°C</span>
                    </div>
                    <p>{current.condition.text}</p>
                </Degree>
                <Details>
                    <div className="flexdiv">
                        <div><AiFillSkin /><p>{current.feelslike_c}°C</p></div>
                        <div><BsWind /><p>{current.wind_dir}/{current.wind_degree}°, {current.wind_kph}km/h</p></div>
                    </div>
                    <div className="flexdiv">
                        <div><BsFillCloudsFill /><p>{current.cloud}</p></div>
                        <div><WiHumidity /> <p>{current.humidity}%</p></div>
                    </div>
                </Details>
            </Card>
        )
    } else {
        return (
            <div>
                pls enter valid fucking thing
            </div>
        )
    }
}

export default Info