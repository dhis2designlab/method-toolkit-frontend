import { useQuery } from "react-query";

const ACTIVITIES = "activities"

export const useActivities = () => {
    return useQuery(ACTIVITIES, async () => 
    await fetch(`${process.env.REACT_APP_STRAPI_URL}/${ACTIVITIES}`)
    .then(res => res.json()
    ))
}