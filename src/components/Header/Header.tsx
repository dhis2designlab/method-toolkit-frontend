import dhis2DesignLab from "../../media/dhis2_design_lab_logo.png"
import { Link } from "react-router-dom"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import MenuIcon from "@material-ui/icons/Menu"
import { useState } from "react"

import styles from "./Header.module.css"

const listElements = [
  {
    name: "Overview",
    link: "/",
  },
  {
    name: "Activities",
    link: "/activities",
  },
  {
    name: "Methods",
    link: "/methods",
  },
  {
    name: "About",
    link: "/about",
  },
]

const Header = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const ITEM_HEIGHT = 48

  return (
    <nav className={styles.header}>
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <Link to="/">
            <img
              className={styles.logo}
              src={dhis2DesignLab}
              alt={"DHIS2 Design Lab"}
            />
          </Link>
          <div className={styles.menu}>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls="long-menu"
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              {listElements.map((listElement) => {
                return (
                  <MenuItem
                    onClick={handleClose}
                    key={`mobileMenu ${listElement.name}`}
                    className={styles.menu}
                  >
                    <Link to={listElement.link}>{listElement.name}</Link>
                  </MenuItem>
                )
              })}
            </Menu>
          </div>
        </div>
        <div className={styles.containerRight}>
          {listElements.map((listElement) => {
            return (
              <Link key={listElement.name} to={listElement.link}>
                {listElement.name}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Header
