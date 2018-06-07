/**
 * A template class that allows for other classes to extend it in order
 * to create different ordering criterium.
 */
class DefaultSortMode {
  /**
   * Creates a SortMode instance.
   * @param {Function} compareFunc The function that allows for two values
   * to be compared. Must return a number.
   * @param {String} sortModeName The sorting module's name.
   */
  constructor(compareFunc = () => 0, sortModeName = 'No Sorting') {
    this.compareFunc = compareFunc;
    this.sortModeName = sortModeName;
  }

  /**
   * Orders an array according to the specific concrete criteria
   * using the specific property as specified in the function.
   * Doesn't order the original array, returns instead a new array
   * ordered.
   * @param {Array} array The array to order.
   * @param {Function} orderingPropertyFunc The property to order by
   * the specific criteria.
   * @returns {Array} The ordered array.
   */
  orderBy(array, orderingPropertyFunc) {
    // Clones the array
    const copiedArray = array.slice();
    copiedArray.sort((a, b) => {
      const propA = orderingPropertyFunc(a);
      const propB = orderingPropertyFunc(b);

      return this.compare(propA, propB);
    });

    // Returns a copied array as a fluent api.
    return copiedArray;
  }

  /**
   * Given two properties gives an integer indicating if the
   * PropA is "more" than PropB according to the specific criteria.
   * @param {*} propA The left property to compare.
   * @param {*} propB The right property to compare.
   * @returns {Number} The integer which will be used to compare
   * both properties.
   */
  compare(propA, propB) {
    return this.compareFunc(propA, propB);
  }

  /**
   * Gets the name for the specific sort mode.
   * @returns Returns the sorting criterium name.
   */
  get name() {
    return this.sortModeName;
  }
}

export default DefaultSortMode;
