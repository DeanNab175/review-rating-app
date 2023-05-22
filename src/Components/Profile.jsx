

const Profile = ({agent}) => {
    

    return (
        <>
        { agent &&
            <div className="profile-wrapper">
                { agent.picture_url && 
                    <div className="image-wrap">
                        <img src={agent.picture_url} alt="profile image" />
                    </div>
                }
                <h1>{`${agent.first_name} ${agent.last_name}`}</h1>
                <div className="divider"></div>
            </div>
        }
        </>
    )
}

export default Profile;