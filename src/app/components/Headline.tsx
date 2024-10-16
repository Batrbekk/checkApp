import Image from "next/image";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import Carousel1 from "@/public/carousel/1.svg";
import Carousel2 from "@/public/carousel/2.svg";
import Carousel3 from "@/public/carousel/3.svg";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Link from "next/link";

const Headline = () => {

  const CarouselList = [
    {
      img: Carousel1,
      title: 'Спортивный',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      side: 'right'
    },
    {
      img: Carousel2,
      title: 'Женский',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      side: 'left'
    },
    {
      img: Carousel3,
      title: 'Мужской',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      side: 'left'
    }
  ];

  return (
    <section className="lg:container lg:mx-auto lg:pb-8 py-0">
      <Carousel className="w-full lg:rounded-3xl overflow-hidden">
        <CarouselContent>
          {CarouselList.map((item, index) => (
            <CarouselItem key={index} className="relative">
              <Image src={item.img} alt="carousel-img" className="w-full h-[340px] lg:h-auto object-cover" />
              <div className={cn(
                'absolute top-[72px] flex flex-col gap-y-4 max-w-[280px] object-cover lg:max-w-[518px]',
                item.side === 'left' ? 'lg:left-16 left-8 text-left' : 'lg:right-16 right-4 text-right items-end'
              )}>
                <h1 className="text-white lg:text-6xl text-3xl font-semibold">{item.title}</h1>
                <p className="text-[#E2ECFE] lg:text-xl text-sm font-medium">{item.text}</p>
                <Link
                  href="#check-list"
                  className="px-4 py-2 text-white bg-transparent border border-white w-fit rounded-lg hover:border-[#519B8E] hover:bg-[#519B8E] hover:drop-shadow-md transition ease-in-out delay-150 text-base font-medium"
                >
                  Узнать подробнее
                </Link>
              </div>
              <div className="flex items-center gap-x-2 absolute bottom-8 left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-[100px]">
                {Array.from({ length: 3 }).map((_, indexMini) => (
                  <div
                    key={indexMini}
                    className={cn(
                      'h-1',
                      index === indexMini ? 'w-10 bg-[#519B8E]' : 'w-4 bg-white/[0.5]'
                    )}
                  />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export default Headline;
