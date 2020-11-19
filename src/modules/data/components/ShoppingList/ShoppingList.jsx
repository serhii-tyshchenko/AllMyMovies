import PropTypes from 'prop-types';
import { ShoppingListItem } from './ShoppingListItem';
import { ShoppingListForm } from './ShoppingListForm';

import './ShoppingList.scss';

const ShoppingList = (props) => {
  const {
    data, onCompleteClick, onAddClick, STR,
  } = props;

  return (
    <div className="shopping-list">
      <ShoppingListForm onSubmit={onAddClick} STR={STR} />
      <ul className="shopping-list__list">
        {data.map((item) => (
          <ShoppingListItem
            key={item.id}
            data={item}
            onCompleteClick={onCompleteClick}
          />
        ))}
      </ul>
    </div>
  );
};

ShoppingList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onCompleteClick: PropTypes.func.isRequired,
  onAddClick: PropTypes.func.isRequired,
  STR: PropTypes.shape().isRequired,
};

export { ShoppingList };
