
import React, { useState } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap'

function GetRecommendations(props) {
    const handleClick = async () => {
        if (!props.selectedResults) {
            alert("Please select at least one seed before sending a request");
            return;
        }
        try {
            //This removes all the sliders that weren't touched.
            const filteredParams = Object.entries(props.sliders).map(([name, {value, hasBeenMoved}]) => {
                if (hasBeenMoved) {
                    return { name, value };
                }
            }).filter(Boolean);
            const data = {sliders: filteredParams, seed: props.selectedResults};
            const res = await axios.post('/recommend', data);
            props.handleRecommendations(res.data.payload);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Button onClick={handleClick}>Get Recommendations</Button>
    );
}
export default GetRecommendations