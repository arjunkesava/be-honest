import React from 'react';
import NotFound from '../NotFound';
import ServerError from '../ServerError';
import Spinner from '../Spinner';
import ViewPost from '../ViewPost';
import NoViews from '../ViewPosts/NoViews';
import ViewPostsHeader from '../ViewPosts/ViewPostsHeader';

class ViewPosts extends React.Component {
  state = { 
    posts: [],
    isLoading: true,
    status: 200
  }

  async componentDidMount () {
    var {
      match: {
        params: {
          viewId
        }
      }
    } = this.props;
    var payload = {
      viewId
    };
    var response = await fetch('/check/posts',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ payload }),
    });
    var body = await response.text();

    this.setState({
      isLoading: false,
      status: response.status
    });

    //eslint-disable-next-line
    if (response.status == 200) {
      this.setState({
        posts: JSON.parse(body || {})
      });
    }
  }

  displayViewContent () {
    if (this.state.status !== 200) {
      return <ServerError />;
    }
    if(this.state.posts.length !== 0) {
      return this.state.posts.map((post, index) => {
        return (
          <div className="container">
            <p className="mb-1">{index+1}) Your Anonymous friend:</p>
            <ViewPost post={post.content} name={post.name} key={index} />
          </div>
        )
      })
    }
    return <NoViews />;
  }

  render() { 
    if (this.state.isLoading) {
      return <Spinner />;
    }
    if (this.state.status === 404) {
      return <NotFound />;
    }
    return (
      <>
      <ViewPostsHeader/>
      { this.displayViewContent() }
      </>
    );
  }
}
 
export default ViewPosts;