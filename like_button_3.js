'use strict';

// const g = React.createElement;

class LikeButton3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button 
      onClick={() => this.setState({ liked: true })}
      >
      Like
    </button>
    );
  }
}

const domContainer3 = document.querySelector('#like_button_container_3');
ReactDOM.render(<LikeButton3/>, domContainer3);
