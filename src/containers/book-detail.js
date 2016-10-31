import React, {Component } from 'react'; 
import { connect } from 'react-redux'

class BookDetail extends Component {

	render(){

		if (!this.props.book){
			return <div> please select a book</div>
		}
		return (
			<div>  
				<h4> Details </h4>
				<div> title: {this.props.book.title}</div>
				<div> pages: {this.props.book.pages}</div>
			</div> 
		) 
	}
} 

function mapStateToProps(state){
	return {
		book: state.activeBook
	}
}

export default connect(mapStateToProps)(BookDetail) 