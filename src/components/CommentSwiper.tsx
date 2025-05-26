import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Quote } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

type CommentSwiperProps = {
  addNavigation: boolean;
};

/*const comments = [
  {
    name: 'Alice Johnson',
    pic: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'This app is amazing! So smooth and clean.',
  }, {
    name: 'Alice Johnson',
    pic: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'This app is amazing! So smooth and clean.',
  }, {
    name: 'Alice Johnson',
    pic: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'This app is amazing! So smooth and clean.',
  }, {
    name: 'Alice Johnson',
    pic: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'This app is amazing! So smooth and clean.',
  }, {
    name: 'Alice Johnson',
    pic: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'This app is amazing! So smooth and clean.',
  }, {
    name: 'Alice Johnson',
    pic: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'This app is amazing! So smooth and clean.',
  },
  {
    name: 'Mark Thompson',
    pic: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Incredible UX. I use it daily!',
  },
  {
    name: 'Lina Kim',
    pic: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'It just works. Beautiful design.',
  },
  {
    name: 'David Lee',
    pic: 'https://randomuser.me/api/portraits/men/76.jpg',
    text: 'yone! Highly recommend it to everyone! Highly recommend it to everyone!',
  },
];*/

export default function CommentSwiper({ addNavigation }: CommentSwiperProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();
  const comments = t('client_feedback_section.user', { returnObjects: true }) as {
    name: string;
    age: string;
    job: string;
    pic_url: string
    comment: string;
  }[];
  return (
    <div className="relative  ">

      <Swiper
        style={{ 
          '--swiper-navigation-size': '0.8rem',
          '--swiper-navigation-color': 'white'
        }}
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={70}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={addNavigation}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="mySwiper mx-50"
      >
        {comments.map((c, index) => (
          <SwiperSlide
            key={index}
            style={{ width: 'auto' }}
            className={`transition-all duration-300 ${
                index === activeIndex ? 'scale-105 z-10' : 'scale-95 opacity-80'
            }`}
        >
            <div className='border-1 border-white bg-gray-800 shadow-md h-auto w-65 my-10'>
                <div className="border-b-1 border-white">
                    <div className="relative place-self-center">
                        <img
                        src={c.pic_url}
                        alt={c.name}
                        className="relative place-self-center -top-8 w-auto h-18 object-cover z-30"
                        />
                        
                        <div className="relative -top-5">
                        <p className="font-bold text-sm text-gray-900 dark:text-white">{c.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{c.job}</p>
                        </div>                       
                    </div>
                </div>
                <div> 
                    <Quote size={50} fill="#A28956" strokeWidth={0} style={{ transform: 'rotate(180deg)' }} className="relative left-5 -top-6 w-auto object-cover z-30"/>
                    <p className="text-xs font-thin text-white text-left pb-8 px-5">{c.comment}</p>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
