import Image from 'next/image';

const Title = (props: any) => {
  return (
    <>
      <h1 style={{ fontSize: 80 }} {...props} />
    </>
  );
};

const SubTitle = (props: any) => {
  return (
    <>
      <h2 style={{ fontSize: 60 }} {...props} />
    </>
  );
};

const ParagraphTitle = (props: any) => {
  return (
    <>
      <h3 style={{ fontSize: 40 }} {...props} />
    </>
  );
};

const ParagraphSubTitle = (props: any) => {
  return (
    <>
      <h4 style={{ fontSize: 30 }} {...props} />
    </>
  );
};

const BlockTitle = (props: any) => {
  return (
    <>
      <h5 style={{ fontSize: 20 }} {...props} />
    </>
  );
};

const BlockSubTitle = (props: any) => {
  return (
    <>
      <h6 style={{ fontSize: 20 }} {...props} />
    </>
  );
};

const Paragraph = (props: any) => {
  return (
    <>
      <p style={{ fontSize: `1em` }} {...props} />
    </>
  );
};

const CustomLink = (props: any) => {
  return (
    <>
      <a {...props} />
    </>
  );
};

const BlockQuote = (props: any) => {
  return (
    <>
      <blockquote {...props} />
    </>
  );
};

const LineBreak = (props: any) => {
  return (
    <>
      <blockquote {...props} />
    </>
  );
};

const CodeBlock = (props: any) => {
  return (
    <>
      <code
        style={{ backgroundColor: `lightsalmon`, fontFamily: `monospace` }}
        {...props}
      />
    </>
  );
};

const TextBold = (props: any) => {
  return <strong {...props} />;
};

const Emphasis = (props: any) => {
  return <em {...props} />;
};

const HairLine = (props: any) => {
  return (
    <>
      <hr {...props} />
    </>
  );
};

const ImageCustom = (props: any) => {
  return (
    <>
      <Image {...props} alt={props.alt} />
    </>
  );
};

const Pre = (props: any) => {
  return (
    <>
      <pre {...props} />
    </>
  );
};

const OrderedList = (props: any) => {
  return (
    <>
      <ol style={{ marginLeft: `1.5em` }} {...props} />
    </>
  );
};

const UnorderedList = (props: any) => {
  return (
    <>
      <ul style={{ marginLeft: `1.5em` }} {...props} />
    </>
  );
};

const TheList = (props: any) => {
  return (
    <>
      <li {...props} />
    </>
  );
};

export const Markdown = {
  h1: Title,
  h2: SubTitle,
  h3: ParagraphTitle,
  h4: ParagraphSubTitle,
  h5: BlockTitle,
  h6: BlockSubTitle,
  p: Paragraph,
  a: CustomLink,
  blockquote: BlockQuote,
  br: LineBreak,
  code: CodeBlock,
  strong: TextBold,
  em: Emphasis,
  hr: HairLine,
  img: ImageCustom,
  pre: Pre,
  ol: OrderedList,
  ul: UnorderedList,
  li: TheList,
};
