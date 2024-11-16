import {useLayoutEffect, useRef, useState} from "react";
import Image from "next/image";
import Stepper1 from "@/public/stepper/1.svg";
import Stepper2 from "@/public/stepper/2.svg";
import Stepper3 from "@/public/stepper/3.svg";
import Stepper4 from "@/public/stepper/4.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(1);
  const headingRef = useRef(null);

  useLayoutEffect(() => {
    const steps = gsap.utils.toArray(".step-section");

    let stepTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".stepper-container",
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const newActiveStep =
            Math.round(self.progress * (steps.length - 1)) + 1;
          setActiveStep(newActiveStep);
        },
      },
    });

    gsap.fromTo(
      headingRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2, // Увеличили продолжительность для плавности
        ease: "power2.out", // Добавили функцию плавности
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 0.5, // Настроили scrub для плавного перехода
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const stepList = [
    {
      id: 1,
      title: "Консилиум",
      content: (
        <>
          <p className="text-[#4B5162] text-xl max-w-[560px]">
            Мы объединили лучших{" "}
            <span className="font-semibold">
              врачей доказательной медицины
            </span>{" "}
            в формате консилиума.
          </p>
          <Image src={Stepper1} alt="phone-img" className="-z-10 mt-8" />
        </>
      ),
    },
    {
      id: 2,
      title: "Анкетирование",
      content: (
        <>
          <p className="text-[#4B5162] text-xl max-w-[560px]">
            <span className="font-semibold">Удобные онлайн-анкеты </span> с
            персонализирующим алгоритмом представляют собой прием сразу от
            нескольких специалистов.
          </p>
          <Image src={Stepper2} alt="call-img" className="mt-8" />
        </>
      ),
    },
    {
      id: 3,
      title: "Персонализированный чекап",
      content: (
        <>
          <p className="text-[#4B5162] text-xl max-w-[560px]">
            Пройдите онлайн-анкетирование и получите{" "}
            <span className="font-semibold">
              свой персонализированный план здоровья за 5 минут.
            </span>
          </p>
          <Image src={Stepper3} alt="call-img" className="mt-8" />
        </>
      ),
    },
    {
      id: 4,
      title: "Прозрачность",
      content: (
        <>
          <p className="text-[#4B5162] text-xl max-w-[560px]">
            Выбор лабораторий и врачей остается за вами, мы можем только их
            порекомендовать. Это отражает наш{" "}
            <span className="font-semibold">
              открытый и непредвзятый подход
            </span>
            , основанный на заботе о вашем здоровье.
          </p>
          <Image src={Stepper4} alt="call-img" className="mt-8" />
        </>
      ),
    },
  ];

  return (
    <>
      <div className="flex justify-center mt-16">
        <h1 className="text-[#1C1F25] text-3xl lg:text-5xl font-semibold w-full lg:w-2/3 text-center">
          CheckApp - персонализированные чекапы от консилиумов врачей
        </h1>
      </div>
      <div className="stepper-container flex flex-col items-start justify-center gap-y-8 min-h-dvh">
        <h1
          ref={headingRef}
          className="text-4xl text-[#1C1F25] font-semibold ml-28"
        >
          Как работает CheckApp?
        </h1>
        <div className="container mx-auto hidden lg:flex items-center gap-x-16">
          <div className="flex flex-col items-end gap-y-16">
            {stepList.map((step) => (
              <div
                key={step.id}
                className="flex items-center justify-between w-full"
              >
                <div
                  className={cn(
                    "rounded-full w-10 h-10 flex items-center justify-center bg-[#1D7CBC]",
                    activeStep === step.id ? "bg-[#1D7CBC]" : "bg-[#E6E6E6]"
                  )}
                >
                  <p className="text-white text-xl font-medium">{step.id}</p>
                </div>
                <h1
                  className={`font-bold text-4xl w-[90%] uppercase leading-none cursor-pointer text-right ${
                    activeStep === step.id
                      ? "text-[#1D7CBC]"
                      : "text-[#E6E6E6]"
                  }`}
                >
                  {step.title}
                </h1>
              </div>
            ))}
          </div>
          <div className="w-1/2 relative h-[500px] flex flex-col justify-center">
            {stepList.map((step) => (
              <div
                key={step.id}
                className={`step-section ${
                  activeStep === step.id
                    ? "opacity-0 animate-fadeinright"
                    : "hidden"
                }`}
              >
                {step.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stepper;
