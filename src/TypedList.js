import React from 'react';
import { isEmpty } from 'lodash';
import { arrayOf, string, number } from 'prop-types';
import ExternalDomainLink from './ExternalDomainLink';

export default function TypedList(props) {
  const { headerText, headerLevel, listItems, listType } = props;

  if (isEmpty(listItems)) {
    return null;
  }

  // Capitalization required for tag replacement
  const HeaderTag = headerLevel ? `h${headerLevel}` : 'strong';
  const typedListHeader = headerText && <HeaderTag key={`${listType}-list-header`} className={`${listType}-list-header`}>{ headerText }</HeaderTag>;
  const formattedListItems = listItems.map((item, index) => (
    <li key={item}>
      { ['links', 'samples'].indexOf(listType) > -1 ?
        <ExternalDomainLink href={item}>{ `${listType} ${index+1}` }</ExternalDomainLink>
        : item
      }
    </li>
  ));

  const typedList = (
    <ul key={`${listType}-list`} className={`${listType}-list`}>
      { formattedListItems }
    </ul>
  );

  return [ typedListHeader, typedList ];
}

TypedList.propTypes = {
  headerLevel: number,
  headerText: string,
  listItems: arrayOf(string),
  listType: string.isRequired,
};
