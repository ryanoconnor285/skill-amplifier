import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";

const PostCard = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          {post.images.map((image) => (
            <div key={image.imageId}>
              <h5>{image.comments[0].title}</h5>
              <p>{image.comments[0].description}</p>
              <img
                src={`/uploads/` + image.imageId + `.jpeg`}
                alt={image.comments[0].title}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

PostCard.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(PostCard);
