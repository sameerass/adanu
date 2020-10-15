import { PropsWithChildren } from 'react';

interface IProps {
}
const Answer = (props: PropsWithChildren<IProps>) => {
  return (<p><p>{props.children}</p></p>);
};

export default Answer;
