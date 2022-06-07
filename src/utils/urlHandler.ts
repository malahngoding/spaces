export const callbackUrlHandler = (url: string | undefined): string => {
  if (url === undefined) {
    return `/`;
  } else {
    return url;
  }
};
