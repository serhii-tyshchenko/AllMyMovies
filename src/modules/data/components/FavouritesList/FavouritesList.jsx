import PropTypes from 'prop-types';
import { FavouritesListItem } from './FavouritesListItem';

import './FavouritesList.scss';

const FavouritesList = (props) => {
  const {
    data, onRemoveClick, onAddClick, onBlur,
  } = props;

  return (
    <ul className="favourites-list">
      {data.map((item) => (
        <FavouritesListItem
          key={item.id}
          data={item}
          onRemoveClick={onRemoveClick}
          onAddClick={onAddClick}
          onBlur={onBlur}
        />
      ))}
    </ul>
  );
};

FavouritesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onAddClick: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export { FavouritesList };
