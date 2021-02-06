import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { fetchTechnique } from "../../api/TechniquesAPI";
interface displayPage {
  id: string;
}

const DisplayPage = ({ id }: displayPage) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTechnique(id);
      setResult(await data?.json());
    };

    fetchData();
  }, [id]);

  return (
    <>
      {result.length !== 0 ? (
        result.map((item: any) => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.intro}</p>
              <ReactMarkdown children={item.content} />
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default DisplayPage;
