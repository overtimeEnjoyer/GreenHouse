import { MainPageImages } from "@/public/images/mainPage";
import { TreePine, Shield, Users, Flower2, CarFront, Bike } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Users,
    title: "Дитячий майданчик",
    description: "Безпечний простір для активних ігор дітей різного віку.",
  },
  {
    icon: Bike,
    title: "Спортивні зони",
    description: "Місця для занять спортом та активного відпочинку.",
  },
  {
    icon: TreePine,
    title: "Відпочинкові зони з лавками",
    description: "Затишні місця для релаксу та спілкування.",
  },
  {
    icon: Flower2,
    title: "Доріжки та ландшафтне озеленення",
    description: "Доглянуті прогулянкові стежки серед зелені.",
  },
  {
    icon: Shield,
    title: "Простір без авто у дворі",
    description: "Безпечний двір без машин для комфортного відпочинку.",
  },
  {
    icon: CarFront,
    title: "Паркування винесене за периметр",
    description: "Парковка розташована за межами двору для безпеки та тиші.",
  },
];

export function Yard() {
  return (
    <section className="py-4 md:py-12 flex flex-col items-center ">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h2 className="mb-6 heading-2 text-[var(--color-graphite)]">
            Безпека. Простір. Комфорт.
          </h2>
          <p className="text-lead heading-3 text-[var(--color-grey-600)] px-3">
            Ваш двір — це не просто територія. Це місце, де діти гуляють у
            безпеці, де можна випити каву на лавці, тренуватися на вуличних
            тренажерах або зустрітися з сусідами.
          </p>
        </div>

        <div className="mb-10">
          <div className="relative px-3 overflow-hidden">
            <Image
              src={MainPageImages.shemeYard}
              alt="Yard and courtyard"
              className="w-full lg:w-2/3 mx-auto h-auto object-cover"
            />
          </div>
        </div>
        <div className="flex text-center flex items-center justify-center">
          <h2 className="text-lead w-10/12 heading-3 text-[var(--color-grey-600)] px-3 pb-3">
            Це територія, де відчувається простір. Двір, у який хочеться вийти —
            де приємно проводити час
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--color-primary-green)]/10 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-[var(--color-primary-green)]" />
                </div>
                <h4 className="mb-2 text-[var(--color-graphite)]">
                  {feature.title}
                </h4>
                <p className="text-[var(--color-grey-500)]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
