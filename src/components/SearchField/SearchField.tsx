import React from "react";
import { Input } from "@dhis2/ui-core";

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
          <Input
            onChange={function onChange(ev: any) {
              handleSearch(ev.value.toLowerCase());
            }}
            placeholder={placeHolder}
            name={"searchField"}
            type={"text"}
          />
      </div>
  );
};

export default SearchField;
