// Use these types as a reference to create you Content Model y Contenful, but you can change them as you want
export interface ContentfulAsset extends ContentfulContent {
  description?: string;
  file?: {
    url?: string;
    fileName?: string;
    contentType?: string;
  };
}

export interface MediaWrapperProps extends ContentfulContent {
  altText?: string;
  descriptionAsset?: string;
  desktopAsset?: ContentfulAsset;
  mobileAsset?: ContentfulAsset;
}

export interface ContentfulContent {
  name?: string;
  contentTypeId?: string;
}
