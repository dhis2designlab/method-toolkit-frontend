import { StrapiImage } from "./StrapiImage"

export const Image = (image: any) => {
  return (
    <div style={{ textAlign: "center" }}>
      <StrapiImage image={image.image} width={400} />
      <p>{image.caption}</p>
    </div>
  )
}
