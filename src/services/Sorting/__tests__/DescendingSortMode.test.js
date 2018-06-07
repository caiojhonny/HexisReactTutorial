import { DescendingSortMode } from '../';

/**
 * Utils test class that represents an immutable entity with
 * two read-only properties.
 */
class Example {
  constructor(number, text) {
    this.readonlyNumber = number;
    this.readonlyText = text;
  }

  get number() {
    return this.readonlyNumber;
  }

  get text() {
    return this.readonlyText;
  }
}

it('When calling orderBy with number will order elements from highest to lowest based on their number', () => {
  // Arrange
  const array = [
    new Example(3, 'A'),
    new Example(1, 'B'),
    new Example(2, 'C'),
  ];
  const ascendingSort = new DescendingSortMode();

  // Act
  const resultArray = ascendingSort
    .orderBy(array, t => t.number);

  // Assert
  expect(resultArray[0].number).toBe(3);
  expect(resultArray[0].text).toBe('A');

  expect(resultArray[1].number).toBe(2);
  expect(resultArray[1].text).toBe('C');

  expect(resultArray[2].number).toBe(1);
  expect(resultArray[2].text).toBe('B');
});

it('When calling orderBy with text will order elements from highest to lowest based on their text', () => {
  // Arrange
  const array = [
    new Example(1, 'A'),
    new Example(2, 'C'),
    new Example(3, 'B'),
  ];
  const ascendingSort = new DescendingSortMode();

  // Act
  const resultArray = ascendingSort
    .orderBy(array, t => t.text);

  // Assert
  expect(resultArray[0].number).toBe(2);
  expect(resultArray[0].text).toBe('C');

  expect(resultArray[1].number).toBe(3);
  expect(resultArray[1].text).toBe('B');

  expect(resultArray[2].number).toBe(1);
  expect(resultArray[2].text).toBe('A');
});

it('When calling orderBy with text will order elements from highest to lowest based on their text, it does not ignore case.', () => {
  // Arrange
  const array = [
    new Example(1, 'a'),
    new Example(2, 'A'),
    new Example(3, 'b'),
    new Example(4, 'C'),
    new Example(5, 'B'),
  ];
  const descendingSort = new DescendingSortMode();

  // Act
  const resultArray = descendingSort
    .orderBy(array, t => t.text);

  // Assert
  expect(resultArray[0].number).toBe(3);
  expect(resultArray[0].text).toBe('b');

  expect(resultArray[1].number).toBe(1);
  expect(resultArray[1].text).toBe('a');

  expect(resultArray[2].number).toBe(4);
  expect(resultArray[2].text).toBe('C');

  expect(resultArray[3].number).toBe(5);
  expect(resultArray[3].text).toBe('B');

  expect(resultArray[4].number).toBe(2);
  expect(resultArray[4].text).toBe('A');
});
