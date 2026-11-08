import { Keypair } from "@stellar/stellar-sdk";
import { createBudget } from "../src/stellar/budget.js";
import { budgetPath } from "../src/stellar/budget-location.js";
import { reconcileBudget } from "../src/stellar/reconcile-budget.js";

try {

  const buyer = Keypair.fromSecret(
    process.env.STELLAR_PRIVATE_KEY,
  ).publicKey();

  const budget = createBudget({
    path: budgetPath(buyer),
  });

  const results = await reconcileBudget({
    budget,
    buyer,
  });

  if (results.length === 0) {
    console.log("No pending payments to reconcile.");
  } else {
    console.log(JSON.stringify(results, null, 2));
  }

  console.log(
    `Remaining budget atomic units: ${budget.snapshot().remainingAtomic}`,
  );

  if (results.some((result) => result.status === "unresolved")) {
    console.error("Unresolved payments remain reserved.");
    process.exitCode = 1;
  }
} catch (error) {
  console.error("Reconciliation failed:", error.message);
  process.exitCode = 1;
}
