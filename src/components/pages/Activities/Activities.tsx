import { usePage } from "../../../hooks/usePage";
import { CircularProgress } from "@material-ui/core";
import { ErrorMessage } from "../../ErrorMessage/ErrorMessage";

import commonStyles from "../commonStyles.module.css"
import SearchBar from "../../SearchBar/SearchBar";

export const Activities = (): JSX.Element => {

    const ACTIVITIES_QUERYKEY = "activities-page"

    const { isLoading, error, data } = usePage(ACTIVITIES_QUERYKEY, `/${ACTIVITIES_QUERYKEY}`)

    if (isLoading) return <CircularProgress />

    if (error) return <ErrorMessage />

    return (
        <section className={commonStyles.pageContainer}>
            <div className={commonStyles.pageHeader}>
                <h1>{data.Title}</h1>
                <p>{data.Description}</p>
            </div>

            <SearchBar />

        </section>
    )
}