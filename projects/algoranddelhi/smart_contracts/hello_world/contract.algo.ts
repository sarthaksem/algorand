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
