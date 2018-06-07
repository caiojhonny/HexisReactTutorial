import DefaultSortMode from './DefaultSortMode';

class DescendingSortMode extends DefaultSortMode {
  /**
   * Creates a DescendingSortMode instance.
   */
  constructor() {
    super(DescendingSortMode.compare, 'Descending');
  }

  static compare(propA, propB) {
    return propA >= propB ? -1 : 1;
  }
}

export default DescendingSortMode;
