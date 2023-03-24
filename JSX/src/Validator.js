import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';


class Validator extends Component {
    // State is being initialized in a slightly different wasy as shwon
    // 

    constructor(props) {
        super(props);
        this.state = { password: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({password:e.target.value});
      }

    render() {
        return (
     <Grid textAlign='center' style={{ height:'80vh' }}    verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 550 }}>
            <div className= "ui segment">
                <form className="ui large form"  >
                    <div className="field">
                        <label>Enter Password</label>
                         <input autoComplete="off" type="password" 
						 onChange={this.handleChange} name="password" 
						 placeholder="Password"
                         />
                    </div>
                    {this.state.password.length < 4 ? 'Password must be at least 4 characters' : ''}
                </form>
            </div>
            </Grid.Column>
         </Grid>
        );
    }
}
export default Validator;