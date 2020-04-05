import React from 'react';
import shuffleArray from '../../helpers/shuffle';

class ViewPost extends React.Component {
  state = {  }

  render() { 
    const borderColors = shuffleArray(['red', 'yellow', 'lime', 'green', 'aqua', 'blue', 'magenta', 'green', 'aqua', 'blue', 'magenta']);
    // We push the first color to last for uniformity of gradient
    borderColors.push(borderColors[0]);

    return (
      <div className="container">
        <p className="lead">This is how your comment looks like:</p>
        <div className="post-border" style={{ borderImage: `conic-gradient(${borderColors.join(',')}) 1` }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum, lorem vel tincidunt imperdiet, nibh elit laoreet felis, a bibendum nisl tortor non orci. Donec pretium fermentum felis, quis aliquet est rutrum ut. Integer quis massa ut lacus viverra pharetra in eu lacus. Aliquam tempus odio adipiscing diam pellentesque rhoncus. Curabitur a bibendum est. </p>
        </div>
      </div>
    );
  }
}
 
export default ViewPost;