import Head from 'next/head';
import Header from './Header';
import MobileNavigation from'./MobileNavigation';
import Footer from './Footer';
import { ReactNode } from 'react';

interface IProps {
    title: string;
    children?: ReactNode;
}
const Layout = (props: IProps) => {
    return (<div>
        <Head>
	        <title>Adanu | {props.title} |inspiring communities together</title>
            <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no'/>
            <link rel='shortcut icon' href='favicon.ico' />
            <script src='http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'></script>
            <script src='http://malsup.github.com/jquery.cycle2.js'></script>
        </Head>
        <Header/>
        <MobileNavigation />
        {props.children}
        <Footer/>
    </div>);
}

export default Layout;