const DOM = React.DOM;

const posts = [
  {
    id: 0,
    src: 'http://www.amazinglife.tv/sites/default/files/Files/d47a9078df0df20ee3b77ee2fed1a151.jpg',
    text: 'Цветение сакуры в Японии'
  },
  {
    id: 1,
    src: 'https://im0-tub-ru.yandex.net/i?id=ae82a1e711697ef8427f32df7c286ac5&n=33&h=215&w=382',
    text: 'УАЗ Патриот 2016'
  },
  {
    id: 2,
    src: 'https://im0-tub-ru.yandex.net/i?id=443f5c6f23877fff42782e2eb869f14c-l&n=13',
    text: 'Первый самолет'
  }
];

const Image = (props) => (
  DOM.img({
    src: props.src,
    alt: props.text,
    style: {
      width: 300,
      height: 200
    }
  })
)

const TextBox = (props) => (
  DOM.span(null, props.children)
)

const BlogItem = ({ post }) => (
  DOM.div(
    null,
    React.createElement(Image, post),
    React.createElement('br'),
    React.createElement(TextBox, null, post.text)
  )
)

const BlogList = ({ posts }) => (
  DOM.div(
    null,
    _.map(
    posts,
    (post) => {
       return React.createElement(BlogItem, {key: post.id, post: post})
        }
    )
  )
)

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts };
  }

  render() {
    const posts = this.state.posts;
    return React.createElement(BlogList, { posts })
  }
}


ReactDOM.render(
  React.createElement(BlogPage),
  document.getElementById('app')
);