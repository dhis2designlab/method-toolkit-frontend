import TextField from "@material-ui/core/TextField"

import styles from "./SearchField.module.css";

interface searchField {
  placeHolder?: string;
  handleSearch: Function;
}

const SearchField = ({
  handleSearch,
  placeHolder,
}: searchField): JSX.Element => {
  return (
      <div className={styles.searchFieldContainer}>
          <TextField
            onChange={function onChange(ev: any) {
              handleSearch(ev.target.value.toString().toLowerCase());
            }}
            label={placeHolder}
            name={"searchField"}
            type={"text"}
          />
      </div>
  );
};

export default SearchField;
