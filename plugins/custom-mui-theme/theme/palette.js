import { green, grey, red } from "@material-ui/core/colors"

const palette = {
  primary: {
    light: "#69696a",
    main: "#28282a",
    dark: "#1e1e1f",
  },
  secondary: {
    light: "#fff5f8",
    main: "#ff3366",
    dark: "#e62958",
  },
  warning: {
    main: "#ffc071",
    dark: "#ffb25e",
  },
  error: {
    xLight: red[50],
    main: red[500],
    dark: red[700],
  },
  success: {
    xLight: green[50],
    main: green[500],
    dark: green[700],
  },
  background: {
    default: "fff",
    placeholder: grey[200],
  },
}

export default palette
