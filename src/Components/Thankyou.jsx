const Thankyou = ({agent}) => {
    return agent && <div className="content-wrapper thankyou-wrapper">
        <h2>{`Thank you from ${agent.first_name}!`}</h2>
    </div>
}

export default Thankyou;