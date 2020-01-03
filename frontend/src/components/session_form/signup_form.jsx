import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class SignupForm extends Component{
	constructor(props){
		super(props);
		this.state ={
			email: '',
	      	handle: '',
	      	password: '',
	    	password2: '',
	    	errors: {}
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
		
	}
	
	
	shouldComponentUpdate(nextProps){
		if(nextProps.signedIn){
			this.props.history.push('/login');
		};
		this.setState({errors: nextProps.errors});
	}

	handleSubmit(e){
		e.preventDefault();
		let user = {
			email: this.state.email,
	      	handle: this.state.handle,
	      	password: this.state.password,
	    	password2: this.state.password2
		}
		this.props.signup(user, this.props.history);

	}

	update(field){
		return e => this.setState({
			[field] : e.currentTarget.value
		});
	}

	renderErrors(){
		return(
			<ul>
				{Object.keys(this.state.errors).map((error, index)=>(
					<li key={`error-${index}`}>
					{this.state.errors[error]}
					</li>
				))}
			</ul>
			);
	}

	render(){
		return(
			<div>
			<form onSubmit={this.handleSubmit}>
			<br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input type="text"
                value={this.state.handle}
                onChange={this.update('handle')}
                placeholder="Handle"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
            <br/>
            <input type="submit" value="Submit" />
            {this.renderErrors()}
            </form>
			</div>
		)
	}

};

export default withRouter(SignupForm);
