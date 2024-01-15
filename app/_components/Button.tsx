"use client";
import React, { useState } from "react";
import Modal from "./Modal";

type CheckoutButtonProps = {
  amount: string;
} & React.ComponentProps<"button">;

const CheckoutButton = ({ amount, children, ...rest }: CheckoutButtonProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <button
        {...rest}
        onClick={() => {
          setOpen(true);
        }}
      >
        {children}
      </button>
      <Modal open={open} setOpen={setOpen} amount={amount} />
    </>
  );
};

export default CheckoutButton;
