export default function Cta() {
    return (
          <div className="bg-[#3CB4E3]">
            <div className="container mx-auto px-10 py-20 flex flex-col items-center justify-center">
              <span className="block text-center text-[#fafafa] font-bold tracking-[8.32px] leading-[39.6px] text-[20px] uppercase">
                Entre em contato
              </span>
              <h2 className="text-[#fafafa] not-italic leading-[38px] mb-4   text-center text-[48px] font-black uppercase">
                Agora mesmo!
              </h2>
              <p className="text-[#fafafa] leading-[28px] text-[24px] font-bold text-center">
                Estamos a disposição para oferecer o melhor atendimento
              </p>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-center uppercase text-[#3CB4E3] text-[18px] py-2.5 px-5 bg-[#fafafa] mt-5 rounded-[30px]"
              >
                Fale Conosco
              </a>
            </div>
          </div>)
}