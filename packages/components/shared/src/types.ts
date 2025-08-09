import type { Component } from "vue";

export type HTMLNextUIVueProps<T extends keyof HTMLElementTagNameMap = "div"> =
  {
    as?: Component | T | (string & {});
  };
