import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SearchBar } from './scenes/Search/components';
import { DefaultSortMode, AscendingSortMode, DescendingSortMode } from './services/Sorting';

const SORT_MODES = [
  new DefaultSortMode(),
  new AscendingSortMode(),
  new DescendingSortMode(),
];

class App extends Component {
  static propTypes = {
    sortModes: PropTypes.arrayOf(DefaultSortMode),
  };

  static defaultProps = {
    sortModes: SORT_MODES,
  };

  state = {
    currSortModeIdx: 0,
  };

  /**
   * Changes the current sort mode by changing the state which
   * refers to the specific sort mode.
   */
  changeSortMode() {
    // Allows for the sort modes to be rotated using a simple
    // algorithm.
    const numberOfSortModes = this.props.sortModes.length;
    const nextIndex = this.state.currSortModeIdx + 1;

    // Cap the nextIndex to avoid array overflow.
    const sortModeIdx = nextIndex % numberOfSortModes;
    this.setState({ currSortModeIdx: sortModeIdx });
  }

  render() {
    const selectedSortModeIdx = this.state.currSortModeIdx;
    const selectedSortMode = this.props.sortModes[selectedSortModeIdx];
    return (
      <div className="App">
        <span>
          <button onClick={() => this.changeSortMode()}>
            {selectedSortMode.name}
          </button>
          <SearchBar sortMode={selectedSortMode} />
        </span>
      </div>
    );
  }
}

export default App;
