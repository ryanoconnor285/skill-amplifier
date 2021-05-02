import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { uploadImages } from "../../actions/images";
import "./createPost.styles.css";

const CreatePost = ({ uploadImages }) => {
  const [selectedFiles, setSelectedFiles] = useState(null);
  let imgPreview;
  // if (selectedFiles) {
  //   imgPreview = (
  //     <img
  //       src={URL.createObjectURL(selectedFiles)}
  //       alt="selected file"
  //       style={{ width: 400, height: 250 }}
  //     />
  //   );
  // }
  console.log(selectedFiles);
  return (
    <div>
      <h1>Create Post</h1>
      <h4>Upload Images</h4>
      <div className="box__input">
        <input
          className="box__file"
          type="file"
          name="images"
          id="images"
          multiple
          onChange={(event) => setSelectedFiles(event.target.files[0])}
        />
        <button
          className="box__button"
          onClick={() => uploadImages(selectedFiles)}
        >
          Upload
        </button>
        {imgPreview}
      </div>

      <h4>Details</h4>
    </div>
  );
};

CreatePost.propTypes = {
  uploadImages: PropTypes.func.isRequired,
  images: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  images: state.images,
});

export default connect(mapStateToProps, { uploadImages })(CreatePost);
