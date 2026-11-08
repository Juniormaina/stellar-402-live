import { Keypair } from "@stellar/stellar-sdk";
import { createBudget } from "../src/stellar/budget.js";
import { budgetPath } from "../src/stellar/budget-location.js";

try {
  const buyer = Keypair.fromSecret(
    process.env.STELLAR_PRIVATE_KEY,
  ).publicKey();

  const budget = createBudget({
    path: budgetPath(buyer),
  });

  console.log(JSON.stringify(budget.snapshot(), null, 2));
} catch (error) {
  console.error("Budget status failed:", error.message);
  process.exitCode = 1;
}
