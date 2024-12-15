import Card1 from "@/public/cards/1.svg";
import Card2 from "@/public/cards/2.svg";
import Card3 from "@/public/cards/3.svg";

import Link from "next/link";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";

const CheckCards = () => {
  const cardList = [
    {
      img: Card1,
      title: 'Спортивный',
      link: '/sportTest',
      price: '5 990 ₸'
    },
    {
      img: Card2,
      title: 'Женский',
      link: '/womanTest',
      price: '4 990 ₸'
    },
    {
      img: Card3,
      title: 'Мужской',
      link: '/manTest',
      price: '4 990 ₸'
    }
  ];

  return (
    <section id="check-list" className="container mx-auto mt-24 flex flex-col gap-y-12 items-center px-4 lg:px-0">
      <h1 className="text-[#1C1F25] text-3xl lg:text-5xl font-semibold text-center">Персонализируй свой чекап</h1>
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 200
          }),
        ]}
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent>
          {cardList.map((card, index) => (
            <CarouselItem key={index} className="basis-80 lg:basis-1/3 relative flex items-end justify-center group">
              <Image src={card.img} alt="check-card" />
              <div className="absolute flex flex-col items-center gap-y-2 bottom-4 lg:bottom-8 w-[80%]">
                <h4 className="text-white font-semibold text-xl lg:text-4xl">{card.title}</h4>
                <p className="text-white text-lg">Цена: {card.price}</p>
                <Link href={card.link} className="text-white border rounded border-white mt-2 flex items-center justify-center w-full px-4 py-2 opacity-0 group-hover:opacity-100 transition duration-300">
                  Узнать подробнее
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export default CheckCards;
