import partners1 from "@/public/partners/1.svg";
import partners2 from "@/public/partners/2.svg";
import partners3 from "@/public/partners/3.svg";
import partners4 from "@/public/partners/4.svg";
import partners5 from "@/public/partners/5.svg";
import partners6 from "@/public/partners/6.svg";

import Image from "next/image";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

const Partners = () => {
  const partners = [partners1, partners2, partners3, partners4, partners5, partners6];

  return (
    <section id="partners" className="container mx-auto px-4 lg:px-0 py-16 lg:py-24 flex flex-col items-center gap-y-5">
      <h1 className="text-center text-[#1C1F25] font-semibold text-3xl lg:text-5xl">Нас поддержали</h1>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          AutoScroll({
            startDelay: 0
          })
        ]}
        className="w-full mt-4 md:mt-8"
      >
        <CarouselContent className="py-5">
          {partners.map((partner, index) => (
            <CarouselItem key={index} className="basis-1/4">
              <Image src={partner} alt="partner-logo" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Partners;
