'use strict';

const f = React.createElement;

class LikeButton2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return f(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer2 = document.querySelector('#like_button_container_2');
ReactDOM.render(f(LikeButton2), domContainer2);
