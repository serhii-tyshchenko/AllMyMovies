/* eslint-disable object-curly-newline */
import { sortByABC, formatDate, formatTime, sortArrayOfObjects } from './index';

describe('sortByABC function', () => {
  test('should return -1 if a < b', () => {
    expect(sortByABC('clean', 'dry')).toBe(-1);
  });
  test('should return 1 if a > b', () => {
    expect(sortByABC('dry', 'clean')).toBe(1);
  });
  test('should return 0 if a = b', () => {
    expect(sortByABC('clean', 'clean')).toBe(0);
  });
});

describe('formatDate function', () => {
  test('should return current date in format 2021-03-02', () => {
    expect(formatDate(new Date())).toMatch(/\d{4}-\d{2}-\d{2}/);
  });
});

describe('formatTime function', () => {
  test('should return current time in format 23:22', () => {
    expect(formatTime(new Date())).toMatch(/\d{2}:\d{2}/);
  });
});

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
