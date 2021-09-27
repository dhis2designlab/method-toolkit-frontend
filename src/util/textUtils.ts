export const capitalizeFirstLetter = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export const deCapitalizeFirstLetter = (word: string): string => {
  return word.charAt(0).toLowerCase() + word.slice(1)
}
