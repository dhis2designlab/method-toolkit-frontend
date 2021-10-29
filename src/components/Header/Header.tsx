import dhis2DesignLab from "../../media/dhis2_design_lab_logo.png"
import { Link } from "react-router-dom"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import MenuIcon from "@material-ui/icons/Menu"
import { useState, useEffect } from "react"
import { useLocation } from "react-router"

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
  const [activePage, setActivePage] = useState<null | string>(null)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const location = useLocation()

  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (): void => {
    setAnchorEl(null)
  }


  useEffect(() => {
    const handleActivePage = (): void => {
      listElements.map((listElement) =>
        window.location.href.includes(listElement.link)
          ? setActivePage(listElement.link)
          : null
      )
    }

    handleActivePage()
  }, [location])

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
              <li
                key={listElement.name}
                className={
                  listElement.link === activePage
                    ? styles.activePage
                    : undefined
                }
              >
                <Link to={listElement.link}>{listElement.name}</Link>
              </li>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Header
