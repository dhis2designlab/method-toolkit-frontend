import { getStrapiUrl } from "../../api/getStrapiUrl"

interface StrapiImageInterface {
  image: any
  width: number
}

export const StrapiImage = ({ image, width }: StrapiImageInterface): JSX.Element => {
  const strapiUrl = getStrapiUrl()
  console.log(image.image)
  return (
    <img
      src={`${strapiUrl}${image.url}`}
      alt={image.alternativeText}
      style={{
        width: width,
        height: "auto",
      }}
    ></img>
  )
}
