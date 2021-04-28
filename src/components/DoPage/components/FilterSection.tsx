import React from "react";
import { resourceTypes } from "../../enums";
import SearchField from "../../SearchField/SearchField";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { resourceFilters } from "../../interfaces";

import styles from "./FilterSection.module.css";
interface filterSection {
  setSearch: Function;
  handleResourceFilter(event: React.ChangeEvent<HTMLInputElement>): void;
  resourceFilter: resourceFilters;
}

export const FilterSection = ({
  setSearch,
  resourceFilter,
  handleResourceFilter: setResourceFilter,
}: filterSection) => {
  return (
    <article className={styles.searchSection}>
      <article className={styles.selectContainer}>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={resourceFilter.showActivities}
                onChange={setResourceFilter}
                name="showActivities"
                inputProps={{ "aria-label": "primary checkbox" }}
                color="primary"
              />
            }
            label={resourceTypes.ACTIVITIES}
          />
          <FormControlLabel
            control={
              <Switch
                checked={resourceFilter.showTechniques}
                onChange={setResourceFilter}
                name="showTechniques"
                inputProps={{ "aria-label": "primary checkbox" }}
                color="primary"
              />
            }
            label={resourceTypes.TECHNIQUES}
          />
        </FormGroup>
      </article>
      <SearchField placeHolder={"Search field"} handleSearch={setSearch} />
    </article>
  );
};
