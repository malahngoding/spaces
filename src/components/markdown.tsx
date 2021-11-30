const Title = (props: any) => {
  return (
    <>
      <h1 style={{ fontSize: 80 }} {...props} />
    </>
  );
};

export const Markdown = { h1: Title };
