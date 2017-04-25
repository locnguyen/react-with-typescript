import * as React from 'react';

export class LoginForm extends React.Component<any, any> {
    render() {
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
        )
    };
}

export default LoginForm;
