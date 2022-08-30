import { SCButton } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ text, onClick }) => (
  <SCButton type="button" onClick={onClick}>
    {text}
  </SCButton>
);

Button.propType = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
