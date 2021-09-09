export default function CommentList({ comments }) {
  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === "approved") {
      content = comment.content;
    }

    if (comment.status === "pending") {
      content = "Komentar menunggu difilter";
    }

    if (comment.status === "rejected") {
      content = "Komentar mengandung kata tidak pantas";
    }

    return <li key={comment.id}>{content}</li>;
  });
  return <ul>{renderedComments}</ul>;
}
