import React, { Fragment } from "react";

import { ButtonDefault, TextButton } from "./Button.styles";

// import { Container } from './styles';

export enum ButtonTypes {
  Primary = "Primary",
  Secondary = "Secondary",
  OutlinePrimary = "OutlinePrimary",
  OutlineSecondary = "OutlineSecondary",
  Ghost = "Ghost",
}

interface ButtonProps {
  type: ButtonTypes;
  handleFc: () => void;
  text: string;
  outline?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ type, handleFc, text }) => {
  return (
    <Fragment>
      <ButtonDefault variant={type} onPress={handleFc}>
        <TextButton variant={type}>{text}</TextButton>
      </ButtonDefault>
    </Fragment>
  );
};
