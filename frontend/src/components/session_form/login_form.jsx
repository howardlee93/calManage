import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			email: '',
      		password: '',
      		errors: {}
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
	}

	shouldComponentUpdate(nextProps){
		if(nextProps.signedIn){
			this.props.history.push('/todos');
		};
		this.setState({errors: nextProps.errors});
	}

	handleSubmit(e){
		e.preventDefault();
		
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
	              <input type="password"
	                value={this.state.password}
	                onChange={this.update('password')}
	                placeholder="Password"
	              />
	            <br/>
	            <input type="submit" value="Submit" />
	            {this.renderErrors()}
	            </form>
			</div>
		)
	}

}

export default withRouter(LoginForm);
