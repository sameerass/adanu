import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

interface IProps extends LinkProps {
  className?: string;
  title: string;
}

const SubNavLink = ({ href, className, title, children }: PropsWithChildren<IProps>) => {
  const router = useRouter();

  let navClassName = className || '';
  if (router.pathname === href) {
    navClassName = `${className} current-menu-item`;
  }
  return <li className={`menu-item ${navClassName}`}>
            <Link href={href}><a>{title}</a></Link>
            <ul className='sub-menu'>
                {children}
            </ul>
         </li>;
};

export default SubNavLink;
