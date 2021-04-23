import { technique, activity } from "../components/interfaces";
import { resourceTypes } from "../data/enums";
import { isActivity, isTechnique } from "./typeCheckingUtils";

export const filterText = (
  search: string,
  title: string,
  intro: string
): boolean => {
  return (
    title.toLowerCase().includes(search.toLowerCase()) ||
    intro.toLowerCase().includes(search.toLowerCase())
  );
};

// Checks the resource type to, if none of the enums match
// we assume it's set to ALL
export const filterResourceType = (
  filterState: string,
  item: activity | technique
): boolean => {
  switch (filterState) {
    case resourceTypes.TECHNIQUES:
      return isTechnique(item);
    case resourceTypes.ACTIVITIES:
      return isActivity(item);
    default:
      return true;
  }
};
