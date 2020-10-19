import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { PropsWithChildren } from 'react';

export interface IProps {
  title: string;
}
const Layout = (props: PropsWithChildren<IProps>) => {
  return (<div>
        <Head>
            <title>Adanu | {props.title} |inspiring communities together</title>
            <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no'/>
            <link rel='shortcut icon' href={`/favicon.ico`} />
            <script src='http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'></script>
            <script src='http://malsup.github.com/jquery.cycle2.js'></script>
        </Head>
        <Header/>
        {props.children}
        <Footer/>
    </div>);
};

export default Layout;
