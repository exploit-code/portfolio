import PropTypes from "prop-types";

export const navItemType = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export const projectType = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.element).isRequired,
  uuid: PropTypes.string.isRequired,
};

export const technologysType = {
  name: PropTypes.string.isRequired,
  modifier: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
};
