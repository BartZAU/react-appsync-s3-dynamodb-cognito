import React from "react";

import { Storage, API, graphqlOperation } from "aws-amplify";
import { createImage } from "../graphql/mutations";
import awsExports from "../aws-exports";

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
    };
  }

  addImgDB = async (image) => {
    console.log("addimage to db");
    try {
      await API.graphql(graphqlOperation(createImage, { input: image }));
    } catch (error) {
      console.log(error);
    }
  };

  onChange(e) {
    const img = e.target.files[0];

    Storage.put(img.name, img, {
      contentType: "image/png",
    })
      .then(() => {
        this.setState({ img: URL.createObjectURL(img) });

        const image = {
          name: img.name,
          img: {
            bucket: awsExports.aws_user_files_s3_bucket,
            region: awsExports.aws_user_files_s3_bucket_region,
            key: "public/" + img.name,
          },
        };

        this.addImgDB(image);
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { img } = this.state;
    return (
      <div>
        <div>
          <h1>click to upload image</h1>
          <input type="file" onChange={(e) => this.onChange(e)} />
        </div>
        <div>
          <img src={img} />
        </div>
      </div>
    );
  }
}

export default UploadImage;
