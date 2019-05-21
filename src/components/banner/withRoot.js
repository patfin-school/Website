import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from './getPageContext';

function withRoot(Component) {
  class WithRoot extends React.Component {
    constructor(props) {
      super(props);
      this.muiPageContext = getPageContext();
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      return (
        <JssProvider generateClassName={this.muiPageContext.generateClassName}>
            <Component {...this.props} />
        </JssProvider>
      );
    }
  }

  return WithRoot;
}

export default withRoot;
