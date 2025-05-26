"use client"

import type React from "react"

import { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

const citylist = [
  {
    id: 1,
    title: 'Antananarivo',
    description: "Capitale politique et économique, Antananarivo est une ville perchée sur des collines, mêlant histoire royale, marchés animés et quartiers modernes. On y trouve le Palais de la Reine, des vues panoramiques et une vie culturelle riche.",
    imageUrl: "/Antananarivo-imp.jpg",
    plan: "VIP, Premium, LITE, VIP +",
  },
  {
    id: 2,
    title: "Tamatave",
    description: "Située sur la côte Est, Toamasina est le principal port du pays. Son climat tropical, ses plages, et son rôle central dans le commerce en font une ville stratégique, vivante et accueillante.",
    imageUrl: "/Toamasina-imp.jpg",
    plan: "VIP, Premium",
  },
  {
    id: 3,
    title: "Fianarantsoa",
    description: "Cité universitaire et religieuse, Fianarantsoa est le cœur culturel des hauts plateaux du sud. Elle est aussi le point de départ pour explorer les vignobles, le parc de Ranomafana, et les villages traditionnels.",
    imageUrl: "/Fianarantsoa-imp.jpg",
    plan: "Premium",
  },
  {
    id: 4,
    title: "Majanga",
    description: "Célèbre pour sa promenade en bord de mer, son célèbre baobab géant et son ambiance paisible, Mahajanga est une ville portuaire du nord-ouest prisée pour les vacances et les couchers de soleil.",
    imageUrl: "/Mahajanga-imp.webp",
    plan: "VIP +, Premium",
  },
  {
    id: 5,
    title: "Antsirabe",
    description: "Située sur les hauts plateaux, Antsirabe est connue pour ses sources chaudes, ses pousse-pousse colorés, ses artisans et son climat frais. Elle mêle charme colonial et vie locale animée.",
    imageUrl: "/Antsirabe-imp.jpg",
    plan: "VIP, Premium",
  },
  {
    id: 6,
    title: "Morondava",
    description: "Célèbre pour sa majestueuse Allée des Baobabs, Morondava est une ville côtière du sud-ouest au charme unique. Elle est aussi le point d’accès au parc de Kirindy et à la culture Sakalava.",
    imageUrl: "/Morondava-imp.jpg",
    plan: "VIP, LITE, Premium",
  },
  {
    id: 7,
    title: "Ambatolampy",
    description: "Au sud d’Antananarivo, Ambatolampy est le centre de la métallurgie artisanale malgache, célèbre pour ses fonderies d’aluminium. Une ville discrète mais essentielle dans le tissu industriel local.",
    imageUrl: "/Ambatolampy-imp.jpg",
    plan: "Premium",
  },
  {
    id: 8,
    title: "Farafangana",
    description: "Située au sud-est, Farafangana est bordée par l’océan Indien. C’est une ville agricole importante, point de départ vers la forêt tropicale du parc de Manombo et riche en diversité ethnique.",
    imageUrl: "/Farafangana-imp.jpg",
    plan: "Premium",
  },
  {
    id: 8,
    title: "Ambositra",
    description: "Située dans les Hautes Terres, Ambositra est réputée pour sa richesse artisanale : sculptures sur bois, marqueterie et objets traditionnels issus du savoir-faire Zafimaniry.",
    imageUrl: "/Ambositra-imp.webp",
    plan: "Premium",
  },
  {
    id: 8,
    title: "Manakara",
    description: "Ville portuaire du Sud-Est, Manakara est connue pour son charme tranquille, sa côte sauvage, et comme terminus du mythique train Fianarantsoa–Côte Est. Elle offre un cadre naturel unique entre mer, rivière et canaux.",
    imageUrl: "/Manakara-imp.jpg",
    plan: "Premium",
  },
];

export default function Tswiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={50}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="mySwiper"
      >
        {citylist.map((c, index) => (
          <SwiperSlide
            key={index}
            style={{ width: 'auto' }}
            className={`transition-all duration-300 ${
                index === activeIndex ? 'scale-105 z-10' : 'scale-95 opacity-80'
            }`}
          >
            <div className="h-auto w-90 mb-10 mt-5 bg-white dark:bg-gray-800 rounded-sm overflow-hidden shadow-lg">
                <div className="h-50">
                    <img src={c.imageUrl} alt="ville"  className="h-full w-full object-cover"/>
                </div>
                <div className="absolute top-8 left-4 bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
                    {c.plan}
                </div>
                <div className="text-left mx-2 my-5">   
                    <h3 className="text-xl font-bold dark:text-white">{c.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{c.description}</p>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>      
    </div>
  )
}
