import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { UserRepos } from './';

class UserRow extends Component {
  static propTypes = {
    reposUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  };

  state = {
    collapsed: true,
  }

  getTitle() {
    const symbol = this.state.collapsed ? '+' : '-';
    return `${this.props.id} [${symbol}]`;
  }

  toggleCollapsed = () => this.setState({ collapsed: !this.state.collapsed });

  render() {
    return (
      <li>
        <button onClick={this.toggleCollapsed}>
          { this.getTitle() }
        </button>
        { !this.state.collapsed && <UserRepos reposUrl={this.props.reposUrl} /> }
      </li>
    );
  }
}

export default UserRow;
