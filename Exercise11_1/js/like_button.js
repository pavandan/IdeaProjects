'use strict';

var e = React.createElement;
const element=<p>You liked this</p>;
class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        this.state={liked:false};
        if (this.state.liked) {
            return 'You liked this.';
        }


        return(
                <button onClick={() => this.setState({liked:true})}>
                Like
                </button>
    );


    }
}


var domContainer = document.querySelector('#like_button_container');
ReactDOM.render(element, domContainer);