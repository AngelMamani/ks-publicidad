export interface ContactInfo {
  readonly Phones: readonly string[]
  readonly Address: string
  readonly WhatsApp: string
}

export interface ContactMessage {
  readonly Name: string
  readonly Phone: string
  readonly Service: string
  readonly Message: string
}
