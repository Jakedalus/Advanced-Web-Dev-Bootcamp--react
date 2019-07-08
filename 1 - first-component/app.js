
//// REACTDOMFACTORIES METHOD
// class Pet extends React.Component {
// 	render() {
// 		const h2 = ReactDOMFactories.h2(null, "Moxie");
// 		const img = ReactDOMFactories.img({
// 			src: 'https://placeimg.com/640/480/animals',
// 			alt: 'moxie, an animal'
// 		});
// 		return ReactDOMFactories.div(null, h2, img);
// 	}
// }


// ReactDOM.render(React.createElement(Pet), document.getElementById('app'));



//// WITH BABEL
class Pet extends React.Component {
	render() {
		return (
			<div>
				<h2>Moxies</h2>
				<img src='https://placeimg.com/640/480/animals' alt='moxie' />
			</div>
		);
	}
}


ReactDOM.render(<Pet />, document.getElementById('app'));