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
      author: 'Фотограф из Японии',
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

const Image = ({src, alt, style}) => (
  DOM.img({src, alt, style})
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
)

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
    `${author}; ${(createdAt) ? (`Создано: ${createdAt};`) : ''} ${(updatedAt) ? (`Обновлено: ${updatedAt};`) : ''}`
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

const Like = ({ postId, likesCount, updateLike }) => (
  DOM.div(
    null,
      React.createElement(
        'button',
        { onClick: () => updateLike(postId) },
        'Like'
      ),
      DOM.div(
        null,
        DOM.span(null, `Likes: ${likesCount}`)
      )
  )
);

Like.defaultProps = {
  count: 0,
  likesCount: 0
};

Like.propTypes = {
  count: PropTypes.number,
  updateLike: PropTypes.func.isRequired
};

/* /Like */

/* BlogItem */
const BlogItem = ({ post, updateLike }) => (
  DOM.div(
    null,
    DOM.div(null, React.createElement(Image, post.image)),
    DOM.div(null, React.createElement(Meta, post.meta)),
    React.createElement(TextBox, null, post.text),
    React.createElement(Like, {
        postId: post.id,
        likesCount: post.meta.likesCount,
        updateLike: updateLike
    })
  )
);

BlogItem.propTypes = {
  image:  PropTypes.shape( Image.propTypes ),
  meta: PropTypes.shape( Meta.propTypes ),
  text: PropTypes.string,
  updateLike: PropTypes.func
};
/* /BlogItem */

/* BlogList */
const BlogList = ({ posts, updateLike }) => (
  DOM.div(
    null,
    _.map(
      posts,
      (post) => React.createElement(BlogItem, {key: post.id, post, updateLike})     
    )
  )
);

BlogList.propTypes = {
  posts: PropTypes.array,
  updateLike: PropTypes.func
};
/* /BlogList */


/* PieChart */
class PieChart extends React.Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: {
        type : 'pie',
        columns: this.props.columns
      }
    });
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentWillReceiveProps(nextProps) {
    if(this.props != nextProps)
      this.chart.load({ columns: nextProps.columns })
  }

  render() {
    return (
        DOM.div({ ref: 'chart' })
    );
  }
}
/* /PieChart */


/* BlogPage */
class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts };
    this.updateLike = this.updateLike.bind(this);
  }
  
  updateLike(postId) {
    const index = this.state.posts.findIndex(post => post.id == postId);
    const posts = this.state.posts; 

    posts[index].meta.likesCount++;

    this.setState({ posts: posts });
  }

   render() {
    return (
      DOM.div(
          null,
          React.createElement(BlogList, { posts: this.state.posts, updateLike: this.updateLike }),
          React.createElement(PieChart, {columns: this.state.posts.map( post => [ post.text, post.meta.likesCount ] )})
      )
    )
  }
};
/* /BlogPage */

ReactDOM.render(
  React.createElement(BlogPage),
  document.getElementById('app')
);
