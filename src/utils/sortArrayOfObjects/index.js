function sortArrayOfObjects(arr, param, order = 'asc') {
  return [
    ...arr.sort((a, b) => {
      const itemA = a[param].toUpperCase();
      const itemB = b[param].toUpperCase();
      if (itemA < itemB) {
        return order === 'asc' ? -1 : 1;
      }
      if (itemA > itemB) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    }),
  ];
}

export default sortArrayOfObjects;
