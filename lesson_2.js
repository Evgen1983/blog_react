const DOM = React.DOM;
const PropTypes = React.PropTypes;

const posts = [
  {
    id: 0,
    image: {
      src: 'http://www.amazinglife.tv/sites/default/files/Files/d47a9078df0df20ee3b77ee2fed1a151.jpg',
      alt: 'Сакура'
    },
    meta: {
      author: 'Фотограф 1',
      createdAt: '2017-06-10',
      updatedAt: '2017-06-10',
      likesCount: 2
    },
    text: 'Цветение сакуры в Японии'
  },

  {
    id: 1,
    image: {
      src: 'https://im0-tub-ru.yandex.net/i?id=ae82a1e711697ef8427f32df7c286ac5&n=33&h=215&w=382',
      alt: 'УАЗ'
    },
    meta: {
      author: 'Фотограф 2',
      createdAt: '2017-06-11',
      updatedAt: '2017-06-11',
      likesCount: 2
    },
    text: 'УАЗ Патриот 2016'
  },

  {
    id: 2,
    
    image: {
      src: 'https://im0-tub-ru.yandex.net/i?id=443f5c6f23877fff42782e2eb869f14c-l&n=13',
      alt: 'Самолет'
    },
    meta: {
      author: 'Фотограф 3',
      createdAt: '2017-06-12',
      updatedAt: '2017-06-12',
      likesCount: 2
    },
    text: 'Первый самолет'
  }
];

/* Image */
const Image = (props) => (
  DOM.img({
    src: props.src,
    alt: props.text,
    style: props.style
  })
);

Image.defaultProps = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/%D0%9D%D0%B5%D1%82_%D1%84%D0%BE%D1%82%D0%BE.png',
  alt: '',
  style: {
    width: 300,
    height: 200
  }
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  })
};
/* /Image */

/* TextBox */
const TextBox = (props) => (
  DOM.span(null, props.children)
);

TextBox.defaultProps = {
  children: ''
};

TextBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ])
};
/* /TextBox */

/* Meta */
const Meta = ({author, createdAt, updatedAt}) => (
  DOM.span(
    null,
    `${author} Создано: ${createdAt} Обновлено: ${updatedAt}`
  )
);

Meta.defaultProps = {
  author: '',
  createdAt: '',
  updatedAt: ''
};

Meta.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
};
/* /Meta */

/* Like */
class Like extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: props.count };
  }

  render() {
    return DOM.div(
      null,
      React.createElement(
        'button',
        {
          onClick: () => (
              this.setState({ count: ++this.state.count })
          )
        },
        'Like'
      ),
      DOM.div(
        null,
        DOM.span(null, `Likes: ${this.state.count}`)
      )
    )
  }
};

Like.defaultProps = {
  count: 0
};

Like.propTypes = {
  count: PropTypes.number
};
/* /Like */

/* BlogItem */
const BlogItem = ({ post }) => (
  DOM.div(
    null,
    React.createElement(Image, post.image),
    React.createElement('br'),
    React.createElement(Meta, post.meta),
    React.createElement('br'),
    React.createElement(TextBox, null, post.text),
    React.createElement(Like, { count: post.meta.likesCount })
  )
);

BlogItem.propTypes = {
  post: PropTypes.shape({
    image:  PropTypes.shape( Image.propTypes ),
    meta: PropTypes.shape( Meta.propTypes ),
    text: PropTypes.string
  })
};
/* /BlogItem */

/* BlogList */
const BlogList = ({ posts }) => (
  DOM.div(
    null,
    _.map(
      posts,
      (post) => React.createElement(BlogItem, {key: post.id, post: post})
    )
  )
);

BlogList.propTypes = {
  posts: PropTypes.array
};
/* /BlogList */

/* BlogPage */
class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts }
  }

  render() {
    const posts = this.state.posts;
    return React.createElement(BlogList, { posts })
  }
};
/* /BlogPage */

ReactDOM.render(
  React.createElement(BlogPage),
  document.getElementById('app')
);