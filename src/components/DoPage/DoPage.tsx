import React, { useState, useEffect } from "react";
import SearchField from "../SearchField/SearchField";
import { fetchAllTechniques } from "../../api/TechniquesAPI";
import PreviewCard from "../PreviewCard/PreviewCard";

import styles from "./DoPage.module.css";

const DoPage = () => {
  const [search, setSearch] = useState("");
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllTechniques();
      setState(await data?.json());
    };
    fetchData();
  }, []);

  let dataToShow =
    search !== "" && state.length !== 0
      ? state.filter(
          (item: any) =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.intro.toLowerCase().includes(search.toLowerCase())
        )
      : state;

  return (
    <section className={styles.doPageContainer}>
      <h1>What do you want support with?</h1>
      <SearchField
        placeHolder={"Search for project type, technique, etc..."}
        handleSearch={setSearch}
      />
      <article className={styles.cardContainer}>
        {dataToShow.length !== 0 ? (
          dataToShow.map((item: any) => {
            return (
              <PreviewCard
                key={item.id}
                title={item.title}
                intro={item.intro}
                id={item.slug}
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
