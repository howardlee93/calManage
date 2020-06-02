// signup.jsx


import React from 'react';


class SignUp extends React.component{
	constructor(props){
		super(props);

		this.state={
      		email: '',
      		password: '',
      		password2: '',
      		errors: {}
    	};
    	this.handleSubmit = this.handleSubmit.bind(this);
    	
	}

	update(field){
		return e => this.setState({
      		[field]: e.currentTarget.value
    	});

	}


  	handleSubmit(e) {
	    e.preventDefault();
	    let user = {
	      email: this.state.email,
	      handle: this.state.handle,
	      password: this.state.password,
	      password2: this.state.password2
	    };
    	this.props.signup(user, this.props.history); 
  	}





	render(){
		return(
			<div>
				<form>
				</form>
			</div>
			)
	}


}


export default SignUp;
