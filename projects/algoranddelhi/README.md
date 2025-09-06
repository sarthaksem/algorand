# 📑 Loan Record dApp on Algorand

## 🚀 Project Description
The **Loan Record dApp** is a beginner-friendly decentralized application built on the **Algorand blockchain**.
It allows users to **create, manage, and track loan records** securely and transparently using smart contracts.

This project is ideal for developers new to Algorand who want to learn about **global state**, smart contracts, and simple blockchain logic in TypeScript.

---

## 💡 What it does
- Creates a **loan record** with a borrower name and loan amount.
- Tracks **loan status** (Pending → Repaid).
- Retrieves **loan details** at any time.

---

## ✨ Features
- **Create Loan:** Add a borrower and loan amount.
- **Repay Loan:** Mark a loan as repaid.
- **Get Loan Details:** View borrower, amount, and current status.
- **Beginner Friendly:** Minimal and easy-to-understand code for learning.

---

## 🔗 Deployed Smart Contract
`XXX`

---

## 📝 Smart Contract Code

```ts
import { Contract, GlobalState, uint64, Uint64 } from '@algorandfoundation/algorand-typescript'

export class LoanRecord extends Contract {
  // Store borrower name
  borrower = GlobalState<string>({ key: "borrower", initialValue: "" })

  // Store loan amount
  loanAmount = GlobalState<uint64>({
    key: "loanAmount",
    initialValue: Uint64(0),
  })

  // Store loan status
  status = GlobalState<string>({ key: "status", initialValue: "None" })

  // Function to create a loan record
  createLoan(borrowerName: string, amount: uint64): string {
    this.borrower.value = borrowerName
    this.loanAmount.value = amount
    this.status.value = "Pending"
    // Just return string + placeholder; do not try to convert uint64 here
    return "Loan created for " + borrowerName + " with amount (check client)"
  }

  // Function to mark loan as repaid
  repayLoan(): string {
    if (this.status.value === "Pending") {
      this.status.value = "Repaid"
      return "Loan repaid successfully!"
    } else {
      return "No active loan to repay."
    }
  }

  // Function to get loan details
  getLoan(): string {
    return (
      "Borrower: " + this.borrower.value +
      " | Amount: (check client) " +
      " | Status: " + this.status.value
    )
  }
}
