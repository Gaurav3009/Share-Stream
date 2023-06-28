import React from 'react';
import '../style/Landing.scss';
import { Link } from 'react-router-dom'; 
function LandingPage() {
    // Creating a function to connect user's wallet
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      // Checking if user have Metamask installed
      if (!ethereum) {
        // If user doesn't have Metamask installed, throw an error
        alert("Please install MetaMask");
        return;
      }

      // If user has Metamask installed, connect to the user's wallet
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      // At last save the user's wallet address in browser's local storage
      localStorage.setItem("walletAddress", accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='anim'>
      <div class='ripple-background'>
        <div class='circle xxlarge shade1'></div>
        <div class='circle xlarge shade2'></div>
        <div class='circle large shade3'></div>
        <div class='circle medium shade4'></div>
        <div class='circle small shade5'></div>
      </div>
        <div className='welcome'>
            <h1>
              <span>Share</span>
              &nbsp;
              <span>Stream</span>
              </h1>
            <h3>A decentralized video sharing application</h3>
            <button
                  className="btn btn--white btn--animated"
                  onClick={() => {
                    // Calling the connectWallet function when user clicks on the button
                    connectWallet();
                  }}
                >
                  <Link style = {{textDecoration:"none", fontSize: "0.8rem", fontWeight: "100", letterSpacing: "1px", color: "whitesmoke"}} to = "/home"> <span>Connect wallet</span></Link>
            </button>
        </div>
        
    </div>
  )
}

export default LandingPage