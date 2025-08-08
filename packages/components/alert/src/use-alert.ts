import type {
  AlertSlots,
  AlertVariantProps,
  SlotsToClasses,
} from "@heroui/theme";

import { ref, computed, watchEffect, toValue, type MaybeRef } from "vue";
import { alert } from "@heroui/theme";
import { mapPropsVariants } from "@heroui/system";
import {
  clsx,
  dataAttr,
  isEmpty,
  objectToDeps,
  mergeProps,
} from "@heroui/shared-utils";

export interface AlertProps {
  title?: string;
  description?: string;
  isVisible?: boolean;
  isDefaultVisible?: boolean;
  isClosable?: boolean;
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <Alert :classNames="{
   *    base:"base-classes",
   *    mainWrapper: "mainWrapper-classes"
   *    description: "description-classes"
   *    title: "title-classes"
   *    closeButton: "closeButton-classes"
   *    closeIcon: "closeIcon-classes"
   * }" />
   * ```
   */
  classNames?: SlotsToClasses<AlertSlots>;

  /* Alert variants */
  variant?: AlertVariantProps["variant"];
  color?: AlertVariantProps["color"];
  radius?: AlertVariantProps["radius"];
  hideIcon?: AlertVariantProps["hideIcon"];
  hideIconWrapper?: AlertVariantProps["hideIconWrapper"];
  hasContent?: AlertVariantProps["hasContent"];
}

export function useAlert(
  originalProps: MaybeRef<AlertProps>,
  slots: Record<string, any>,
) {
  const slotsProps = ref<Record<AlertSlots, string>>();

  function updateSlotsProps(variantProps: AlertVariantProps) {
    const slots = alert({
      hasContent: !isEmpty(description) || !isEmpty(children),
      ...variantProps,
    });
  }

  const [props, variantProps] = mapPropsVariants(
    toValue(originalProps),
    alert.variantKeys,
  );

  const {
    title,
    description,
    isClosable,
    isVisible: isVisibleProp,
    isDefaultVisible,
    classNames,
  } = props;

  const isVisible = ref(isVisibleProp ?? isDefaultVisible ?? true);

  return {};
}
