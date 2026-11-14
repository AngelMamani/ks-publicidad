interface SectionTitleProps {
  readonly Eyebrow: string
  readonly Title: string
  readonly Description?: string
}

export function SectionTitle({ Eyebrow, Title, Description }: SectionTitleProps) {
  return (
    <div className="section-title">
      <span className="section-title__eyebrow">{Eyebrow}</span>
      <h2>{Title}</h2>
      <div className="claw-divider" />
      {Description ? <p>{Description}</p> : null}
    </div>
  )
}
