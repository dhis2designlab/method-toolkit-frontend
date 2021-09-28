import ReactMarkdown from "react-markdown"
import { Image } from "./Image"

export const DynamicZoneMapper = (component: any) => {
  if (component.component.__component === "common.rich") {
    return <ReactMarkdown>{component.component.rich}</ReactMarkdown>
  }
  if (component.component.__component === "common.image") {
    return (
      <Image
        image={component.component.image}
        caption={component.component.caption}
      />
    )
  } else return null
}
