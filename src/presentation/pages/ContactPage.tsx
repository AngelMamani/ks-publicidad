import { ContactForm } from '@presentation/components/ui/ContactForm'
import { CtaButton } from '@presentation/components/ui/CtaButton'
import { SectionTitle } from '@presentation/components/ui/SectionTitle'
import { useContact } from '@presentation/hooks/useContact'

export function ContactPage() {
  const { Info, Status, HasError, Submit } = useContact()

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionTitle
            Eyebrow="Contacto"
            Title="Cotiza tu gigantografía"
            Description="Escríbenos con medidas, material y fecha. Te respondemos con una propuesta clara."
          />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container contact-layout">
          <aside className="info-panel">
            <h3>Canales KS</h3>
            {Info ? (
              <>
                <p>{Info.Address}</p>
                <p>{Info.Schedule}</p>
                {Info.Phones.map((Phone) => (
                  <p key={Phone}>
                    <a href={`tel:${Phone.replace(/\s/g, '')}`}>{Phone}</a>
                  </p>
                ))}
                <p>
                  <a href={`mailto:${Info.Email}`}>{Info.Email}</a>
                </p>
                <div className="stack-gap">
                  <CtaButton Href={`https://wa.me/${Info.WhatsApp}`}>
                    WhatsApp
                  </CtaButton>
                </div>
              </>
            ) : null}
          </aside>

          <ContactForm OnSubmit={Submit} Status={Status} HasError={HasError} />
        </div>
      </section>
    </>
  )
}
