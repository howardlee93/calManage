import React from 'react';
import {withRouter} from 'react-router-dom';
import './search.css'

class Search extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			term:''
		}
		this.handleSubmit = this.handleSubmit.bind(this);

	}


	handleSubmit(e){
		e.preventDefault();
		console.log(this.state.term);
		
	}

 	update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }


	render(){
		return(
			<form id="searchForm" onSubmit={(e)=> this.handleSubmit(e)}>
				<h4> Look up a Todo Item</h4>
				  <input
                    className="search-input"
                    type = 'text'
                    placeholder="Date, category, or type"
                    value={this.state.term}
                    onChange = {this.update('term')}
                    />
                 <button type="submit" className="submit-button">Find a todo! </button>

			</form>
			)


	}


}


export default withRouter(Search);


