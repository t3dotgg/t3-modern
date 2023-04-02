"use client";

import { useZact } from "zact/client";
import { addUser } from "./mutation";

export const Button = (props: {}) => {
  const { mutate } = useZact(addUser);

  return (
    <div>
      <button
        onClick={() => {
          mutate({ name: "test" });
        }}
      >
        Add
      </button>
    </div>
  );
};
