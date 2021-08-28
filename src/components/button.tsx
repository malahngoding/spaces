interface ButtonProps {
  children: string;
}
export const Button = (props: ButtonProps): JSX.Element => {
  const { children } = props;
  return <button type="button">{children}</button>;
};
