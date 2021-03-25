import { resourceTypes } from "../../../data/enums";
import SearchField from "../../SearchField/SearchField";
import { SingleSelectOption } from "@dhis2/ui-core";
import { SingleSelectField } from "@dhis2/ui";

import styles from "./FilterSection.module.css";

interface filterSection {
  setSearch: Function;
  setResourceFilter: Function;
  resourceFilter: string;
}

export const FilterSection = ({
  setSearch,
  resourceFilter,
  setResourceFilter,
}: filterSection) => {
  return (
    <article className={styles.searchSection}>
      <article className={styles.singleSelect}>
        <SingleSelectField
          value={resourceFilter}
          onChange={function onChange(value: any) {
            setResourceFilter(value.selected);
          }}
          selected={resourceFilter}
          label={"What do you want to see?"}
        >
          <SingleSelectOption
            value={resourceTypes.ALL}
            label={resourceTypes.ALL}
            key={resourceTypes.ALL}
          />
          <SingleSelectOption
            value={resourceTypes.ACTIVITIES}
            label={resourceTypes.ACTIVITIES}
            key={resourceTypes.ACTIVITIES}
          />
          <SingleSelectOption
            value={resourceTypes.TECHNIQUES}
            label={resourceTypes.TECHNIQUES}
            key={resourceTypes.TECHNIQUES}
          />
        </SingleSelectField>
      </article>
      <SearchField
        placeHolder={"Search for project type, technique, etc..."}
        handleSearch={setSearch}
      />
    </article>
  );
};
