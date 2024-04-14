export default function imgUrl(url: string | null) {
  if (url === null) return "/";
  return `${process.env.REACT_APP_DOCUMENTS_URI}${url}`;
}
