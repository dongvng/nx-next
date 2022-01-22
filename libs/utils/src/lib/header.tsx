import { isArray } from '@nx-next/array';
/* eslint-disable-next-line */
export interface HeaderProps extends React.ComponentPropsWithoutRef<'div'> {}

export function Header(props: HeaderProps) {
  return (
    <div {...props}>
      {isArray(['he']) && <p>it is an array</p>}
      <h1>Dong Nguyen</h1>
    </div>
  );
}

export default Header;
