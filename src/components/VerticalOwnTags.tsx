 
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import { Quote } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

/*const comments = [
  {
    author: 'Alice Johnson',
    text: 'This app is amazing! So smooth and clean.',
  }, {
    author: 'Alice Johnson',
    text: 'This app is amazing! So smooth and clean.',
  }, {
    author: 'Alice Johnson',
    text: 'This app is amazing! So smooth and clean.',
  }, {
    author: 'Alice Johnson',
    text: 'This app is amazing! So smooth and clean.',
  }, {
    author: 'Alice Johnson',
    text: 'This app is amazing! So smooth and clean.',
  }, {
    author: 'Alice Johnson',
    text: 'This app is amazing! So smooth and clean.',
  },
  {
    author: 'Mark Thompson',
    text: 'Incredible UX. I use it daily!',
  },
  {
    author: 'Lina Kim',
    text: 'It just works. Beautiful design.',
  },
];*/

const VerticalOwnTags = () => {
    const { t } = useTranslation();
    const comments = t('vertical_tags_section.comments', { returnObjects: true }) as {
      author: string;
      text: string;
    }[];
    return (
            <div className="relative border border-gray-700 px-2 md:px-20 lg:px-32 my-16 mx-8 md:mx-15 lg:mx-42 w-full h-58 md:h-48 bg-gray-900/80">
                <Swiper
                    style={{ 
                      '--swiper-pagination-color': '#CFAB65',
                      '--swiper-pagination-bullet-inactive-color': 'gray'
                    }}
                    direction={'vertical'}
                    pagination={{
                      clickable: true,
                    }}
                    loop={true}autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                {comments.map((c, index) => (  
                    <SwiperSlide 
                    key={index} className='space-y-2 md:space-y-5 px-5 md:px-8 pt-5'>
                       { /*<img
                        src="placeholder.svg"
                        alt="Image tags"
                        className="relative place-self-start w-10 h-auto my-2 object-cover z-30"
                        />*/}
                        <Quote size={55} fill="#CFAB65" strokeWidth={0} style={{ transform: 'rotate(180deg)' }}/>
                        <p className='text-left text-sm text-white font-bold'>{c.author}</p>
                        <h1 className='text-left text-xs text-white font-light my-2'>{c.text}</h1>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
    );
};

export default VerticalOwnTags;