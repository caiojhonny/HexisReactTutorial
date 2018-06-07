import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ResultList } from './';
import { DefaultSortMode } from '../../../services/Sorting';
import './SearchBar.less';

const minimumNumberOfCharactersPerQuery = 4;

class SearchBar extends Component {
  static propTypes = {
    sortMode: PropTypes.instanceOf(DefaultSortMode).isRequired,
  };

  state = {
    inputValue: '',
  };

  onKeyUp = (event) => {
    const enterKey = 13;
    if (event.which !== enterKey) {
      return;
    }

    const currQuery = this.state.inputValue;
    this.setState({ query: currQuery });
  }

  setInput =(event) => {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <div>
        <p>
          Input user name:
        </p>
        <input
          type="text"
          className="aquamarineColored"
          onKeyUp={this.onKeyUp}
          onChange={this.setInput}
        />
        {
          this.state.query &&
          this.state.query.length >= minimumNumberOfCharactersPerQuery &&
          <ResultList
            key={this.state.query}
            query={this.state.query}
            sortMode={this.props.sortMode}
          />
        }
      </div>
    );
  }
}

export default SearchBar;
