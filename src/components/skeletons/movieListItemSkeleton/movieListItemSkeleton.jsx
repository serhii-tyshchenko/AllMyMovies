const NAME_SPACE = 'movie-list-item-skeleton';

function MovieListItemSkeleton() {
  return (
    <li className={NAME_SPACE}>
      <div
        className={`${NAME_SPACE}__poster skeleton`}
      />
      <div className={`${NAME_SPACE}__details`}>
        <span className={`${NAME_SPACE}__title skeleton`} />
        <span className={`${NAME_SPACE}__year skeleton`} />
      </div>
    </li>
  )
}

export { MovieListItemSkeleton };
