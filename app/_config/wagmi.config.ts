import { createConfig } from "wagmi";
import { getDefaultConfig } from "connectkit";
import { sepolia, goerli, polygon, mainnet } from "wagmi/chains";

const chains =
  process.env.NODE_ENV === "production"
    ? [mainnet, polygon]
    : [sepolia, goerli];

export const config = createConfig(
  getDefaultConfig({
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY ?? "",
    walletConnectProjectId:
      process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? "",

    appName: "LFGHO",

    // Optional
    appDescription:
      "LFGHO is a community of like-minded individuals who are passionate about the metaverse and the future of gaming.",
    // appUrl: "https://family.co",
    appIcon: "https://family.co/logo.png",
    chains,
  })
);
