import styles from "./button.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";

export const Button = ({ text, modifier }) => {
  return (
    <button className={cn(styles.button, styles[`button_${modifier}`])} tabIndex={-1}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  modifier: PropTypes.string.isRequired,
};
