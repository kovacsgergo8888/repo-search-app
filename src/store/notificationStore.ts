import { defineStore } from "pinia";

interface Notification {
  show?: boolean;
  message: string;
  color: "info" | "error";
}

export const useNotificationStore = defineStore("snackbar", {
  state: (): Notification => ({
    show: false,
    message: "",
    color: "info",
  }),
  actions: {
    setNotification(state: Notification) {
      this.show = true;
      this.message = state.message;
      this.color = state.color;
    },
  },
});
