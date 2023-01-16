
import React from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap'

function GetRecommendations(props) {
    const handleClick = async () => {
        console.log(props.selectedResults)
        if (!props.selectedResults.length) {
            alert("Please select at least one seed before sending a request");
            return;
        } else
        try {
            //This removes all the sliders that weren't touched.
            const filteredParams = Object.entries(props.sliders)
            .filter(([, {hasBeenMoved}]) => hasBeenMoved)
            .map(([name, {value}]) => ({name, value}));
            console.log(filteredParams)
            const data = {sliders: filteredParams, seed: props.selectedResults};
            const res = await axios.post('/recommend', data);
            props.handleRecommendations(res.data.payload);
            props.handleShowResults();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Button onClick={() => {handleClick(); props.clearStates()}}>Get Recommendations</Button>
    );
}
export default GetRecommendations