import Image from 'next/image';
import { Box } from '@components/design/box';
import {
  Heading,
  SubHeading,
  Title,
  SubTitle,
  CaptionTitle,
  Caption,
  Paragraph,
} from '@components/design/typography';

const MdxHeading = (props: any) => {
  return (
    <>
      <Heading
        {...props}
        id={props.children.replace(/\s+/g, '-').toLowerCase()}
        css={{ marginY: `$md`, fontFamily: `$brand` }}
      />
    </>
  );
};

const MdxSubHeading = (props: any) => {
  return (
    <>
      <SubHeading
        {...props}
        id={props.children.replace(/\s+/g, '-').toLowerCase()}
        css={{ marginY: `$md`, fontFamily: `$brand` }}
      />
    </>
  );
};

const MdxTitle = (props: any) => {
  return (
    <>
      <Title
        {...props}
        id={props.children.replace(/\s+/g, '-').toLowerCase()}
        css={{ marginY: `$md`, fontFamily: `$brand` }}
      />
    </>
  );
};

const MdxSubTitle = (props: any) => {
  return (
    <>
      <SubTitle
        {...props}
        id={props.children.replace(/\s+/g, '-').toLowerCase()}
        css={{ marginY: `$md`, fontFamily: `$brand` }}
      />
    </>
  );
};

const MdxCaptionTitle = (props: any) => {
  return (
    <>
      <CaptionTitle {...props} css={{ marginY: `$md`, fontFamily: `$brand` }} />
    </>
  );
};

const MdxCaption = (props: any) => {
  return (
    <>
      <Caption {...props} />
    </>
  );
};

const MdxParagraph = (props: any) => {
  return (
    <>
      <Paragraph {...props} css={{ marginY: `$md`, fontFamily: `$sans` }} />
    </>
  );
};

const CustomLink = (props: any) => {
  return (
    <>
      <Box
        as="a"
        css={{ textDecoration: `underline`, fontFamily: `$brand` }}
        {...props}
      />
    </>
  );
};

const BlockQuote = (props: any) => {
  return (
    <>
      <Box
        as="blockquote"
        css={{
          fontFamily: `$brand`,
          backgroundColor: `$crimson4`,
          padding: `$sm`,
          borderLeft: `4px solid $crimson6`,
        }}
        {...props}
      />
    </>
  );
};

const LineBreak = (props: any) => {
  return (
    <>
      <Box as="blockquote" {...props} />
    </>
  );
};

const CodeBlock = (props: any) => {
  return (
    <>
      <Box as="code" {...props} />
    </>
  );
};

const TextBold = (props: any) => {
  return <Box as="strong" css={{ fontFamily: `$brand` }} {...props} />;
};

const Emphasis = (props: any) => {
  return <Box as="em" css={{ fontFamily: `$brand` }} {...props} />;
};

const HairLine = (props: any) => {
  return (
    <>
      <Box as="hr" {...props} />
    </>
  );
};

const ImageCustom = (props: any) => {
  return (
    <>
      <Image layout="fill" alt={props.alt} {...props} />
    </>
  );
};

const Pre = (props: any) => {
  return (
    <>
      <Box as="pre" {...props} />
    </>
  );
};

const OrderedList = (props: any) => {
  return (
    <>
      <Box as="ol" css={{ marginLeft: `$sm` }} {...props} />
    </>
  );
};

const UnorderedList = (props: any) => {
  return (
    <>
      <Box
        as="ul"
        css={{ listStyleType: `square `, marginLeft: `$sm` }}
        {...props}
      />
    </>
  );
};

const TheList = (props: any) => {
  return (
    <>
      <Box
        as="li"
        css={{ lineHeight: `1.8em`, marginBottom: `$sm` }}
        {...props}
      />
    </>
  );
};

export const MarkdownWrapper = (props: any) => {
  return <Box css={{ maxWidth: `640px` }}>{props.children}</Box>;
};

export const Markdown = {
  h1: MdxHeading,
  h2: MdxSubHeading,
  h3: MdxTitle,
  h4: MdxSubTitle,
  h5: MdxCaptionTitle,
  h6: MdxCaption,
  p: MdxParagraph,
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
