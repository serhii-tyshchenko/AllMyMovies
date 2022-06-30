/* eslint-disable object-curly-newline */
import sortArrayOfObjects from './index';

describe('sortArrayOfObjects function', () => {
  const unsortedArray = [
    { year: '2012' },
    { year: '1932' },
    { year: '2021' },
    { year: '2021' },
  ];
  const arraySortedASC = [
    { year: '1932' },
    { year: '2012' },
    { year: '2021' },
    { year: '2021' },
  ];
  const arraySortedDSC = [
    { year: '2021' },
    { year: '2021' },
    { year: '2012' },
    { year: '1932' },
  ];
  test('should return array sorted ascendingly', () => {
    const sortingResult = sortArrayOfObjects(unsortedArray, 'year', 'asc');
    sortingResult.forEach((item, index) => {
      expect(item).toEqual(arraySortedASC[index]);
    });
  });
  test('should return array sorted ascendingly by default', () => {
    const sortingResult = sortArrayOfObjects(unsortedArray, 'year');
    sortingResult.forEach((item, index) => {
      expect(item).toEqual(arraySortedASC[index]);
    });
  });
  test('should return array sorted descendingly', () => {
    const sortingResult = sortArrayOfObjects(unsortedArray, 'year', 'dsc');
    sortingResult.forEach((item, index) => {
      expect(item).toEqual(arraySortedDSC[index]);
    });
  });
});
