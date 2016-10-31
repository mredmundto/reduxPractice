import React, {Component} from 'react'; 

// Notes for refactor components to containers using redux 
// 1 =>  import connect from react-redux 
import { connect } from 'react-redux'; 

import {selectBook } from '../actions/index';
// 5 => make action flowing all reduacers 
import {bindActionCreators} from 'redux'; 


//container === smart components

// 2 => delete export default

//export default class BookList extends Component {
class BookList extends Component {
	
	renderList(){
		return this.props.books.map((book) => {
			return (
				<li 
				key={book.title} 
				onClick={()=> { this.props.selectBook(book)}}
				className="list-group-item">
				{book.title}
				</li> 
			)
		})
	}

	render (){
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

// 3 add this function 
function mapStateToProps(state){
	// will show up as props in bookList 
	// will render when application state changes 
	return {
		books: state.books
	}
}

// 6 => anything returned from this function will end up as props on the bookList
function mapDispatchToProps(dispatch){
	// whenever selectBook is called, result should be passed to all reducers
	return bindActionCreators({selectBook: selectBook}, dispatch)
}

// 4 make use of that connect function 
export default connect(mapStateToProps, mapDispatchToProps)(BookList); 

// promote bookList from a component to a container - it needs to know about this dispatch method

