/**
 *
 */

import * as React from 'react';

class LoginForm extends React.Component {
  public render(): React.ReactNode {
    return (
      <form>
        <div>
          <label>E-mail</label>
          <input type="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
      </form>
    );
  }
}

export { LoginForm };
