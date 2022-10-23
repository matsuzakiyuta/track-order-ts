import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import React from "react";

interface InputFormProps {
  icon: React.ReactNode;
  type: "text" | "button" | "password" | "tel";
  placeholder?: string;
}

class InputForm extends React.Component<InputFormProps> {
  render() {
    const icon: React.ReactNode = this.props.icon;
    const formType: "text" | "button" | "password" | "tel" = this.props.type;
    const placeholder = this.props.placeholder ?? "";
    return (
      <Stack spacing={5}>
        <div className="e-input-group">
          <InputGroup>
            {icon && (
              <InputLeftElement pointerEvents={"none"}>{icon}</InputLeftElement>
            )}
            <Input type={formType} placeholder={placeholder} />
          </InputGroup>
        </div>
      </Stack>
    );
  }
}

export default InputForm;
