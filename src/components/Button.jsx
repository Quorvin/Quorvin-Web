import { Link } from 'react-router-dom'

/**
 * to="/contact"       internal link
 * href="https://..."  external link (opens in a new tab)
 * href="mailto:..."   normal link
 * neither             real <button> (pass type="submit" in forms)
 */
export default function Button({ children, to, href, variant = 'primary', className = '', ...rest }) {
  const cls = `btn btn-${variant} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    const external = /^https?:/.test(href)
    const extra = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
    return (
      <a href={href} className={cls} {...extra} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  )
}
