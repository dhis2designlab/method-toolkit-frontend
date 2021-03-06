import React, { useState } from "react";
import PreviewCard from "../PreviewCard/PreviewCard";
import useFetch from "../../api/useFetch";
import { activitiesResource, techniquesResource } from "../../api/constants";
import { isTechnique } from "../../util/typeCheckingUtils";
import { filterText, filterResources } from "../../util/filterUtils";
import { activity, technique } from "../interfaces";
import { FilterSection } from "./components/FilterSection";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import CircularProgress from "@material-ui/core/CircularProgress";

import styles from "./DoPage.module.css";

const DoPage = () => {
  const [search, setSearch] = useState<string>("");
  const [resourceFilters, setResourceFilters] = useState({
    showActivities: true,
    showTechniques: true,
  });

  const [techniques, setTechniques] = useState<technique[] | undefined>(
    undefined
  );
  const [activities, setActivities] = useState<activity[] | undefined>(
    undefined
  );

  const handleResourceFilters = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setResourceFilters({
      ...resourceFilters,
      [event.target.name]: event.target.checked,
    });
  };

  const handleTechnique = (newState: technique[]) => {
    if (newState !== techniques) {
      setTechniques(newState);
    }
  };

  const handleActivities = (newState: activity[]) => {
    if (newState !== activities) {
      setActivities(newState);
    }
  };

  const {
    isLoading: techniquesIsLoading,
    error: techniquesError,
    response: techniquesResponse,
  } = useFetch(techniquesResource);

  const {
    isLoading: activitiesIsLoading,
    error: activitiesError,
    response: activitiesResponse,
  } = useFetch(activitiesResource);

  handleTechnique(techniquesResponse);
  handleActivities(activitiesResponse);

  const dataToShow =
    techniques && activities
      ? [...techniques, ...activities]
      : techniques && !activities
      ? techniques
      : !techniques && activities
      ? activities
      : [];

  const filteredData =
    search !== "" || dataToShow.length !== 0
      ? dataToShow.filter(
          (item: activity | technique) =>
            filterResources(item, resourceFilters) &&
            filterText(search, item.title, item.intro)
        )
      : dataToShow;

  return (
    <section className={styles.doPageContainer}>
      <h1>What do you want support with?</h1>

      <FilterSection
        setSearch={setSearch}
        handleResourceFilter={handleResourceFilters}
        resourceFilter={resourceFilters}
      />

      {techniquesError && !activitiesError ? (
        <Alert severity="error">
          <AlertTitle>Could not retrive techniques</AlertTitle>
          There was a problem fetching the techniques. Please try again later.
        </Alert>
      ) : !techniquesError && activitiesError ? (
        <Alert severity="error">
          <AlertTitle>Could not retrive activities</AlertTitle>
          There was a problem fetching the activities. Please try again later.
        </Alert>
      ) : techniquesError && activitiesError ? (
        <Alert severity="error">
          <AlertTitle>Could not retrive data</AlertTitle>
          There was a problem fetching the activities and techniques. Please try
          again later.
        </Alert>
      ) : null}

      <article className={styles.cardContainer}>
        {activitiesIsLoading && techniquesIsLoading ? (
          <CircularProgress />
        ) : filteredData.length !== 0 ? (
          filteredData.map((item: any) => {
            return (
              <PreviewCard
                key={item.id}
                title={item.title}
                intro={item.intro}
                id={isTechnique(item) ? item.slug : item.id}
                resource={isTechnique(item) ? "techniques" : "activities"}
              />
            );
          })
        ) : (
          <Alert severity="info">
            <AlertTitle>No matches</AlertTitle>
            Could not find anything matching your search.
          </Alert>
        )}
      </article>
    </section>
  );
};

export default DoPage;
