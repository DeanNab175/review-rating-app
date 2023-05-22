import { useState } from "react";

const Comment = ({profile, nextStep}) => {
    const [message, setMessage] = useState('');

    const postComment = async (commentMessage) => {
        try{
            const response  = await fetch(`https://restapi.co.uk/api/invite/${profile.code}/comment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"comment": commentMessage})
            })

            const result = await response.json();
            nextStep();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if(message) {
            postComment(message);
        }
    }
    return profile.agent && <div className="content-wrapper comment-wrapper">
        <h2>{`Would you like to leave a note for ${profile.agent.first_name}?`}</h2>
        <form onSubmit={handleCommentSubmit}>
            <textarea placeholder="Optional" onChange={(e) => setMessage(e.target.value)}></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
}

export default Comment;