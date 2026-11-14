export interface ContactInfo {
  readonly Phones: readonly string[]
  readonly Email: string
  readonly Address: string
  readonly WhatsApp: string
  readonly Schedule: string
}

export interface ContactMessage {
  readonly Name: string
  readonly Email: string
  readonly Phone: string
  readonly Service: string
  readonly Message: string
}
