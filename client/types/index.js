import PropTypes from 'prop-types';

export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER'
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_IN_PROGRESS = 'REQUEST_IN_PROGRESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';

export const defaultNetworkState = {
  inProgress: false,
  status: '',
  message: '',
}

export const defaultUserState = {
  user: {},
  isAuth: true,
}

export const locationType = PropTypes.shape({
  pathname: PropTypes.string,
  search: PropTypes.string,
  state: PropTypes.any,
  hash: PropTypes.string,
  key: PropTypes.string,
})

export const matchType = PropTypes.shape({
  isExact: PropTypes.bool,
  params: PropTypes.any,
  path: PropTypes.string,
  url: PropTypes.string,
})

export const historyType = PropTypes.shape({
  action: PropTypes.string,
  block: PropTypes.func,
  createHref: PropTypes.func,
  go: PropTypes.func,
  goBack: PropTypes.func,
  goForward: PropTypes.func,
  length: PropTypes.number,
  listen: PropTypes.func,
  location: PropTypes.string,
  push: PropTypes.func,
  replace: PropTypes.func,
})
