/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage($owner: String!) {
    onCreateImage(owner: $owner) {
      id
      name
      owner
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage($owner: String!) {
    onUpdateImage(owner: $owner) {
      id
      name
      owner
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage($owner: String!) {
    onDeleteImage(owner: $owner) {
      id
      name
      owner
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
