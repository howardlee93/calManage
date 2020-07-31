import React from 'react';


class FitForm extends React.Component{
    constructor(props){
        super(props);

    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text">Workout title</input>
                    <input type="date"> workout date</input>
                    <input type="number">workout length</input>
                    <input type="number"> calories burned</input>
                    <input type="textarea"
                        value={this.state.text}
                        onChange={this.update()}
                        placeholder="workout details"
                    />
                    <input type="submit" value="Submit" />
                </div>
            </form>


            
        )
    }

};


export default FitForm;
