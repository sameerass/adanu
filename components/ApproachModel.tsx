import { Component } from 'react';

interface IProps {
  imgUrl: string;
  title: string;
}

export default class ApproachModel extends Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return(<div className='row vertigo'>
              <div className='thirty'>
                <img className='thirty_icon' src={this.props.imgUrl} />
              </div>
              <div className='seventy'>
                  <h3>{this.props.title}</h3>
                <p>
                  {this.props.children}
                </p>
              </div>
            </div>);
  }
}
