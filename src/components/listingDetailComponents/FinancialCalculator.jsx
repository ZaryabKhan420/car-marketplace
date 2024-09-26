import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
const FinancialCalculator = () => {
  const [price, setPrice] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [monthlyEMI, setMonthlyEMI] = useState(0);

  const calculateMonthlyPayment = () => {
    const principal = price - downPayment;
    const monthlyInterestRate = interestRate / 1200;
    const monthlyPayment =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, loanTerm)) /
      (Math.pow(1 + monthlyInterestRate, loanTerm) - 1);
    setMonthlyEMI(monthlyPayment);
  };

  return (
    <div className="mt-5">
      <div className="p-8 shadow-md border border-slate-300 rounded-xl">
        <h2 className="font-medium text-2xl">Financial Calculator</h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 ">
          <div className="w-full">
            <label className="font-semibold" htmlFor="price">
              Price $
            </label>
            <Input
              type="number"
              min="0"
              className="w-full mt-2"
              id="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <div className="w-full">
            <label className="font-semibold" htmlFor="interest-rate">
              Interest Rate
            </label>
            <Input
              type="number"
              min="0"
              className="w-full mt-2"
              id="interest-rate"
              value={interestRate}
              onChange={(e) => {
                setInterestRate(e.target.value);
              }}
            />
          </div>
          <div className="w-full">
            <label htmlFor="loan-term" className="font-semibold">
              Loan Term
            </label>
            <Input
              type="number"
              min="0"
              className="w-full mt-2"
              id="loan-term"
              value={loanTerm}
              onChange={(e) => {
                setLoanTerm(e.target.value);
              }}
            />
          </div>
          <div className="w-full">
            <label className="font-semibold" htmlFor="down-payment">
              Down Payment
            </label>
            <Input
              type="number"
              min="0"
              className="w-full mt-2"
              id="down-payment"
              value={downPayment}
              onChange={(e) => {
                setDownPayment(e.target.value);
              }}
            />
          </div>
        </div>
        {monthlyEMI > 0 && (
          <h2 className="mt-5 text-2xl font-medium">
            Your Monthly Payment Is :{" "}
            <span className="text-3xl font-bold">${monthlyEMI}</span>{" "}
          </h2>
        )}

        <Button
          className="w-full mt-5"
          size="lg"
          onClick={calculateMonthlyPayment}
        >
          Calculate
        </Button>
      </div>
    </div>
  );
};

export default FinancialCalculator;
