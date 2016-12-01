import React from 'react';

class App extends React.Component {
   render() {
   	 var myStyle = {
         fontSize: 100,
         color: 'red'
      }

      return (
      	<div>
	      	<Header/>
	      	<Content/>
	      	<Footer/>
	    </div>
      );
   }
}

class Header extends React.Component {
	render(){
		return(
			<h1> This is Header Content </h1>
		);
	};
}

class Content extends React.Component {
	render(){
		return(
			<h1> This is body Content </h1>
		)
	}
}

class Footer extends React.Component {
	render(){
		return(
			<h1> This is Footer content </h1>
		)
	}
}

export default App;