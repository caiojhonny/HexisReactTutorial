import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FetchUtils from '../../../services/FetchUtils';
import { UserRow } from './';
import { DefaultSortMode } from '../../../services/Sorting';

class ResultList extends Component {
  static propTypes = {
    sortMode: PropTypes.instanceOf(DefaultSortMode).isRequired,
    query: PropTypes.string.isRequired,
  };

  state = {
    content: [],
    sortMode: this.props.sortMode,
    query: this.props.query,
  };

  componentDidMount() {
    const apiUrl = `${process.env.REACT_APP_API_URL}/search/users`;
    const url = new URL(apiUrl);
    const queryParameters = {
      q: this.state.query,
    };
    Object
      .keys(queryParameters)
      .forEach(key => url.searchParams.append(key, queryParameters[key]));

    fetch(url)
      .then((result) => {
        if (!FetchUtils.isSuccess(result)) {
          throw new Error(`${result.status} is not a successful status code!`);
        }
        return result.json();
      })
      .then(jsonResult => this.setState({ content: jsonResult.items }))
      .catch(() => this.setState({ content: [] }));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps === this.props) {
      return;
    }

    this.setState({
      sortMode: nextProps.sortMode,
      query: nextProps.query,
    });
  }

  render() {
    // Sort according to the current sorting strategy.
    const arrayOfRows = this.state.content;
    const userRows = this
      .state
      .sortMode
      .orderBy(arrayOfRows, row => row.login.toLowerCase())
      .map(currUser => (<UserRow
        key={currUser.id}
        url={currUser.url}
        image={currUser.avatar_url}
        id={currUser.login}
        reposUrl={currUser.repos_url}
      />));

    return (
      <div>
        { this.state.content.length !== 0 &&
          <p>
            Click the names to view the repositories.
          </p>
        }
        { this.state.content.length !== 0 &&
          <ul>
            { userRows }
          </ul>
        }
      </div>
    );
  }
}

export default ResultList;
