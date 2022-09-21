import React from 'react';
import {isEmpty} from 'lodash';
import {TypedItem} from './TypedItem';
import './TypedList.scss';

type TypedListProps = {
  headerText?: string,
  headerLevel?: number,
  listItems: string[],
  listType: string
};

export default function TypedList({
  headerText,
  headerLevel,
  listItems,
  listType
}: TypedListProps): JSX.Element | null {
  if (isEmpty(listItems)) {
    return null;
  }

  // Capitalization required for tag replacement
  const HeaderTag =
    (headerLevel ? `h${headerLevel}` : 'strong') as keyof JSX.IntrinsicElements;

  return (
    <React.Fragment>
      {headerText && (
        <HeaderTag key={`${listType}-list-header`} className={`${listType}-list-header`}>{ headerText }</HeaderTag>
      )}
      <ul key={`${listType}-list`} className={`${listType}-list`}>
        {listItems.map((item, index) => (
          <li key={item} className="typed-list-item">
            <TypedItem item={item} itemNumber={index} itemType={listType} />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}
