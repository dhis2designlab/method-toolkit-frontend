import { resourceTypes } from "../../../data/enums";
import SearchField from "../../SearchField/SearchField";

import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

import styles from "./FilterSection.module.css";
import React from "react";

interface filterSection {
  setSearch: Function;
  setResourceFilter: Function;
  resourceFilter: string;
}

// TODO: Delete one of the fields after lab has tested

export const FilterSection = ({
  setSearch,
  resourceFilter,
  setResourceFilter,
}: filterSection) => {
  return (
    <article className={styles.searchSection}>
      <article className={styles.selectContainer}>
        <article>
          <h3>SimpleSelect</h3>
          <FormControl className={styles.select}>
            <InputLabel id={"do-resource-selector"}>
              What do You want to see?
            </InputLabel>
            <Select
              labelId={"do-resource-selector"}
              value={resourceFilter}
              onChange={function onChange(
                event: React.ChangeEvent<{ name?: string; value: unknown }>
              ) {
                setResourceFilter(event.target.value);
              }}
            >
              <MenuItem value={resourceTypes.ALL}>{resourceTypes.ALL}</MenuItem>
              <MenuItem value={resourceTypes.ACTIVITIES}>
                {resourceTypes.ACTIVITIES}
              </MenuItem>
              <MenuItem value={resourceTypes.TECHNIQUES}>
                {resourceTypes.TECHNIQUES}
              </MenuItem>
            </Select>
          </FormControl>
        </article>
        <article>
          <h3>NativeSelect</h3>
          <FormControl className={styles.select}>
            <InputLabel id={"do-resource-selector"}>
              What do You want to see?
            </InputLabel>
            <Select
              labelId={"do-resource-selector"}
              value={resourceFilter}
              native
              onChange={function onChange(
                event: React.ChangeEvent<{ name?: string; value: unknown }>
              ) {
                setResourceFilter(event.target.value);
              }}
            >
              <option value={resourceTypes.ALL}>{resourceTypes.ALL}</option>
              <option value={resourceTypes.ACTIVITIES}>
                {resourceTypes.ACTIVITIES}
              </option>
              <option value={resourceTypes.TECHNIQUES}>
                {resourceTypes.TECHNIQUES}
              </option>
            </Select>
          </FormControl>
        </article>
      </article>
      <SearchField placeHolder={"Search field"} handleSearch={setSearch} />
    </article>
  );
};
