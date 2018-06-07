import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FetchUtils from '../../../services/FetchUtils';

class UserRepos extends Component {
  static propTypes = {
    reposUrl: PropTypes.string.isRequired,
  };

  state = {
    repos: [],
    alreadyFetched: false,
  };

  componentDidMount() {
    const url = new URL(this.props.reposUrl);

    const { alreadyFetched } = this.state;
    if (alreadyFetched) {
      // There's no need to fetch again. The state is updated
      // and the results are cached.
      return;
    }

    fetch(url)
      .then((result) => {
        // Fetch is done, this can be stored in the state.
        this.setState({ alreadyFetched: true });
        if (!FetchUtils.isSuccess(result)) {
          throw new Error(`${result.status} is not a successful status code!`);
        }
        return result.json();
      })
      .then(jsonResult => this.setState({ repos: jsonResult }))
      .catch(() => this.setState({ repos: [] }));
  }

  render() {
    const userRepos = this
      .state
      .repos
      .filter(t => !t.private)
      .map(currRepo => (
        <li>
          <a href={currRepo.html_url}>{ currRepo.name }</a>
        </li>
      ));

    return (
      <div>
        { userRepos.length !== 0 &&
          <ul>{ userRepos }</ul>
        }
      </div>
    );
  }
}

export default UserRepos;
