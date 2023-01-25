type ExternalDomainLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ExternalDomainLink ({
  href,
  className,
  children
}: ExternalDomainLinkProps): JSX.Element {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
