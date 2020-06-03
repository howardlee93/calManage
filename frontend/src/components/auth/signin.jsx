import React from 'react';

class SignIn extends React.component{

	constructor(props){
		super(props);
		this.state = {
      		email: '',
      		password: '',
      		errors: {}
    	};
		
	}

	componentDidMount(){
		
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
	    };
    	this.props.login(user); 
  	}

	handleChange(){

	}

	render(){
		return(
				<div>
					<form onSubmit={this.handleSubmit}>
         			 <div>
            		
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
          			
          			</div>
        			</form>
				</div>

			)
	}


}

export default SignIn;
