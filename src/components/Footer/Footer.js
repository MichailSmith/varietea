/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Footer.css';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withViewport
@withStyles(styles)
class Footer {

  render() {
    return (
      <div className="Footer">
        <div className="Footer-container">
          <span className="Footer-text">© Michail Smith</span>
          <span className="Footer-spacer">·</span>
          <a className="Footer-link" href="/" onClick={Link.handleClick}>Home</a>
          <span className="Footer-spacer">·</span>
          <span className="Footer-text">Icons made by <a className="Footer-link" href="http://www.freepik.com" title="Freepik">Freepik</a> from <a className="Footer-link" href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a>             is licensed by <a className="Footer-link" href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a></span>
        </div>
      </div>
    );
  }

}

export default Footer;
