

class Pet extends React.Component {
	render() {
		const h2 = ReactDOMFactories.h2(null, "Moxie");
		const img = ReactDOMFactories.img({
			src: 'https://placeimg.com/640/480/animals',
			alt: 'moxie, an animal'
		});
		return ReactDOMFactories.div(null, h2, img);
	}
}


ReactDOM.render(React.createElement(Pet), document.getElementById('app'));