import video from "../../assets/videos/video.mp4";
import metabolic from "../../assets/images/metabolic/metabolic.webp"

export default function Hero() {
  return (
    <div className="container mx-auto px-10">
      <h1 className="text-center text-5xl font-medium ">
        Suplementos Alimentares
      </h1>
      <p className="text-center my-6">
        Produtos naturais, suplementos e itens de bem-estar de alta qualidade
        para todas as idades. Na VitaSix, você encontrará uma gama
        cuidadosamente selecionada de suplementos alimentares e produtos
        naturais de saúde, ideais para quem busca um estilo de vida saudável e
        equilibrado.
      </p>
      <div className="mx-auto w-100 flex justify-center">
       

        <video
          width="700"
          height="315"
          controls
          loading="lazy"
          className="h-[315px] object-contain"
          poster={metabolic}
        >
          <source src={video} type="video/mp4" />
          Seu navegador não suporta esse vídeo.
        </video>
      </div>
    </div>
  );
}
