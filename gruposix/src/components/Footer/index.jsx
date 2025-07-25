export default function Footer() {
  return (
    <footer className="bg-gray-100 p-6 text-sm text-gray-600 text-center">
      <p className="mb-2">
        Este conteúdo tem caráter informativo e não substitui orientação médica
        profissional.
      </p>
      <p>
        <a href="/privacidade" className="underline hover:text-gray-800">
          Política de Privacidade
        </a>{" "}
        |{" "}
        <a href="/termos" className="underline hover:text-gray-800">
          Termos de Uso
        </a>
      </p>
    </footer>
  );
}
