import { Footer } from '@components/design/footer';

export const FooterNavigation = () => {
  const FooterItems = [{ title: `string`, url: `url` }];
  return (
    <>
      <Footer>
        {FooterItems.map((item) => (
          <p key={item.url}>{item.title}</p>
        ))}
      </Footer>
    </>
  );
};
