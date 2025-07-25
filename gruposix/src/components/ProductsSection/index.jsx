import { Carousel } from "../index";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductsSection({
  mobileMetabolic,
  metabolic,
  rejuvenation,
  mobileRejuvenation,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);

  const handleBuyClick = (e) => {
    e.preventDefault();

    const utms = {
      utm_source: searchParams.get("utm_source") || "",
      utm_medium: searchParams.get("utm_medium") || "",
      utm_campaign: searchParams.get("utm_campaign") || "",
      utm_content: searchParams.get("utm_content") || "",
      utm_term: searchParams.get("utm_term") || "",
    };

    localStorage.setItem("utms", JSON.stringify(utms));


    navigate("/thank-you-page");
  };

  return (
    <section className="my-10 container mx-auto px-10">
      <div>
        <h2 className="text-start text-4xl font-medium mb-6">
          Nossos produtos
        </h2>

        <Carousel>
          <div className="w-full items-stretch flex shrink-0 md:px-12">
            <div className="w-full flex flex-col rounded-[30px] overflow-hidden shadow-md md:flex-row">
              <div className="w-full flex items-stretch md:w-[33%]">
                <picture className="w-full">
                  <source media="(min-width:768px)" srcSet={metabolic} />
                  <img
                    src={mobileMetabolic}
                    alt="Ilustração Metabolic Boost"
                    title="Ilustração Metabolic Boost"
                    loading="lazy"
                    className="w-full object-cover h-full"
                  />
                </picture>
              </div>
              <div className="w-full p-8 flex flex-col md:w-[66%]">
                <h3 className="font-bold text-3xl mb-6">Metabolic Boost</h3>
                <p className="text-lg">
                  Metabolic Boost é uma fórmula avançada composta por
                  ingredientes cientificamente selecionados para apoiar a perda
                  de peso, melhorar a performance física e fortalecer a saúde
                  geral. Com ácido clorogênico, cafeína natural, extrato de chá
                  verde, L-carnitina, extrato de feno grego, picolinato de
                  cromo, e vitaminas B1, B6, D e K2, este suplemento proporciona
                  benefícios como aumento da termogênese, controle do apetite e
                  regulação do metabolismo, promovendo mais energia e
                  vitalidade.
                </p>

                <ul className="mt-6">
                  <li className="flex gap-1 items-center">
                    <i class="fa-solid fa-check"></i> Aceleração do Metabolismo
                    e Queima de Gordura
                  </li>
                  <li className="flex gap-1 items-center">
                    <i class="fa-solid fa-check"></i> Aumento de Energia e
                    Vitalidade
                  </li>
                  <li className="flex gap-1 items-center">
                    <i class="fa-solid fa-check"></i> Facilitação do Transporte
                    de Gordura
                  </li>
                  <li className="flex gap-1 items-center">
                    <i class="fa-solid fa-check"></i>
                    Controle do Apetite e Melhora do Humor
                  </li>
                  <li className="flex gap-1 items-center">
                    <i class="fa-solid fa-check"></i>
                    Estabilização dos Níveis de Açúcar no Sangue
                  </li>
                  <li className="flex gap-1 items-center">
                    <i class="fa-solid fa-check"></i>
                    Fortalecimento da Saúde Óssea e Cardiovascular
                  </li>
                </ul>
                <span className="mt-6 text-[18px]">
                  À vista <span>R$ 259,90</span>
                </span>
                <span className="text-[40px] text-green-700">
                  <span className="text-[18px] text-black">12x</span> R$ 27,85
                </span>
                <footer className="flex justify-end mt-6">
                  <button
                    onClick={handleBuyClick}
                    className="inline-block py-3 px-7 font-semibold uppercase tracking-wider border-2 border-transparent rounded-[30px] bg-[#3CB4E3] text-black"
                  >
                    Comprar
                  </button>
                </footer>
              </div>
            </div>
          </div>

          <div className="w-full items-stretch flex shrink-0 md:px-12">
            <div className="w-full flex flex-col rounded-[30px] overflow-hidden shadow-md md:flex-row">
              <div className="w-full flex items-stretch md:w-[33%]">
                <picture className="w-full">
                  <source media="(min-width:768px)" srcSet={rejuvenation} />
                  <img
                    src={mobileRejuvenation}
                    alt="Ilustração Rejuvenation Advanced"
                    title="Ilustração Rejuvenation Advanced"
                    loading="lazy"
                    className="w-full object-cover h-full"
                  />
                </picture>
              </div>
              <div className="w-full p-8 flex flex-col md:w-[66%]">
                <h3 className="font-bold text-3xl mb-6">
                  Rejuvenation Advanced
                </h3>
                <p className="text-lg">
                  Rejuvenation Advanced é uma fórmula inovadora que combina
                  Ácido Clorogênico, Pectina, Zinco e Vitaminas A, D e E. Este
                  suplemento, cientificamente desenvolvido, auxilia na
                  regeneração celular, promove a produção de colágeno e
                  fortalece o sistema imunológico. Com propriedades
                  antioxidantes, contribui para uma pele mais saudável e
                  retardar os sinais do envelhecimento. Em formato de gomas com
                  delicioso sabor de Frutas Vermelhas, Rejuvenation Advanced
                  oferece uma maneira prática e saborosa de cuidar da sua saúde
                  e beleza.
                </p>

                <ul className="mt-6">
                  <li className="flex gap-1 items-center">
                    {" "}
                    <i class="fa-solid fa-check"></i>
                    Regeneração e Proteção Celular
                  </li>
                  <li className="flex gap-1 items-center">
                    {" "}
                    <i class="fa-solid fa-check"></i>
                    Produção Natural de Colágeno
                  </li>
                  <li className="flex gap-1 items-center">
                    {" "}
                    <i class="fa-solid fa-check"></i>
                    Fortalecimento do Sistema Imunológico
                  </li>
                  <li className="flex gap-1 items-center">
                    {" "}
                    <i class="fa-solid fa-check"></i>
                    Controle do Apetite e Digestão Saudável
                  </li>
                  <li className="flex gap-1 items-center">
                    {" "}
                    <i class="fa-solid fa-check"></i>
                    Hidratação e Elasticidade da Pele
                  </li>
                  <li className="flex gap-1 items-center">
                    {" "}
                    <i class="fa-solid fa-check"></i>
                    Prevenção de Danos Oxidativos
                  </li>{" "}
                </ul>
                <span className="mt-6 text-[18px]">
                  À vista <span>R$ 259,90</span>
                </span>
                <span className="text-[40px] text-green-700">
                  <span className="text-[18px] text-black">12x</span> R$ 27,85
                </span>
                <footer className="flex justify-end mt-6">
                  <button
                    onClick={handleBuyClick}
                    className="inline-block py-3 px-7 font-semibold uppercase tracking-wider border-2 border-transparent rounded-[30px] bg-[#3CB4E3] text-black"
                  >
                    Comprar
                  </button>
                </footer>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
