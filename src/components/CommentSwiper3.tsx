import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
    text: 'yone! Highly recommend it to everyone! Highly recommend it d it to everyone! Highly recommend it d it to everyone! Highly recommend it d it to everyone! Highly recommend it d it to everyone! Highly recommend it d it to everyone! Highly recommend it to everyone!',
  },
];*/

export default function CommentSwiper3({ addNavigation }: CommentSwiperProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();
  const comments = t('about_action1_section.text', { returnObjects: true }) as {
    title: String;
    text: string;
  }[];
  return (
    <div className="relative  ">

      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
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
        className="mySwiper"
      >
        {comments.map((c, index) => (
          <SwiperSlide
            key={index}
            style={{ width: 'auto' }}
            className={`transition-transform duration-300 ease-in-out ${
                index === activeIndex ? 'scale-105 z-10' : 'scale-95 opacity-80'
            }`}
        >
            <div className='bg-gray-800 shadow-md h-auto w-72 my-8 md:my-15 py-4'>
                <div className="">
                    <div className="relative place-self-center">
                        <div className="relative ">
                            <p className="font-bold text-xs text-white ">{c.title}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-gray-700 text-xs font-thin text-white text-center py-5 px-5">{c.text}</p>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
