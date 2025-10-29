export default function Article(props: { name?: string }) {
  const { name } = props;
  return (
    <div>
        <h2>Article</h2>
        <p>This is an article component.</p>
        <p>{name}</p>
    </div>
  )
}
