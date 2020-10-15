import VolunteerLayout from '../../components/volunteer/Layout';
import LeaderBoard from '../../components/LeaderBoard';

const BookYourTrip = () => {
  return (<VolunteerLayout title={'Volunteer'}>
        <div className='responsive_wrapper volunteer'>
            <LeaderBoard>Choose the right volunteer trip for you!</LeaderBoard>
            <div className='row yellow'>
            <section className='page_content_Generric Loop'>
                <article className='responsive_wrap_fullwidth generic_page_wrapper'>
                    <h1 className='generic_title'>Book your trip</h1>
                    <div className='generic_content'>
                        <div id='fb-root'></div>
                        <div className={'general-content-padding'}>
                            <h2>8-Day Trips &#8211; Monthly Volunteer Trip</h2>
                            <p>
                                Join Adanu on a volunteer trip to the Volta Region of Ghana! Work side by side with
                                community members, determined to create a brighter future for their children. Build a
                                school, teach about hygiene, build a library or latrine, show kids how to play in a
                                newly built playground! The options are many, contact us for the exact project you will
                                be working on for the dates you select.</p>
                            <p>
                                Adanu has 15 years of experience with corporate groups, universities and individuals who
                                are interested in sustainable development driven by the community, not the NGO.
                            </p>
                            <p>&nbsp;</p>
                            <form>
                                <a href='https://volunteer-trip-adanu.pushpayevents.com/' target='_blank'>
                                    <input type='BUTTON' value='Info &amp; Booking' /></a>
                            </form>
                            <p>&nbsp;</p>
                            <div className='aligncenter'>
                            </div>
                            <p>&nbsp;</p>
                            <h2>Private Volunteer Trip &#8211; Throughout the year</h2>
                            <p>If you would like to book a private trip please reach out to Richard at richard@adanu.org
                                to determine the details and unlock your trip to Ghana!
                            </p>
                            <p>&nbsp;</p>
                            <form><a href='https://private-trip-adanu.pushpayevents.com/' target='_blank'>
                                <input type='BUTTON' value='Info &amp; Booking' /></a></form>
                            <p>&nbsp;</p>
                            <div className='aligncenter'>
                            </div>
                            <h2>Choose Your Own Trip &#8211; Throughout the Year</h2>
                            <p>
                                Only have a few days in Ghana? Or maybe you are looking to spend a few months in Ghana?
                                Want to make the biggest impact possible, on both a community and yourself?
                            </p>
                            <p>&nbsp;</p>
                            <p>
                                We offer a variety of trip options from 2 days to 3 months. Adanu will customize your
                                experience to maximize your interests while on your trip. We work with a number of
                                villages in Ghana. Your trip will be in conjunction with a village in need of your help
                                and knowledge.
                            </p>
                            <p>&nbsp;</p>
                            <p>
                                Trips can encompass Education and Teaching opportunities, Art and Painting Schools,
                                Sanitation Facility projects, Clean Water projects, Building Playgrounds and School
                                Gardens, and more.
                            </p>
                            <p>&nbsp;</p>
                            <p>Contact us so we can start you on your journey to Ghana!</p>
                            <p>&nbsp;</p>
                            <p>Trip prices vary greatly depending on length of stay, project, public or private
                                transportation and more. Please contact us directly so we may work on a program and
                                budget that works for you.
                            </p>
                            <p>&nbsp;</p>
                            <p>Book your trip today:</p>
                            <p>&nbsp;</p>
                            <form>
                                <a href='https://chooseyourdates.pushpayevents.com/' target='_blank'>
                                    <input type='BUTTON' value='Info &amp; Booking' />
                                </a>
                            </form>
                            <p>&nbsp;</p>
                            <p style={{ paddingTop: '20px' }}>
                                *Merchandise available on-site in Ghana
                            </p>
                        </div>
                    </div>
                </article>
            </section>
        </div>
        </div>
    </VolunteerLayout>);
};

export default BookYourTrip;
