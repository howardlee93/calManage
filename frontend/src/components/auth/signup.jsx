// signup.jsx


import React from 'react';


class SignUp extends React.component{
	constructor(props){
		super(props);

		this.state={
      		email: '',
      		password: '',
      		password2: '',
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
	      password: this.state.password,
	      password2: this.state.password2
	    };
    	this.props.signup(user, this.props.history); 
  	}





	render(){
		return(
			 <div className="login-form-container">
        		<form onSubmit={this.handleSubmit}>
          		<div className="login-form">
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
          		</div>
        		</form>
			</div>
			)
	}


}


export default SignUp;
