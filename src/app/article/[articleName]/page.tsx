export default function ArticlePage({ params }: Params) {
  const { articleName } = params;

  return (
    <main>
      <p>This is article: {articleName}</p>
    </main>
  );
}
