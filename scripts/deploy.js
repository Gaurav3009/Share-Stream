// Hardhat runtime enviroment is needed here explicitly
// It is usefull forrunning the script standalone fashion through node <script>

const hardhatRuntimeEnviroment = require("hardhat");

async function main() {
  // Get the contract to deploy
  const ShareStream = await hardhatRuntimeEnviroment.ethers.getContractFactory("ShareStream");
  const sharestream = await ShareStream.deploy();

  await sharestream.deployed();

  console.log("ShareStream deployed to: ", sharestream.address);

}

// It is recommended pattern to be able to use a async/await everywhere
// to properly handle error

main().then(() => process.exit(0)).catch((err) => {
  console.error(err);
  process.exit(1);
});