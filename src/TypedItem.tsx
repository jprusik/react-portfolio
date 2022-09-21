import React from 'react';
import {ExternalDomainLink} from './ExternalDomainLink';

type TypedItemProps = {
  item: string;
  itemNumber: number;
  itemType: string;
};

export function TypedItem({
  item,
  itemNumber,
  itemType
}: TypedItemProps): JSX.Element {
  switch (itemType) {
    case 'links':
      return <ExternalDomainLink href={item}>{`link ${itemNumber+1}`}</ExternalDomainLink>;
    case 'samples':
      if (item === 'on-request') {
        return <React.Fragment>available on request</React.Fragment>;
      }

      return <a href={require(`./content/samples/${item}`)}>{`sample ${itemNumber+1}`}</a>;
    default:
      return <React.Fragment>{item}</React.Fragment>;
  }
}
