
import React, { useState } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap'

function GetRecommendations({ sliders, seeds }) {
    const handleClick = async () => {
        try {
            const data = { sliders, seeds };
            console.log(data)
            const res = await axios.post('/recommendations', data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Button onClick={handleClick}>Get Recommendations</Button>
    );
}
export default GetRecommendations