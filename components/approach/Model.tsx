import { PropsWithChildren } from 'react';

interface IProps {
  imgUrl: string;
  title: string;
}

const Model = (props: PropsWithChildren<IProps>) => {
  return (<div className='row vertigo'>
              <div className='thirty'>
                <img className='thirty_icon' src={props.imgUrl} />
              </div>
              <div className='seventy'>
                  <h3>{props.title}</h3>
                <p>
                  {props.children}
                </p>
              </div>
            </div>);
};

export default Model;
