import { defineConfig, loadEnv } from "@wagmi/cli";
import { etherscan, react } from "@wagmi/cli/plugins";
import { sepolia } from "wagmi/chains";

const env = loadEnv({ envDir: process.cwd() });

export default defineConfig({
  out: "app/_utils/wagmi.generated.ts",

  plugins: [
    etherscan({
      apiKey: env.ETHERSCAN_API_KEY ?? "",
      chainId: sepolia.id,
      contracts: [
        {
          name: "GhoToken",
          address: "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60",
        },
      ],
    }),
    react(),
  ],
});
