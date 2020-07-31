import React from "react";

import { Button, ButtonTypes } from "../Button/Button.component";

import { Container } from "./AppBar.styles";

interface AppBar {
  handleFc: () => void;
}

export const AppBar: React.FC<AppBar> = ({ handleFc }) => {
  return (
    <Container>
      <Button
        type={ButtonTypes.Ghost}
        {...{ handleFc, text: "Change Theme" }}
      />
    </Container>
  );
};
