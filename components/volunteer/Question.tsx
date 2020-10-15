import { PropsWithChildren } from 'react';

interface IProps {
}
const Question = (props: PropsWithChildren<IProps>) => {
  return (<h3>{props.children}</h3>);
};

export default Question;
