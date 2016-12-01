import React from 'react';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			data: [

				{'id': 1,
				 'name': 'Bhaskar',
				 'age': 27
				},
				{'id': 2,
				 'name': 'Pavan',
				 'age': 23
				},
				{'id': 3,
				 'name': 'Jaggu',
				 'age': 23
				}
			]
		}
	}
   	render() {
      return (
      	<div>
	      	<Header/>
	      	<table>
	      		<tbody>
	      			{this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
	      		</tbody>
	      	</table>
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

class TableRow extends React.Component {
	render(){
		return(
		<tr>
			<td> {this.props.data.id}</td>
			<td> {this.props.data.name}</td>
			<td>{this.props.data.age}</td>
		</tr>
		)
	}
}


export default App;