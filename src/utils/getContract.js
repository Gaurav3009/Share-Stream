import ContractAbi from "../artifacts/contracts/ShareStream.sol/ShareStream.json";
import { ethers } from "ethers";

async function  getContract() {

    // Creating new provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    try {
        await provider.send("eth_requestAccounts", []);
      } catch (err) {
        throw new Error("Could not get signer");
      }
    
    //Getting the signer
    const signer = provider.getSigner();

    // Creating new contract factory with the signer, address and ABI
    let contract = new ethers.Contract(
        "0xcf89C30Bc044958E2b9CB47a4F80D814c09D0838",
        ContractAbi.abi,
        signer
    );

    //Finally returning the contract
    return contract;
}

export default getContract;