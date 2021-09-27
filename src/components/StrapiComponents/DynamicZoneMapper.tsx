import ReactMarkdown from "react-markdown"

export const DynamicZoneMapper = (component: any) => {
  console.log(component)
  if (component.component.__component === "common.rich") {
    return <ReactMarkdown>{component.component.rich}</ReactMarkdown>
  } else return null
}
