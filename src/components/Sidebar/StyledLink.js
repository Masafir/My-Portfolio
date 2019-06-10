/**
 * npm import
 */
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import theme from 'src/theme';

const hover = {
  background: theme.colors.hoverColor,
};

const active = {
  ...hover,
  boxShadow: `inset 0 0 8px ${theme.colors.shadow}`,
};

const firstChild = {
  borderTopLeftRadius: theme.radius,
  borderTopRightRadius: theme.radius,
};

const lastChild = {
  borderBottomLeftRadius: theme.radius,
  borderBottomRightRadius: theme.radius,
};

const style = {
  background: theme.colors.bg,
  color: theme.colors.main,
  display: 'block',
  margin: '0 1em',
  padding: '1em',
  ':first-of-type': firstChild,
  ':last-child': lastChild,
  ':hover': hover,
  ':active': active,
};

const StyledLink = styled(NavLink)(style);

export default StyledLink;
