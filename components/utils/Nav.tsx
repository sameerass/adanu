import { PropsWithChildren } from 'react';

interface IProps {
  className: string;
}
const Nav = (props: PropsWithChildren<IProps>) => {
  return (<nav className={props.className}>
                <div className='menu-container'>
                    <ul className='menu'>
                        {props.children}
                    </ul>
                </div>
            </nav>);
};

export default Nav;
