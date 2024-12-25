const fs = require("fs");
const path = require("path");
const hre = require("hardhat");

async function main() {
  const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding");
  const crowdFunding = await CrowdFunding.deploy();

  await crowdFunding.deployed();

  // Di chuyển tệp CrowdFunding.json vào Context
  const artifactsDir = path.join(
    __dirname,
    "..",
    "artifacts",
    "contracts",
    "CrowdFunding.sol"
  );
  const contextDir = path.join(__dirname, "..", "Context");

  if (!fs.existsSync(contextDir)) {
    fs.mkdirSync(contextDir);
  }

  const sourceFile = path.join(artifactsDir, "CrowdFunding.json");
  const destinationFile = path.join(contextDir, "CrowdFunding.json");

  fs.copyFileSync(sourceFile, destinationFile);
  console.log("Tệp CrowdFunding.json đã được di chuyển đến Context");

  console.log(`crowdFunding deployed to ${crowdFunding.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
