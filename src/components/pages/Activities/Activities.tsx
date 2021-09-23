import React from "react";
import useFetch from "../../../api/useFetch";

export const Activities = (): JSX.Element => {

    const { isLoading: activitiesPageIsLoading, error: activitiesPageError, response: activityPageResponse } = useFetch("/activities-page")

    const { isLoading: acitivitiesIsLoading, error: activitiesError, response: activitiesResponse } = useFetch("/activities")

    return (
        <h1>test</h1>
    )
}