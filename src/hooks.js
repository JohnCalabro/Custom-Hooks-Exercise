import React, { useState } from "react";

const FlipCard = (initialState=true) => {
    const [state, setState] = useState(initialState);
    const toggleFlip = () => {
        setState(state => !state)
    }
    return [state, toggleFlip]
}

export default FlipCard;