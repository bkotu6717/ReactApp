import React from 'react';

class App extends React.Component {
   render() {
   	 var myStyle = {
         fontSize: 100,
         color: 'red'
      }

      return (
         <div>
			<h1> Header !!</h1>
			<h1> Content !! </h1>
			<h1> Footer !! </h1>
			<p data-myattribute="somevalue"> This is p tag inside App Component !! </p>	
			<h1> This is expression {1 + 1 + 1} </h1>
			<p style={myStyle}> this p tag is having style applied</p>
         </div>
      );
   }
}

export default App;