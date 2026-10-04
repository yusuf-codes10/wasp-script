import { ref, onBeforeUnmount } from 'vue';

export type ConsoleLine = {
  type?: "log" | "error" | "info";
  text: string;
};
