import React, { useState, useEffect } from "react";
import SearchField from "../SearchField/SearchField";
import { fetchAllTechniques } from "../../api/TechniquesAPI";
import { fetchAllActivities } from "../../api/ActivityAPI";
import PreviewCard from "../PreviewCard/PreviewCard";

import styles from "./DoPage.module.css";

const DoPage = () => {
  const [search, setSearch] = useState("");
  const [techniques, setTechniques] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchTechniques = async () => {
      const data = await fetchAllTechniques();
      setTechniques(await data?.json());
    };
    const fetchActivities = async () => {
      const data = await fetchAllActivities();
      setActivities(await data?.json())
    }
    fetchTechniques();
    fetchActivities();
  }, []);

  const dataToShow = [...techniques, ...activities];

  let filteredData =
    search !== "" && dataToShow.length !== 0
      ? dataToShow.filter(
          (item: any) =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.intro.toLowerCase().includes(search.toLowerCase())
        )
      : dataToShow;

  return (
    <section className={styles.doPageContainer}>
      <h1>What do you want support with?</h1>
      <SearchField
        placeHolder={"Search for project type, technique, etc..."}
        handleSearch={setSearch}
      />
      <article className={styles.cardContainer}>
        {filteredData.length !== 0 ? (
          filteredData.map((item: any) => {
            return (
              <PreviewCard
                key={item.id}
                title={item.title}
                intro={item.intro}
                id={item.slug ? item.slug : item.id}
                resource={item.slug ? "techniques" : "activities"}
              />
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </article>
    </section>
  );
};

export default DoPage;
