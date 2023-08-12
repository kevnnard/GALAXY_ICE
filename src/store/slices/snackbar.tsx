import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  action: false,
  open: false,
  message: "Note archived",
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "right",
  },
  variant: "default",
  alert: {
    color: "primary",
    variant: "filled",
  },
  transition: "Fade",
  close: true,
  actionButton: false,
};

const slice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    hasError(state, action) {
      state.error = action.payload;
    },
    // Q U E R Y S

    // M U T A T I O N S
    openSnackbar(state, action) {
      const {
        open,
        message,
        anchorOrigin,
        variant,
        alert,
        transition,
        close,
        actionButton,
      } = action.payload;

      state.action = !state.action;
      state.open = open || initialState.open;
      state.message = message || initialState.message;
      state.anchorOrigin = anchorOrigin || initialState.anchorOrigin;
      state.variant = variant || initialState.variant;
      state.alert = {
        color: (alert && alert.color) || initialState.alert.color,
        variant: (alert && alert.variant) || initialState.alert.variant,
      };
      state.transition = transition || initialState.transition;
      state.close = close === false ? close : initialState.close;
      state.actionButton = actionButton || initialState.actionButton;
    },

    closeSnackbar(state) {
      state.open = false;
      state.close = true;
    },
  },
});

export const { openSnackbar, closeSnackbar } = slice.actions;
export default slice.reducer;
