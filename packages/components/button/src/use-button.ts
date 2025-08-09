import type { ButtonVariantProps } from "@heroui/theme";
import type { AriaButtonProps } from "@heroui/use-aria-button";

type KeyOfProps = keyof ButtonVariantProps | keyof AriaButtonProps;

export type ButtonProps = Omit<AriaButtonProps, keyof ButtonVariantProps> &
  Omit<ButtonVariantProps, "isInGroup">;
