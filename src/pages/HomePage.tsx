import Hero from "../components/Hero";
import Footer from "../components/Footer";
import VerticalOwnTags from "../components/VerticalOwnTags";
import SectionTitle from "../components/SectionTitle";
import CommentSwiper from "../components/CommentSwiper";
import CommentSwiper2 from "../components/CommentSwiper2";
import CommentSwiper3 from "../components/CommentSwiper3";
import QAAccordion from "../components/QAAccordion";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import { Quote} from 'lucide-react';


const overlay = true;

const HomePage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {/* Section 1 */}
            <div id="home">
                <Hero 
                    title={t('hero_section.title')}
                    subtitle=""
                    image="/on-my-way.jpg"
                    ctaText={t('hero_section.b_title')}
                    ctaLink="#contact"
                />
            </div>

            {/*<div>
                <Tswiper />
            </div>*/}

            {/* Section 2 */}
            <div className={`relative h-auto flex items-center justify-center`}
                style={{
                    backgroundImage: `url(/sun-set-3.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                >
                
                {overlay && (
                    <div className=""></div>
                )}
                <VerticalOwnTags />
            </div>
                
            {/* Section 3 */}
            <section id="about" className="py-20 bg-white">
                <div className="flex justify-center items-center mx-5 mb-12">
                    <div>
                        <SectionTitle
                            title={t('aboutme_section.title')}
                            subtitle={t('aboutme_section.subtitle')}
                            alignment="center"
                            light={false}
                        />
                    </div>
                </div>
                <div className="mx-auto px-4 md:px-6">                    
                    <div className="grid grid-cols-2 max-md:grid-cols-1 items-center gap-20 px-2 md:px-2 lg:px-40">
                        <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                        >
                        <div className="absolute max-md:-bottom-10  md:mt-40 lg:mt-50 left-20 md:-left-5 lg:-left-15 w-60 md:w-40 lg:w-40 h-auto px-2 py-4 bg-accent">
                            <p className="text-xs font-bold text-center text-white">
                                {t('aboutme_section.text')}
                            </p>
                            <p className="text-xs font-light text-center text-white">
                                – {t('author')}
                            </p>
                        </div>
                    
                        <img
                            src="/author.jpg"
                            alt="Author"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                        
                        </motion.div>

                        <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        >    
                            <p className="whitespace-pre-line text-xs text-gray-800">
                                <Trans
                                i18nKey="aboutme_section.bio"
                                components={{
                                    name: <span className="underline font-semibold text-black-700" />,
                                    skills: <span className="underline text-gray-700" />,
                                    issues: <span className="underline text-gray-700" />,
                                    method: <span className="underline font-semibold text-black-700" />,
                                    strengths: <span className="underline text-accen decoration-accentt" />,
                                    teen: <span className="underline font-semibold text-black-700 " />,
                                    cert: <span className="underline text-gray-700" />,
                                    org: <span className="underline text-gray-700" />
                                }}
                                />
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 4 */}
            <div id="interventions"
                className={`relative h-auto flex items-center justify-center`}
                style={{
                    backgroundImage: `url(/coaching.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                >
                {overlay && (
                    <div className="absolute inset-0 bg-black/30"></div>
                )}
                
                <div className="my-20">
                    <div className="relative text-center text-white">
                        <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="font-serif text-2xl md:text-3xl font-bold leading-tight"
                        >
                            {t('about_action1_section.title')}
                        </motion.h1>
                        
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-xs mt-5 text-white"
                        >
                            {t('about_action1_section.subtitle')}
                        </motion.p>                        
                    </div>

                    <div className="w-screen px-20 md:px-40 ld:px-60">
                        <CommentSwiper2 />
                    </div>

                </div>
            </div>

            {/* Section 5 */}
            <div className="relative flex items-center justify-center h-auto md:h-screen bg-gray-800"
                style={{
                    backgroundImage: `url(/basket-team.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
            {overlay && (
                <div className="absolute inset-0 bg-gray-900/80"></div>
            )}
                <div className="relative pt-25 pb-10 md:py-5 mx-10 my-8 md:mx-2 lg:mx-30 bg-slate-900/90">
                    <div className="grid grid-cols-5 ">
                        <div className="col-span-5 md:col-span-2 flex items-center justify-center text-center mx-10">                            
                            <Quote size={55} fill="#A28956" strokeWidth={0} style={{ transform: 'rotate(180deg)' }} className="absolute place-self-start max-md:top-10 md:mr-50 lg:mr-70 h-auto w-13 md:w-15 my-2"/>
                            <SectionTitle
                                title={t('about_action2_section.title')}
                                subtitle={t('about_action2_section.subtitle')}
                                alignment="center"
                            />
                        </div>
                        <div className="col-span-5 md:col-span-3 ">
                            <CommentSwiper3 addNavigation={false} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 6 */}
            <div id="experiences" className="relative h-auto pt-20 bg-gray-800 px-2"
                style={{
                    backgroundImage: `url(/sport.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
            {overlay && (
                <div className="absolute inset-0 bg-gray-900/80"></div>
            )}
                <div className="relative">
                    <SectionTitle
                        title={t('about_guidance_section.title')}
                        subtitle={t('about_guidance_section.subtitle')}
                        alignment="center"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        >
                    <h2 className="text-xs text-center text-white my-5 px-5 md:px-40">{t('about_guidance_section.subtitle_1')}</h2>
                    <div className="pb-20 mx-5 md:mx-15 lg:mx-35">
                        <div className="grid grid-cols-6 gap-4 justify-items-stretch ">
                            <div className="col-span-6 justify-self-center text-xs text-accent"><p>1</p></div>
                            <div className="col-span-4 col-start-1 col-end-7 lg:col-start-3 md:justify-self-end w-auto lg:w-150">
                                <div className="bg-white w-auto px-6 py-2">
                                    <div className="">
                                        <div className="grid grid-cols-[1fr_auto] justify-self-end">            
                                            <h4 className="mt-5 mx-2 font-bold text-xs">{t('about_guidance_section.text.1.title')}</h4>
                                            <img
                                                src="/girl-icon.png"
                                                alt="place image"
                                                className="h-12 w-12 shadow-lg self-baseline-last"
                                            />
                                        </div>
                                        <div className="text-gray-500 text-xs my-5 text-right">
                                            <p>{t('about_guidance_section.text.1.text.1')}</p><br />
                                            <p>{t('about_guidance_section.text.1.text.2')}</p>
                                            <p>{t('about_guidance_section.text.1.text.3')}</p>
                                            <p>{t('about_guidance_section.text.1.text.4')}</p>
                                            <p>{t('about_guidance_section.text.1.text.5')}</p><br />
                                            <p>{t('about_guidance_section.text.1.text.6')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-6 justify-self-center text-xs text-accent"><p>2</p></div>
                            <div className="col-span-4 col-start-1 col-end-7 lg:justify-self-start w-auto lg:w-150">
                                <div className="bg-white w-auto px-6 py-2">
                                    <div className="">
                                        <div className="grid grid-cols-[1fr_auto] justify-self-start">
                                            <img
                                                src="/ball-icon.png"
                                                alt="place image"
                                                className="h-12 w-12 shadow-lg self-baseline-last"
                                            />                                
                                            <h4 className="mt-5 mx-2 font-bold text-xs">{t('about_guidance_section.text.2.title')}</h4>
                                        </div>
                                        <div className="text-gray-500 text-xs my-5 text-left">
                                            <p>{t('about_guidance_section.text.2.text.1')}</p><br />
                                            <p>{t('about_guidance_section.text.2.text.2')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-6 justify-self-center text-xs text-accent"><p>3</p></div>
                            <div className="col-span-4 col-start-1 col-end-7 lg:col-start-3 md:justify-self-end w-auto lg:w-150">
                                <div className="bg-white w-auto px-6 py-2">
                                    <div className="">
                                        <div className="grid grid-cols-[1fr_auto] justify-self-end">                                        
                                            <h4 className="mt-5 mx-2 font-bold text-xs">{t('about_guidance_section.text.3.title')}</h4>
                                            <img
                                                src="/friendship-icon.png"
                                                alt="place image"
                                                className="h-12 w-12 shadow-lg self-baseline-last"
                                            />
                                        </div>
                                        <div className="text-gray-500 text-xs my-5 text-right">
                                            <p>{t('about_guidance_section.text.3.text.1')}</p><br />
                                            <p>{t('about_guidance_section.text.3.text.2')}</p><br />
                                            <p>{t('about_guidance_section.text.3.text.3')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 col-start-6 bg-transparent"></div>
                        </div>
                    </div>
                    </motion.div>
                </div>
            </div>
                
            {/* Section 7 */}
            <div className="relative h-auto bg-gray-800 px-2 pt-20 pb-5"
                style={{
                    backgroundImage: `url(/dunk.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
            {overlay && (
                <div className="absolute inset-0 bg-gray-900/80"></div>
            )}
                <div className="relative">
                    <SectionTitle
                        title={t('about_method_section.title')}
                        subtitle={t('about_method_section.subtitle')}
                        alignment="center"
                    />
                    <h2 className="text-xs text-center text-white font-thin my-5 px-5 md:px-50">{t('about_method_section.subtitle_1')}</h2>
                    <div className="flex justify-center items-center mx-5">
                        <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            <a
                                href={"#contact"}
                                className="inline-block bg-accent hover:bg-gold-700 text-white font-medium px-8 py-3 text-xs transition duration-300"
                            >
                                {t('about_method_section.b_title')}
                            </a>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        >
                        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 pb-10">
                            <div className="place-self-center md:place-self-end place-items-start grid grid-cols-1 gap-4 px-5 py-5 mx-5 w-90 md:w-80 mb-5 bg-white h-55 md:h-95">
                                <div className="space-y-2">
                                    <p className="text-accent text-sm font-bold text-center pb-6">
                                    {t('about_method_section.right_section.title')}
                                    </p>
                                    <p className="text-center text-xs text-gray-500">
                                        {t('about_method_section.right_section.text.1')}
                                    </p>
                                    <p className="text-center text-xs text-gray-500">{t('about_method_section.right_section.text.2')}</p>
                                    <p className="text-center text-xs text-gray-500">{t('about_method_section.right_section.text.3')}</p>
                                    <p className="text-center text-xs text-gray-500">{t('about_method_section.right_section.text.4')}</p>
                                </div>
                            </div>
                            <div className="place-self-center md:place-self-start grid grid-cols-1 gap-4 px-5 py-5 mx-5 w-90 md:w-80 bg-white h-70 md:h-95">
                                <div className="space-y-2">
                                    <p className="text-accent text-sm font-bold text-center pb-5 md:pb-10">            
                                        {t('about_method_section.left_section.title')}
                                    </p>
                                    <p className="text-center text-xs text-gray-500"> 
                                        {t('about_method_section.left_section.text.1')}
                                    </p>
                                    <p className="text-center text-xs text-gray-500">{t('about_method_section.left_section.text.2')}</p>
                                    <p className="text-center text-xs text-gray-500">{t('about_method_section.left_section.text.3')}</p>
                                    <p className="text-center text-xs text-gray-500 pb-5 md:pb-14">{t('about_method_section.left_section.text.4')}</p>
                                    <p className="text-center text-xs text-gray-500 font-italic">{t('about_method_section.left_section.text.5')}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
            
            {/* Section 8 */}
            <div className="relative h-auto bg-gray-800 py-10"
                style={{
                    backgroundImage: `url(/montain-3.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
            {overlay && (
                <div className="absolute inset-0 bg-white/50"></div>
            )}
                <div className="relative md:flex justify-center items-center mx-5 md:mx-50 ld:mx-40">
                    <div className="relative place-self-start mt-8 mr-20">                      
                        <h1 className="relative text-2xl font-bold mb-6 text-left text-gray-800">{t('about_guide_section.title')}</h1>
                        <h1 className="text-2sm  font-bold mb-6 text-left text-gray-800">"Éric Raby"</h1>
                        <div className="text-xs text-gray-800">
                            <p>
                                {t('about_guide_section.right_section.text.1')}               
                            </p><br />
                            <p>
                                {t('about_guide_section.right_section.text.2')} 
                            </p>
                            <p>
                                {t('about_guide_section.right_section.text.3')} 
                            </p>
                            <p>
                                {t('about_guide_section.right_section.text.4')} 
                            </p>
                            <p>
                                {t('about_guide_section.right_section.text.5')} 
                            </p><br />
                            <p>
                                {t('about_guide_section.right_section.text.6')} 
                            </p>
                        </div>
                    </div>                    
                    <div className="relative place-self-center md:self-baseline text-xs text-center space-y-5 w-80 bg-red-800 h-auto px-6 py-4 my-10 bg-white">
                        <h1 className="text-center font-bold text-2xl">63€</h1>
                        <p>
                            {t('about_guide_section.left_section.text.1')}                             
                        </p>
                        <p >
                            {t('about_guide_section.left_section.text.2')} 
                        </p>
                        <p className="text-center">
                            {t('about_guide_section.left_section.text.3')} 
                        </p>
                        <p className="text-center">
                            {t('about_guide_section.left_section.text.4')} 
                        </p>
                        <div className="flex justify-center items-center mx-5">
                            <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            >
                                <Link
                                    to={"/"}
                                    className="inline-block bg-accent hover:bg-gold-700 text-white text-xs px-8 py-3 text-lg transition duration-300"
                                >                                   
                                    {t('about_guide_section.left_section.text.b_title')} 
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 9 */}
            <div
            className={`relative py-18`}
            style={{
                backgroundImage: `url(/bodah.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            >
            {overlay && (
                <div className="absolute inset-0 bg-gray-900/80"></div>
            )}
                <h1 className="relative text-2xl text-center font-bold mb-4 text-white ">{t('client_feedback_section.title')}</h1>
                <h5 className="relative text-sm text-center font-light mb-4 text-white ">{t('client_feedback_section.title')}</h5>
                <div className="md:mx-25 lg:mx-50">
                    <CommentSwiper addNavigation={true} />
                </div>
            </div>

            {/* Section 10 */}

            {/* Section 11 */}
            <div id="faq"
            className={`relative h-auto`}
            style={{
                backgroundImage: `url(/sun-set.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            >
            {overlay && (
                <div className="absolute inset-0 bg-white/30"></div>
            )}
                <div className="relative py-20">
                    <h1 className="relative text-2xl font-bold mb-6 text-center text-white">{t('blog_answer_section.title')}</h1>
                    <h1 className="text-sm font-light mb-6 text-center text-white">{t('blog_answer_section.subtitle')}</h1>
                    <div className="md:flex md:justify-center items-center mx-5 md:space-x-10 md:mx-65 pb-5 z-50">
                        <div className="">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                >
                                <QAAccordion
                                    question={t('blog_answer_section.1.question')}
                                    answer={t('blog_answer_section.1.reponse')}
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.6 }}
                                >
                                <QAAccordion
                                    question={t('blog_answer_section.2.question')}
                                    answer={t('blog_answer_section.2.reponse')}
                                />
                            </motion.div>
                            
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.8 }}
                                >
                                <QAAccordion
                                    question={t('blog_answer_section.6.question')}
                                    answer={t('blog_answer_section.6.reponse')}
                                />
                            </motion.div>
                            
                        </div>
                        <div className="">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                >
                                <QAAccordion
                                    question={t('blog_answer_section.4.question')}
                                    answer={t('blog_answer_section.4.reponse')}
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.6 }}
                                >
                                <QAAccordion
                                    question={t('blog_answer_section.5.question')}
                                    answer={t('blog_answer_section.5.reponse')}
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.8 }}
                                >
                                <QAAccordion
                                    question={t('blog_answer_section.3.question')}
                                    answer={t('blog_answer_section.3.reponse')}
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>            
            </div>

            {/* Section 12 */}
            <div id="contact" className="bg-gray-100  min-h-screen py-10">
                <ContactForm
                    imageUrl="/offrande-time.jpg"
                    title={t('contact_section.title')}
                    email="eric.raby@hotmail.fr"
                    phone="+ 262 692 27 60 61"
                />
            </div>      

            {/* Section 13 */}


            {/* footer */}
            <Footer />
      
        </div>

        
    );
}
export default HomePage;