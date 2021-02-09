import { fetchJSON } from "./APIUtils";

const techniques: string = "/techniques";

export const fetchAllTechniques = async () => {
    return await fetchJSON(techniques);
}

export const fetchTechnique = async (slug: string) => {
    const pathToResource = `${techniques}?slug=${slug}`;
    return await fetchJSON(pathToResource);
}