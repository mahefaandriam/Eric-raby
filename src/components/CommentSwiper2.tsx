import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';

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
    text: 'yone! Highly recommend it to everyone!everyone! Highly recommend it everyone! Highly recommend it everyone! Highly recommend it everyone! Highly recommend it everyone! Highly recommend it everyone! Highly recommend it  Highly recommend it to everyone!',
  },
];*/

export default function CommentSwiper2() {
  const { t } = useTranslation();
  const comments = t('about_action1_section.text', { returnObjects: true }) as {
    pic_url: string;
    title: '';
    text: string;
  }[];
  return (
    <div className="relative  ">

      <Swiper
        style={{ 
          '--swiper-pagination-color': '#CFAB65',
          '--swiper-pagination-bullet-inactive-color': 'black'
        }}
        slidesPerView={1}
        spaceBetween={90}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {comments.map((c, index) => (
          <SwiperSlide
            key={index}
            style={{ width: 'auto' }}
        >
            <div className='bg-white shadow-md h-auto my-10 pt-5'>
                <div className="">
                    <div className="relative place-self-center space-y-5">
                        <img 
                        src={c.pic_url}
                        alt="A Pictures for Words"
                        className="relative place-self-center w-20 max-h-25 object-cover z-30"
                        />
                        <div className="">
                          <p className="font-thin text-xs text-gray-900">{c.title}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-gray-700 text-xs text-black text-center pt-5 pb-8 mx-5">{c.text}</p>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
