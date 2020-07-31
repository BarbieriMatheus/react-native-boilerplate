import styled from "styled-components/native";
import { TouchableOpacityProps, TextProps } from "react-native";

import { ButtonTypes } from "./Button.component";

interface ButtonProps extends TouchableOpacityProps {
  variant: ButtonTypes;
}

interface TextButtonProps extends TextProps {
  variant: ButtonTypes;
}

function styles({ colors }: any, variant: ButtonTypes) {
  const theme = {
    Primary: {
      bg: colors.primary,
      color: colors.white,
    },
    Secondary: {
      bg: colors.secondary,
      color: colors.white,
    },
    OutlinePrimary: {
      bg: colors.white,
      border: `1px solid ${colors.primary}`,
      color: colors.primary,
    },
    OutlineSecondary: {
      bg: colors.white,
      border: `1px solid ${colors.secondary}`,
      color: colors.secondary,
    },
    Ghost: {
      color: colors.black,
    },
  };

  return theme[variant];
}

export const ButtonDefault = styled.TouchableOpacity<ButtonProps>`
  width: 80%;
  min-height: 60px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 18px 0;
  background-color: ${({ theme, variant }): string =>
    styles(theme, variant)?.bg || "transparent"}
  border: ${({ theme, variant }): string =>
    styles(theme, variant)?.border || "none"}
`;

export const TextButton = styled.Text<TextButtonProps>`
  color: ${({ theme, variant }): string =>
    styles(theme, variant)?.color || "#000"}
  font-size: 18px;
  font-weight: 600;
`;
