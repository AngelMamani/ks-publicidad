import { SectionTitle } from '@presentation/components/ui/SectionTitle'
import { useContact } from '@presentation/hooks/useContact'

export function ContactPage() {
  const { Info } = useContact()

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionTitle Eyebrow="Contacto" Title="Contáctanos" />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="contact-simple">
            <h3>Contactos</h3>
            {Info ? (
              <>
                <p className="contact-simple__address">{Info.Address}</p>
                <ul className="contact-simple__phones">
                  {Info.Phones.map((Phone) => (
                    <li key={Phone}>
                      <a href={`tel:${Phone.replace(/\s/g, '')}`}>{Phone}</a>
                    </li>
                  ))}
                </ul>
                <a
                  className="cta-button cta-button--primary"
                  href={`https://wa.me/${Info.WhatsApp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </>
            ) : null}
          </div>
        </div>
      </section>
    </>
  )
}
