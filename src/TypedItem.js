import React from 'react';
import { string, number } from 'prop-types';
import ExternalDomainLink from './ExternalDomainLink';

export default function TypedItem(props) {
  const { item, itemNumber, itemType } = props;

  switch (itemType) {
    case 'links':
      return <ExternalDomainLink href={item}>{`link ${itemNumber+1}`}</ExternalDomainLink>;
    case 'samples':
      if (item === 'on-request') {
        return 'available on request';
      }

      return <a href={require(`./content/samples/${item}`)}>{`sample ${itemNumber+1}`}</a>;
    default:
      return item;
  }
}

TypedItem.propTypes = {
  item: string.isRequired,
  itemNumber: number.isRequired,
  itemType: string.isRequired
};
