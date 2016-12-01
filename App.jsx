import React from 'react';
import ReactDOM from 'react-dom';

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
	      	<PropValidations/>
	      	<table>
	      		<tbody>
	      			{this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
	      		</tbody>
	      	</table>
	      	<StatefullComponent/>
	      	<StateHandler/>
	      	<ForceUpdateHandler/>
	      	<FindDomNode/>
	      	<Lifecycle/>
	    </div>
      );
   	}
}

class PropValidations extends React.Component{
 	render() {
      return (
         <div>
            <h3>Array: {this.props.propArray}</h3>
            <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
            <h3>Func: {this.props.propFunc(3)}</h3>
            <h3>Number: {this.props.propNumber}</h3>
            <h3>String: {this.props.propString}</h3>
            <h3>Object: {this.props.propObject.objectName1}</h3>
            <h3>Object: {this.props.propObject.objectName2}</h3>
            <h3>Object: {this.props.propObject.objectName3}</h3>
         </div>
      );
   }
}

PropValidations.propTypes = {
	propArray: React.PropTypes.array.isRequired,
	propBool: React.PropTypes.bool.isRequired,
	propFunc: React.PropTypes.func,
	propNumber: React.PropTypes.number,
	propString: React.PropTypes.string,
	propObject: React.PropTypes.object
}

PropValidations.defaultProps = {
	propArray: [1,2,3,4,5],
	propBool: true,
	propFunc: function(e) {return e},
	propNumber: 1,
	propString: 'This is string.....',
	propObject: {
		objectName1: "objectName1",
		objectName2: "objectName2",
		objectName3: "objectName3"
	}
}

class StatefullComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			'id':1, 'name': 'Bhaskar'
		}
	}
	render(){
		return(
			<div>
				<h1> {this.state.id} </h1>
				<h1> {this.state.name} </h1>

			</div>
		)
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

class StateHandler extends React.Component {
	constructor(){
		super();
		this.state = {
			datalist: []
		}
		this.setStateHandler = this.setStateHandler.bind(this);
	};

	setStateHandler(){
		var item = 'This is item ....';
		var myArray = [];
		myArray = this.state.datalist;
		myArray.push(item);
		this.setState({datalist: myArray})
	}

	render(){
		return(
			<div>
			  <button onClick = {this.setStateHandler}>SET STATE</button>
            <h4>State Array: {this.state.datalist}</h4>
			</div>
		)
	}
}

class ForceUpdateHandler extends React.Component {
	constructor(){
		super();
		this.ForceUpdateHandler = this.ForceUpdateHandler.bind(this);
	}

	ForceUpdateHandler(){
		this.forceUpdate();
	}

	render(){
		return(
			<div>
				  <button onClick = {this.ForceUpdateHandler}>Force Update</button>
            <h4>New Random number is: {Math.random()}</h4>
			</div>
		)
	}
}

class FindDomNode extends React.Component {
	constructor(){
		super();
		this.FindDomNodeHandler = this.FindDomNodeHandler.bind(this);
	}

	FindDomNodeHandler(){
		var myDiv = document.getElementById('myDiv');
		ReactDOM.findDOMNode(myDiv).style.color = "red";
	}

	render(){
		return(
			<div>
				<button onClick = {this.FindDomNodeHandler}>FIND DOME NODE</button>
            	<div id ="myDiv">NODE</div>
            </div>
		)
	}
}

class Lifecycle extends React.Component{
	constructor(){
		super();
		this.state = {
			data: 0
		}
		this.setNewNumber = this.setNewNumber.bind(this)
	}

	componentWillMount() {
      console.log('Component WILL MOUNT!')
   	}

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }

   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }


	setNewNumber(){
		this.setState({data: this.state.data + 1})
	}

	render(){
		return(
			<div>
				<button onClick={this.setNewNumber}> INCREMENT </button>
				<h1> {this.state.data} </h1>
			</div>
		)	
	}

}

export default App;