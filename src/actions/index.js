export function selectBook(book) {
	//console.log(book.title);
	// select book is an action creator that needs to return an action
	return {
		type: 'BOOK_SELECTED', 
		payload: book
	}; 
}