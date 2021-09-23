import { useState } from "react";
import { Button, Card, InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';

import styles from "./SearchBar.module.css"

interface search {
    placeholderForTextField?: string,

}

const SearchBar = ({ placeholderForTextField }: search) => {
    const [expanded, setExpanded] = useState<boolean>(false)

    return (
        <Card className={styles.searchBarContainer}>
            <h4>What do you need support with?</h4>
            <div className={styles.searchBarMiddleRow}>
                <TextField
                id={styles.searchField}
                placeholder={placeholderForTextField ?? "Search for something!"}
                variant="outlined"
                size="small"
                InputProps={{
                    startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>
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
        </Card>
    )
}

export default SearchBar