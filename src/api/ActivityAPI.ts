import { fetchJSON } from "./APIUtils";

const activities: string = "/activities";

export const fetchAllActivities = async () => {
    return await fetchJSON(activities);
}

export const fetchActivity = async (id: string) => {
    const pathToResource = `${activities}/${id}`;
    return await fetchJSON(pathToResource);
}