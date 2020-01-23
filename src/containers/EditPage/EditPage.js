import React from "react";
import loginImg from "../../login.svg";
import {edit} from "../../components/UserFunctions";

export default class EditPage extends React.Component {
    constructor() {
        super();

        this.state = {
            user_id: '',
            name: '',
            email: '',
            password: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            user_id: this.user_id,
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };

        edit(user).then(res => {
            console.log(22);
        })
    }

    render() {
        return (
            <div className='loginRegister'>
                <div className='container'>
                    <form noValidate onSubmit={this.onSubmit}>

                        <div className="base-container">

                            <div className="header">Register</div>
                            <div className="content">
                                <div className="image">
                                    <img src={loginImg}/>
                                </div>
                                <div className="form">
                                    <div className="form-group">
                                        <label htmlFor="name">Username</label>
                                        <input type="text"
                                               name="name"
                                               placeholder="name"
                                               value={this.state.name}
                                               onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="user_id">User_id</label>
                                        <input type="text"
                                               name="user_id"
                                               placeholder="user_id"
                                               value={this.state.user_id}
                                               onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email"
                                               name="email"
                                               placeholder="email"
                                               value={this.state.email}
                                               onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password"
                                               name="password"
                                               placeholder="password"
                                               value={this.state.password}
                                               onChange={this.onChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="register-footer">
                                <button type="submit" className="btn">
                                    Change
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
