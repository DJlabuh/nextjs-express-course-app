export default function ArticlePage({ params }: Params) {
  const { articleName } = params;

  return (
    <>
      <p>This is article: {articleName}</p>
    </>
  );
}
