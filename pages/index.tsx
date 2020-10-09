import Layout from '../components/Layout';
import Carousel from '../components/Carousel';
import Link from 'next/link';

const HomePage = () => {
    return (<Layout title={'Home Page'}>
        <div className='responsive_wrapper'>
          <Carousel/>
            <div className='row blue'>
              <section className='leaderboard'>
                  <h2>
                    Adanu ignites the passion of Ghanaian communities to bring about  a future filled with opportunity and hope.
                  </h2>
              </section>
            </div>
            <div className='row  yellow'>
                <section className='responsive_wrap_fullwidth'>
                  <article className='thirtythree'>
                    <img className='box-title-image' src='/images/who.png'/>                
                    <h2>Who</h2>
                    <h3>Adanu + You</h3>
                    <p>
                      Together, Adanu, donors and volunteers inspire and empower communities to own and lead critical development projects that benefit people young and old across Ghanaian villages.
                      <br />
                      <br />
                      Adanu donors and volunteers empower communities, working together to build schools.
                    </p>
                  </article>
                  <article className='thirtythree'>
                    <img className='box-title-image' src='/images/what.png'/>              
                    <h2>What</h2>
                    <h3>Community-Led Projects</h3>
                    <p>Adanu partners with communities to foster a spirit of collaboration and ownership. This creates authentic community development and true sustainability.
                      <br />
                      <br />
                      Every Adanu project is run jointly with local community leaders. This creates ownership, authentic community development and true sustainability.
                    </p>
                  </article>
                  <article className='thirtythree'>
                    <img className='box-title-image' src='/images/why.png'/>     
                    <h2>Why</h2>
                    <h3>Empowerment & Hope</h3>
                    <p>Providing children with an education empowers them to improve their lives and the lives of their families.
                      <br />
                      <br />
                      Adanu ignites possibilities. Education brings knowledge; knowledge opens doors; doors wide open create a legacy of hope.
                    </p>
                  </article>
                </section>
            </div>
            <div className='row'>
              <div className='fifty_col green'>
                <Link href='/volunteer'><a> go </a></Link>
              </div>
              <div className='fifty_col red'>
                <Link href='/give'><a> give </a></Link>
              </div>
            </div>
        </div>
      </Layout>);
  };
  
  export default HomePage;