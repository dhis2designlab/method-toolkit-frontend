import { technique, activity, resourceFilters } from "../components/interfaces"
import { isActivity, isTechnique } from "./typeCheckingUtils"

export const filterText = (
  search: string,
  title: string,
  intro: string
): boolean => {
  return (
    title.toLowerCase().includes(search.toLowerCase()) ||
    intro.toLowerCase().includes(search.toLowerCase())
  )
}

export const filterResources = (
  item: activity | technique,
  filters: resourceFilters
): boolean => {
  if (filters.showActivities && isActivity(item)) return true
  if (filters.showTechniques && isTechnique(item)) return true
  return false
}
