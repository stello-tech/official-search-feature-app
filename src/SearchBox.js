import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div className='pa2'>
			<input className='pa3 ba b--green bg-lightest-blue' 
                type='search' 
                placeholder='Seach person' 
                onChange={searchChange}/>
		</div>
	);

}
export default SearchBox;

// We make a component called SearchBox that has a div containing an input which is the "search" type. 
// This input event calls on the HTML event thats the onChange event that calls on the prop 
// (property = searchChange). This property is passed to line #28 in App.js.