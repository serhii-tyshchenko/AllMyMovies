/* eslint-disable comma-dangle */
export function formatDate(date) {
  const monthNames = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const day = date.getDate().toString().padStart(2, '0');
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${year}-${monthNames[monthIndex]}-${day}`;
}

export function formatTime(date) {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
}

export function sortByABC(a, b) {
  const nameA = a.toUpperCase();
  const nameB = b.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}

export function sortArrayOfObjects(arr, param, order = 'asc') {
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
