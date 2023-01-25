import { Fragment } from 'react';
import { TypedItem } from './TypedItem';
import './TypedList.scss';
import { HeaderTag } from './HeaderTag';

type TypedListProps = {
  headerText?: string,
  headerLevel?: number,
  listItems: string[],
  listType: string
};

export function TypedList ({
  headerText,
  headerLevel,
  listItems,
  listType
}: TypedListProps): JSX.Element {
  return (
    <Fragment>
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
    </Fragment>
  );
}
