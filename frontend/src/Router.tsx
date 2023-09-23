import { createBrowserRouter, Outlet } from "react-router-dom";
import { App, Dashboard } from "./pages";
import { Layout } from "./components";
import { isSignInRedirect, LitAuthClient } from "@lit-protocol/lit-auth-client";
import { ProviderType } from "@lit-protocol/constants";
import { AuthMethod } from "@lit-protocol/types";
import { PKPEthersWallet } from "@lit-protocol/pkp-ethers";
import {
  createSafe,
  getSafeTransaction,
  getSignedSafeAddress,
  getSignedTransaction,
  execWithLit,
  getUserPKPs,
} from "./hooks";
import { Contract, providers, utils } from "ethers";
import config from "./config.json";
import { getSafeAddress } from "./hooks/predictSafe";
