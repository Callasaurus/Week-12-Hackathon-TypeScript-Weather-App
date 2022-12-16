import React from "react";
import { t_UserInputProps } from "../Types";

export default function UserInput({ setInput }: t_UserInputProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  return (
    <div>
      <input onChange={handleChange} />
    </div>
  );
}
