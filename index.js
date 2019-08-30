import React from 'react';
import { render } from 'react-dom';


function FancyBorder(props)
{
  return (<div>{props.children}</div>);
}

function Welcome(props)
{
  return(
  <FancyBorder>
     <h3>{props.title}</h3>
     <p>{props.message}</p>
     {props.children}
  </FancyBorder>
  );
}

class SignupDialog extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={login:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e)
  {
    this.setState({login: e.target.value});
  }
  handleClick()
  {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
 render()
 {
   return(
       <Welcome title = "Mars program" message = "welcome aboard">
       <input type="text" onChange={this.handleChange}/>
       <button type="button" onClick={this.handleClick}>sign me up</button>
       </Welcome>
   );
 }
}
render(<SignupDialog/>,document.getElementById('root'));