import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x03Ead3ABCC121b0f31C533Ebc7B6BdF673ed3c2c",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Twice",
        description: "This NFT will give you access to TwiceDAO!",
        image: readFileSync("scripts/assets/twiceLogo.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()