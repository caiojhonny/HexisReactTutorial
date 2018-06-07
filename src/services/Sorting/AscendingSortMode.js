import DefaultSortMode from './DefaultSortMode';

class AscendingSortMode extends DefaultSortMode {
  /**
   * Creates an AscendingSortMode instance.
   */
  constructor() {
    super(AscendingSortMode.compare, 'Ascending');
  }

  /**
   * Given two properties gives an integer indicating if the
   * PropA is "more" than PropB according to the specific criteria.
   * @param {*} propA The left property to compare.
   * @param {*} propB The right property to compare.
   * @returns {Number} The integer which will be used to compare
   * both properties.
   */
  static compare(propA, propB) {
    return propA < propB ? -1 : 1;
  }
}

export default AscendingSortMode;
