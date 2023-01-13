import React from 'react';

type HeaderTagProps = {
  children: React.ReactNode;
  level: number,
  type?: string
};

export function HeaderTag({
  children,
  level,
  type = 'default'
}: HeaderTagProps): JSX.Element | null {
  // Capitalization required for tag replacement
  const HeaderTag =
    (level ? `h${level}` : 'strong') as keyof JSX.IntrinsicElements;

  return (
    <HeaderTag className={`${type}-list-header`}>{ children }</HeaderTag>
  );
}
