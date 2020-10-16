import { PropsWithChildren } from 'react';

interface IProps {
  title: string;
}

const ItinaryRow = (props: PropsWithChildren<IProps>) => {
  return (<div className='itinerary_row'>
                <div className='forty'>
                    <h1>{props.title}</h1>
                </div>
                <div className='sixty'>
                    <p>
                       {props.children}
                    </p>
                </div>
        </div>);
};

export default ItinaryRow;
