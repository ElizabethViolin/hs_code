import React from "react";
import { Button } from "@nextui-org/react";

function ClearButton({ handleClearClick }) {
  return (
    <div className="pt-5 mx-auto flex justify-between">
      <Button
        size="lg"
        onClick={handleClearClick}
        className="mx-auto bg-tr text-black underline"
      >
        Clear
      </Button>
    </div>
  );
}

export default ClearButton;
