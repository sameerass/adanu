import { PropsWithChildren } from 'react';

interface IProps {
}
const LeaderBoard = (props: PropsWithChildren<IProps>) => {
  return (<div className='row dark'>
            <section className='leaderboard'>
              <h2>{props.children}</h2>
            </section>
        </div>);
};

export default LeaderBoard;
