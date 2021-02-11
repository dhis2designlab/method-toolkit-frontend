import { fetchJSON } from "./APIUtils";

const examples: string = "/examples";

export const fetchAllExamples = async () => {
    return await fetchJSON(examples);
}

export const fetchExample = async (id: string) => {
    const pathToResource = `${examples}/${id}`;
    return await fetchJSON(pathToResource);
}