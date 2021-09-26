import { useState } from "react"
import {
  Button,
  Card,
  InputAdornment,
  TextField,
} from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown"
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp"

import styles from "./SearchBar.module.css"

interface filterProps {
  value: string
  onChangeHandeler: (newValue: string) => void
  filterOptions: any
}
interface search {
  placeholderForTextField?: string
  handleTextChange: (newValue: string) => void
  materials?: filterProps
  locations?: filterProps
  activites?: filterProps
  methods?: filterProps
  duration?: filterProps
}

const SearchBar = ({
  placeholderForTextField,
  handleTextChange
}: search) => {
  const [expanded, setExpanded] = useState<boolean>(false)

  return (
    <Card className={styles.searchBarContainer}>
      <h4>What do you need support with?</h4>
      <div className={styles.searchBarMiddleRow}>
        <TextField
          className={styles.searchField}
          placeholder={placeholderForTextField ?? undefined}
          variant="outlined"
          size="small"
          onChange={e => handleTextChange(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          endIcon={expanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          onClick={() => setExpanded(!expanded)}
        >
          Filters
        </Button>
      </div>
      {expanded ? (
        <div>
          <p>Filters are coming soon! Thank you for your interest.</p>
        </div>
      ) : null}
    </Card>
  )
}

export default SearchBar
