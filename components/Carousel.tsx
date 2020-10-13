import Link from 'next/link';

const Carousel = () => {
  return (<div className='slider'>
              <div className='cycle-slideshow'
                data-cycle-fx={'scrollHorz'}
                data-cycle-timeout={5000}
                data-cycle-slides={'> div'}
                data-cycle-pager={'.cycle-pager'}>
                <div className='slide_1'>
                  <Link href='/about/#meaning'>
                      <a className='boxed yellow_cta'>what's behind our name</a>
                  </Link>
                </div>
                <div className='slide_2'>
                  <Link href='/approach/#founder'>
                      <a className='boxed black_cta meet_click_through'>meet our founder</a>
                  </Link>
                </div>
                <div className='slide_3'>
                  <Link href='/about/partners'>
                      <a className='boxed black_cta'>partnerships</a>
                  </Link>
                </div>
                <div className='slide_2'>
                  <a target='_blank' href='https://www.createspace.com/7684396' className='boxed black_cta meet_click_through'>order book</a>
                </div>
              </div>
              <div className='cycle-pager'></div>
          </div>);
};

export default Carousel;
