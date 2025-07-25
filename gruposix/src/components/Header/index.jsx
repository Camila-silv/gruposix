import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.svg"

export default function Header() {
  return (
    <div>
      <div className="p-[8px] bg-[#f7f6f8]">
        <div className="container mx-auto">
          <span className="block text-center">
            Bem-vindo a <strong>VitaSix!</strong>
          </span>
        </div>
      </div>
      <header className="py-[24px] h-[88px]  border-b ">
        <div className="container mx-auto flex justify-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo da Vitasix"
              title="Logo da Vitasix"
              height="40"
              width="135"
              className="h-[40px] w-[135px]"
            />
          </Link>
        </div>
      </header>
    </div>
  );
}
