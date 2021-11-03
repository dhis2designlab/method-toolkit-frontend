import MailOutlineIcon from "@material-ui/icons/MailOutline"

interface ContactProps {
  name: string
  occupation: string
  email: string
}

export const Contact = ({
  name,
  occupation,
  email,
}: ContactProps): JSX.Element => {
  return (
    <article>
      <div style={{ margin: "16px 0 16px 0" }}>
        <p style={{ margin: "0" }}>{name}</p>
        <p style={{ margin: "8px 0 0 0", fontWeight: 300 }}>{occupation}</p>
      </div>
      <span style={{ display: "flex" }}>
        <MailOutlineIcon style={{ margin: "0 16px 0 0", color: "#4A5768" }} />
        <a href={`mailto:${email}`} style={{ color: "#0080D4" }}>
          Email
        </a>
      </span>
    </article>
  )
}
