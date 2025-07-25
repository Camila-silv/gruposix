import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ThankyouPage() {
  const [utms, setUtms] = useState(null);

  useEffect(() => {
    const storedUtms = localStorage.getItem("utms");

    if (storedUtms) {
      try {
        const parsed = JSON.parse(storedUtms);
        setUtms(parsed);
      } catch (err) {
        console.error("Erro ao parsear UTMs do localStorage:", err);
      }
    }
  }, []);

  return (
    <div className=" flex items-center justify-center px-6" style={{ height: 'calc(100vh - 264px)' }}>
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Obrigado pela sua compra!
        </h1>

        <p className="text-gray-700 mb-6">
          Seu pedido foi confirmado com sucesso. Em breve você receberá mais
          informações por e-mail.
        </p>

        {utms && Object.values(utms).some((val) => val) && (
          <div className="bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-700 text-left mb-6">
            <p className="font-semibold mb-2 text-center">
              Parâmetros de rastreamento:
            </p>
            <ul className="list-disc list-inside">
              {Object.entries(utms).map(([key, value]) =>
                value ? (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ) : null
              )}
            </ul>
          </div>
        )}

        <Link
          to="/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-full transition"
        >
          Continuar Navegando
        </Link>
      </div>
    </div>
  );
}
