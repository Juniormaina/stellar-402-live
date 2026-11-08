import test from "node:test";
import assert from "node:assert/strict";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { Keypair } from "@stellar/stellar-sdk";
import {
  DEFAULT_BUDGET_LIMIT_ATOMIC,
  budgetPath,
} from "../src/stellar/budget-location.js";

const root = fileURLToPath(new URL("..", import.meta.url));

test("default budget limit is one USDC", () => {
  assert.equal(DEFAULT_BUDGET_LIMIT_ATOMIC, "10000000");
});

test("budget path is per buyer under .local", () => {
  const buyer = Keypair.random().publicKey();

  assert.equal(
    budgetPath(buyer),
    join(root, ".local", `budget-${buyer}.json`),
  );
});

test("budget path rejects invalid buyer keys", () => {
  for (const value of [
    undefined,
    "",
    "not-a-key",
    "../../etc/passwd",
    Keypair.random().secret(),
  ]) {
    assert.throws(() => budgetPath(value), /valid Stellar public key/);
  }
});