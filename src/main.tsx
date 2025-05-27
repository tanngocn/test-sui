import React from "react";
import ReactDOM from "react-dom/client";
import "@mysten/dapp-kit/dist/index.css";
import "@radix-ui/themes/styles.css";
import './styles/main.css';

import { SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Theme } from "@radix-ui/themes";
import { networkConfig } from "./networkConfig.ts";
import { RouterProvider } from "react-router";
import { routes } from "./routes/index.tsx";
import { registerSuiSnapWallet } from "@kunalabs-io/sui-snap-wallet";
registerSuiSnapWallet();
const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme appearance="dark">
      <QueryClientProvider client={queryClient}>
        <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
          <WalletProvider
            autoConnect
            slushWallet={{
              name: "Slush Wallet",
              origin: "https://test-sui-c8vc.vercel.app"
            }}
          >
            <RouterProvider router={routes} />
          </WalletProvider>
        </SuiClientProvider>
      </QueryClientProvider>
    </Theme>
  </React.StrictMode>,
);
