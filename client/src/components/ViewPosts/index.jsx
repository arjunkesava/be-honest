import React from 'react';
import ViewPost from '../ViewPost';
import ViewPostsHeader from '../ViewPosts/ViewPostsHeader';
import NoViews from '../ViewPosts/NoViews';

class ViewPosts extends React.Component {
  state = { 
    posts: [
      'Sollu appu ra',
      'return this.state.posts.map((post, index) => <ViewPost post={post} key={index} />)',
      'return <NoViews shareLink={ramana} email={rob} />;',
    ]
  }

  displayViewContent () {
    if(this.state.posts) {
      return this.state.posts.map((post, index) => {
        return (
          <div className="container">
            <p className="mb-1">{index+1}) Your Anonymous friend:</p>
            <ViewPost post={post} key={index} />
          </div>
        )
      })
    }
    return <NoViews shareLink={'ramana'} email={'rob'} />;
  }

  render() { 
    return (
      <>
      <ViewPostsHeader/>
      { this.displayViewContent() }
      </>
    );
  }
}
 
export default ViewPosts;