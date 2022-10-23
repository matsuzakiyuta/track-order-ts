import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import React from "react";

interface InputFormProps {
  icon: React.ReactNode;
  type: "text" | "button" | "password" | "tel";
  placeholder?: string;
}

function InputForm({ icon, type, placeholder }: InputFormProps) {
  return (
    <Stack spacing={5}>
      <div className="e-input-group">
        <InputGroup>
          {icon && (
            <InputLeftElement pointerEvents={"none"}>{icon}</InputLeftElement>
          )}
          <Input type={type} placeholder={placeholder} />
        </InputGroup>
      </div>
    </Stack>
  );
}

export default InputForm;
