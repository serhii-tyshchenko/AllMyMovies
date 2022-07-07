/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { Component } from 'react';

import './ErrorBoundary.scss';

const NAME_SPACE = 'error-boundary';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { errorInfo, error } = this.state;
    if (errorInfo) {
      return (
        <div className={NAME_SPACE}>
          <h2 className={`${NAME_SPACE}__title`}>
            Sorry. Something went wrong :(
          </h2>
          <div className={`${NAME_SPACE}__details`}>
            <p>
              {error && <strong>{error.toString()}</strong>}
              <br />
              {errorInfo.componentStack}
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export { ErrorBoundary };
