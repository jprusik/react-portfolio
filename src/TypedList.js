import React from 'react';
import { isEmpty } from 'lodash';
import { arrayOf, string, number } from 'prop-types';
import TypedItem from './TypedItem';
import './TypedList.scss';

export default function TypedList(props) {
  const { headerText, headerLevel, listItems, listType } = props;

  if (isEmpty(listItems)) {
    return null;
  }

  // Capitalization required for tag replacement
  const HeaderTag = headerLevel ? `h${headerLevel}` : 'strong';
  const typedListHeader = headerText && <HeaderTag key={`${listType}-list-header`} className={`${listType}-list-header`}>{ headerText }</HeaderTag>;
  const formattedListItems = listItems.map((item, index) => (
    <li key={item} className="typed-list-item">
      <TypedItem item={item} itemNumber={index} itemType={listType} />
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
