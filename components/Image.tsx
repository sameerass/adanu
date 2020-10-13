import Link from 'next/link';

interface IProps {
  url: string;
  height: number;
  width: number;
  title?: string;
}

export default class Image extends Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return(<div className='twentyfive_si'>
    <Link href={this.props.url}>
     <a className='fancybox' rel='group' title={this.props.title || ''}>
        <img width={this.props.width} height={this.props.height}
        src={this.props.url}
        className='attachment-large size-large' alt=''
        sizes={`(max-width: ${props.width}px) 100vw, ${props.width}px`}/>
     </a>
    </Link>
  </div>);
};

export default Image;
