import { SCheader, SCform, SCinput, SCbutton } from './Searchbar.styled';
import { BiSearchAlt2 } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { Component } from 'react';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = e => {
    this.setState({ search: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
  };

  render() {
    return (
      <SCheader>
        <SCform onSubmit={this.handleSubmit}>
          <SCbutton type="submit">
            <BiSearchAlt2 size="30" />
          </SCbutton>
          <SCinput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.search}
          />
        </SCform>
      </SCheader>
    );
  }
}

export default Searchbar;

Searchbar.propType = {
  search: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
