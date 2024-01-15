"use client";
import { WagmiConfig } from "wagmi";
import { ConnectKitProvider } from "connectkit";
import { config } from "./wagmi.config";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>{children}</ConnectKitProvider>
    </WagmiConfig>
  );
};

export default Provider;
