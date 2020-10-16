import { PropsWithChildren } from 'react';

interface IProps {
  color: 'yellow' | 'green' | 'blue' | 'red' | 'darkbk';
  title: string;
  url: string;
  linkName: string;
}
const SideBarLink = (props: PropsWithChildren<IProps>) => {
  return (<div className={`forty_col ${props.color}`} >
        <aside className='sider'>
            <h2>{props.title}</h2>
            <p className='yourtrip_overview ov_spaced'>
                {props.children}
            </p>
            <a className='side_boxed' target='_blank' href={props.url}>{props.linkName}</a>
        </aside>
</div >);
};

export default SideBarLink;
