import { useEffect, useState } from "react";
import Comment from "./Components/Comment";
import Footer from "./Components/Footer"
import Profile from "./Components/Profile"
import Rating from "./Components/Rating"
import Thankyou from "./Components/Thankyou";

const App = () => {
  const [agentProfile, setAgentProfile] = useState({});
  const [step, setStep] = useState(1);

  useEffect(() => {
      const fetchAgent = async (url) => {
          let response = await fetch(url);
          let agentProfile = await response.json();
  
          setAgentProfile(agentProfile.invite)
      }

      fetchAgent('https://restapi.co.uk/api/invite/create')
  }, []);

  const goToNextStep = () => {
    setStep(prevStep => prevStep + 1)
  }

  return (
    <div>
      <div className="rating-wrapper">
        <Profile agent={agentProfile.agent} />
        {step === 1 && <Rating code={agentProfile.code} nextStep={goToNextStep} />}
        {step === 2 && <Comment profile={agentProfile} nextStep={goToNextStep} />}
        {step === 3 && <Thankyou agent={agentProfile.agent} />}
      </div>
      <Footer />
    </div>
  )
}

export default App
