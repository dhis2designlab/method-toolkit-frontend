import { getStrapiUrl } from "../../api/getStrapiUrl"

interface StrapiImageInterface {
  image: any
  width: number
}

export const StrapiImage = ({
  image,
  width,
}: StrapiImageInterface): JSX.Element => {
  const strapiUrl = getStrapiUrl()
  return (
    <img
      src={`${strapiUrl}${image.url}`}
      alt={image.alternativeText}
      style={{
        maxWidth: width,
        width: "100%",
        height: "auto",
      }}
    ></img>
  )
}
