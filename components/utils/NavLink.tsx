import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

interface IProps extends LinkProps {
  className?: string;
  exact?: boolean;
}

const NavLink = ({ href, className, exact, children }: PropsWithChildren<IProps>) => {
  const router = useRouter();

  const currentPath = router.pathname.split('/').filter(s => s);
  const targetPath = href.toString().split('/').filter(s => s);
  // The route is active if all of the following are true:
  //   1. There are at least as many segments in the current route as in the destination route
  //   2. The current route matches the destination route
  //   3. If we're in “exact" mode, there are no extra path segments at the end
  const isActive = (currentPath.length >= targetPath.length)
    && targetPath.every((p, i) => currentPath[i] === p)
    && (!exact || targetPath.length === currentPath.length);

  const navClassName = `${className} ${isActive ? 'current-menu-item' : ''}`;
  return <li className={`menu-item ${navClassName}`}>
            <Link href={href}><a>{children}</a></Link>
         </li>;
};

export default NavLink;
