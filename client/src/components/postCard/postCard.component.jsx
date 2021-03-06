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
          <h5>{post.images[0].comments[0].title}</h5>
          <img
            src={"data:image/jpeg;base64," + btoa(post.images[0].img.data)}
            alt={post.images[0].comments[0].title}
          />
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
