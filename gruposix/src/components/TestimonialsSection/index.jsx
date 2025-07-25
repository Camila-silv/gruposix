import { Carousel } from "../index";

export default function TestimonialsSection({
  mobileMetabolic,
  metabolic,
  rejuvenation,
  mobileRejuvenation,
}) {
  return (
    <section className="my-10 container mx-auto px-10">
      <div>
        <h2 className="text-start text-4xl font-medium mb-6">
          Avaliações dos nossos clientes
        </h2>

        <Carousel>
          <div className="w-full  flex  shrink-0 md:px-12">
            <div className="w-full  h-full  flex flex-col rounded-[30px] overflow-hidden shadow-md  md:flex-row ">
              <div className="w-full flex items-stretch md:w-[33%]">
                <picture className="w-full">
                  <source media="(min-width:768px)" srcset={metabolic} />
                  <img
                    src={mobileMetabolic}
                    alt="Ilustração Metabolic"
                    title="Ilustração Metabolic"
                    loading="lazy"
                    className="w-full flex flex-1 object-cover h-full"
                  />
                </picture>
              </div>
              <div className="w-full p-8 flex flex-col md:w-[66%]">
                <h3 className="font-bold text-3xl mb-4">Heloisa Stefany</h3>
                <div className="flex gap-2 items-center mb-2">
                  <i class="fa-solid fa-star text-[#FACC15]"></i>
                  <i class="fa-solid fa-star text-[#FACC15]"></i>
                  <i class="fa-solid fa-star text-[#FACC15]"></i>
                  <i class="fa-solid fa-star text-[#FACC15]"></i>
                  <i class="fa-solid fa-star text-[#FACC15]"></i>
                </div>
                <p className="text-lg">
                  Sinceramente, comprei meio no impulso e não esperava muito…
                  mas me surpreendi. O gosto é suave, não enjoa, e percebi que
                  me sinto menos estufada durante o dia. Não mudou minha vida do
                  dia pra noite, mas é aquele tipo de cuidado diário que faz
                  diferença com o tempo. Curti bastante.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full  flex  shrink-0 md:px-12">
            <div className="w-full  h-full  flex flex-col rounded-[30px] overflow-hidden shadow-md  md:flex-row ">
              <div className="w-full flex items-stretch md:w-[33%]">
                <picture className="w-full">
                  <source media="(min-width:768px)" srcset={rejuvenation} />
                  <img
                    src={mobileRejuvenation}
                    alt="Ilustração  Rejuvenation Advanced"
                    title="Ilustração  Rejuvenation Advanced"
                    loading="lazy"
                    className="w-full flex flex-1 object-cover h-full"
                  />
                </picture>
              </div>
              <div className="w-full p-8 flex flex-col md:w-[66%]">
                <h3 className="font-bold text-3xl mb-4">Natália Carolina</h3>
                <div className="flex gap-2 items-center mb-2">
                  <i class="fa-solid fa-star text-[#FACC15]"></i>
                  <i class="fa-solid fa-star text-[#FACC15]"></i>
                  <i class="fa-solid fa-star text-[#FACC15]"></i>
                  <i class="fa-solid fa-star text-[#FACC15]"></i>
                  <i class="fa-solid fa-star text-[#FACC15]"></i>
                </div>
                <p className="text-lg">
                  minha pele tá mais bonita e nem parece que é suplemento,
                  parece docinho kkk amei demais 💖
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
