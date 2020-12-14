import { createMuiTheme } from "@material-ui/core/styles"
import theme from "./theme"

const themeName = "totem-mui-theme"

export default createMuiTheme({ ...theme, themeName })
