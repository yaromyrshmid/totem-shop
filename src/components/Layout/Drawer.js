import React from "react"
import Drawer from "@material-ui/core/Drawer"

const StyledDrawer = ({ showDrawer, closeDrawer }) => {
  return (
    <Drawer anchor="left" open={showDrawer} onClose={closeDrawer}>
      <div>
        <h2>drawer</h2>
      </div>
    </Drawer>
  )
}

export default StyledDrawer
