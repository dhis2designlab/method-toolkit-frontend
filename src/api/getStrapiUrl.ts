export const getStrapiUrl = () => {
  if (process.env.NODE_ENV === "production") return process.env.STRAPI_URL
  else return "http://localhost:1337"
}
