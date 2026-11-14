import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface CtaButtonProps {
  readonly To?: string
  readonly Href?: string
  readonly Variant?: 'primary' | 'ghost'
  readonly children: ReactNode
  readonly Type?: 'button' | 'submit'
  readonly OnClick?: () => void
}

export function CtaButton({
  To,
  Href,
  Variant = 'primary',
  children,
  Type = 'button',
  OnClick,
}: CtaButtonProps) {
  const ClassName = `cta-button cta-button--${Variant}`

  if (To) {
    return (
      <Link className={ClassName} to={To}>
        {children}
      </Link>
    )
  }

  if (Href) {
    return (
      <a className={ClassName} href={Href} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button className={ClassName} type={Type} onClick={OnClick}>
      {children}
    </button>
  )
}
