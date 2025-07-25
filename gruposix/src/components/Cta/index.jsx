export default function Cta() {
    return (
          <div className="bg-[#3CB4E3]">
            <div className="container mx-auto px-10 py-20 flex flex-col items-center justify-center">
              <span className="block text-center text-black font-bold tracking-[8.32px] leading-[39.6px] text-[20px] uppercase">
                Entre em contato
              </span>
              <h2 className="text-black not-italic leading-[38px] mb-4   text-center text-[48px] font-black uppercase">
                Agora mesmo!
              </h2>
              <p className="text-black leading-[28px] text-[24px] font-bold text-center">
                Estamos a disposição para oferecer o melhor atendimento
              </p>
              <a
                href="https://web.whatsapp.com/send?phone=5511982137774&text=Quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos%20da%20VitaSix"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-center uppercase text-black text-[18px] py-2.5 px-5 bg-[#fafafa] mt-5 rounded-[30px]"
              >
                Fale Conosco
              </a>
            </div>
          </div>)
}