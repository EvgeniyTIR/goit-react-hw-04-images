import { SCheader, SCform, SCinput, SCbutton } from './Searchbar.styled';
import { BiSearchAlt2 } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Searchbar({ onSubmit }) {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(search);
  };

  return (
    <SCheader>
      <SCform onSubmit={handleSubmit}>
        <SCbutton type="submit">
          <BiSearchAlt2 size="30" />
        </SCbutton>
        <SCinput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={search}
        />
      </SCform>
    </SCheader>
  );
}

export default Searchbar;

Searchbar.propType = {
  search: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
