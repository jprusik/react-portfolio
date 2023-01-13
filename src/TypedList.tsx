import React from 'react';
import {isEmpty} from 'lodash';
import {TypedItem} from './TypedItem';
import './TypedList.scss';
import {HeaderTag} from './HeaderTag';

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

  return (
    <React.Fragment>
      {(headerText && headerLevel) && (
        <HeaderTag
          key={`${listType}-list-header`}
          type={listType}
          level={headerLevel}
        >
          { headerText }
        </HeaderTag>
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
