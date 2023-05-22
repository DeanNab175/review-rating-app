import { useEffect, useState } from "react";

const Rating = ({code, nextStep}) => {
    const [score, setScore] = useState(null);
    const [active, setActive] = useState(null);
    const scoreButtons = [1, 2, 3, 4, 5];

    const postRateScore = async (ratingScore) => {
        try{
            const response  = await fetch(`https://restapi.co.uk/api/invite/${code}/rate`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"score": ratingScore})
            })

            const result = await response.json();
            nextStep();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    const handleRatingSubmit = (e) => {
        e.preventDefault();
        postRateScore(score);

    }

    const handleButtonClick = (btnIndex, btnScore) => {
        setActive(btnIndex);
        setScore(btnScore);
    }

    return <div className="content-wrapper rating-score-wrapper">
        <h2>How would you rate their service?</h2>
        <div className="rating-buttons">
            <form onSubmit={handleRatingSubmit}>
                { scoreButtons.map((btnScore, index) => {
                    return (
                        <button 
                        key={index} 
                        className={`btn-score${active === index ? " active" : ""}`} 
                        onClick={() => handleButtonClick(index, btnScore)}
                        >
                        {btnScore}
                        </button>
                    )
                })}
            </form>
        </div>
    </div>
}

export default Rating;