import Link from 'next/link';

interface IProps {
  url: string;
  height: number;
  width: number;
  title?: string;
}

const Image = (props: IProps) => {
  return(<div className='twentyfive_si'>
    <Link href={props.url}>
     <a className='fancybox' rel='group' title={props.title || ''}>
        <img width={props.width} height={props.height}
        src={props.url}
        className='attachment-large size-large' alt=''
        sizes={`(max-width: ${props.width}px) 100vw, ${props.width}px`}/>
     </a>
    </Link>
  </div>);
};

export default Image;
