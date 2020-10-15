import VolunteerLayout from '../../components/volunteer/Layout';
import LeaderBoard from '../../components/LeaderBoard';

// TO-DO - Form submit
const TripReviews = () => {
  return (<VolunteerLayout title={'Volunteer'}>
        <div className='responsive_wrapper volunteer'>
            <LeaderBoard>Volunteer Feedback</LeaderBoard>
            <div className='row yellow'>
                <section className='page_content_Generric Loop'>
                    <article className='responsive_wrap_fullwidth generic_page_wrapper'>
                        <h1 className='generic_title'>Trip Reviews</h1>
                        <div className='generic_content'>
                            <div id='fb-root'></div>
                            <p>
                                Formal Reviews to be published shortly.  In the meantime,
                                go to our Blog posts &#8216;volunteer stories&#8217; to see what volunteers
                                have said about their experiences with Adanu. And, if you have recently
                                traveled with us, we would love for your feedback.
                            </p>
                            <div className='gf_browser_unknown gform_wrapper' id='gform_wrapper_8' >
                                <form method='post' encType='multipart/form-data'
                                    id='gform_8' action='https://www.adanu.org/volunteer/trip-reviews/'>
                                    <div className='gform_heading'>
                                        <h3 className='gform_title'>Volunteer Trip Evaluation</h3>
                                        <span className='gform_description'></span>
                                    </div>
                                    <div className='gform_body'>
                                        <ul id='gform_fields_8'
                                            className='gform_fields top_label form_sublabel_below description_below'>
                                            <li id='field_8_6'
                                                className='gfield field_sublabel_below field_description_below gfield_visibility_visible' >
                                                <label className='gfield_label' htmlFor='input_8_6' >Name</label>
                                                <div className='ginput_container ginput_container_text'>
                                                    <input name='input_6' id='input_8_6' type='text' value=''
                                                     className='medium' aria-invalid='false' />
                                                </div>
                                            </li>
                                            <li id='field_8_7'
                                             className='gfield field_sublabel_below field_description_below gfield_visibility_visible' >
                                                <label className='gfield_label' htmlFor='input_8_7' >Trip Date</label>
                                                <div className='ginput_container ginput_container_text'>
                                                    <input name='input_7' id='input_8_7' type='text' value=''
                                                     className='medium' aria-invalid='false' />
                                                </div>
                                            </li>
                                            <li id='field_8_1'
                                             className='gfield field_sublabel_below field_description_below gfield_visibility_visible' >
                                                 <label className='gfield_label' htmlFor='input_8_1' >
                                                     What were 2-3 highlights from your volunteer experience?
                                                 </label>
                                                 <div className='ginput_container ginput_container_textarea'>
                                                     <textarea name='input_1' id='input_8_1' className='textarea medium'
                                                      aria-invalid='false' rows={10} cols={50}></textarea>
                                                 </div>
                                            </li>
                                            <li id='field_8_2'
                                             className='gfield field_sublabel_below field_description_below gfield_visibility_visible' >
                                                <label className='gfield_label' htmlFor='input_8_2' >
                                                    What can we do differently to improve the Adanu
                                                    volunteer experience?
                                                </label>
                                                <div className='ginput_container ginput_container_textarea'>
                                                    <textarea name='input_2' id='input_8_2' className='textarea medium'
                                                     aria-invalid='false' rows={10} cols={50}></textarea>
                                                </div>
                                            </li>
                                            <li id='field_8_3'
                                             className='gfield field_sublabel_below field_description_below gfield_visibility_visible' >
                                                 <label className='gfield_label' htmlFor='input_8_3' >
                                                     Did the Adanu hosts meet your expectations?
                                                     What did they do well? What could be improved?
                                                </label>
                                                <div className='ginput_container ginput_container_textarea'>
                                                    <textarea name='input_3' id='input_8_3' className='textarea medium'
                                                     aria-invalid='false' rows={10} cols={50}></textarea>
                                                </div>
                                            </li>
                                            <li id='field_8_5'
                                             className='gfield field_sublabel_below field_description_below gfield_visibility_visible' >
                                                 <label className='gfield_label' htmlFor='input_8_5' >
                                                     What other things do you wish you had the opportunity to do or see
                                                     during your trip?
                                                 </label>
                                                 <div className='ginput_container ginput_container_textarea'>
                                                     <textarea name='input_5' id='input_8_5' className='textarea medium'
                                                      aria-invalid='false' rows={10} cols={50}></textarea>
                                                 </div>
                                            </li>
                                            <li id='field_8_4'
                                             className='gfield field_sublabel_below field_description_below gfield_visibility_visible' >
                                                 <label className='gfield_label' htmlFor='input_8_4' >
                                                     What words would you use to describe your volunteer
                                                     experience to others?
                                                 </label>
                                                 <div className='ginput_container ginput_container_textarea'>
                                                     <textarea name='input_4' id='input_8_4' className='textarea medium'
                                                      aria-invalid='false' rows={10} cols={50}></textarea>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='gform_footer top_label'>
                                        <input type='submit' id='gform_submit_button_8'
                                         className='gform_button button' value='Submit'/>
                                        <input type='hidden' className='gform_hidden' name='is_submit_8' value='1' />
                                        <input type='hidden' className='gform_hidden' name='gform_submit' value='8' />
                                        <input type='hidden' className='gform_hidden' name='gform_unique_id' value='' />
                                        <input type='hidden' className='gform_hidden' name='state_8' value='WyJbXSIsIjI3MTRlNWM3N2RhNmQ3ZDBiMmYzYzQwNzEzNDg1ZTY1Il0=' />
                                        <input type='hidden' className='gform_hidden' name='gform_target_page_number_8'
                                         id='gform_target_page_number_8' value='0' />
                                        <input type='hidden' className='gform_hidden' name='gform_source_page_number_8'
                                         id='gform_source_page_number_8' value='1' />
                                        <input type='hidden' name='gform_field_values' value='' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        </div>
    </VolunteerLayout>);
};

export default TripReviews;
