import { StrKey } from "@stellar/stellar-sdk";
import { fileURLToPath } from "node:url";

// One USDC in atomic units (seven decimal places).
export const DEFAULT_BUDGET_LIMIT_ATOMIC = "10000000";

const LOCAL_DIRECTORY = new URL("../../.local/", import.meta.url);

export function budgetPath(buyer) {
  if (!StrKey.isValidEd25519PublicKey(buyer)) {
    throw new Error("Budget owner must be a valid Stellar public key");
  }

  return fileURLToPath(new URL(`budget-${buyer}.json`, LOCAL_DIRECTORY));
}