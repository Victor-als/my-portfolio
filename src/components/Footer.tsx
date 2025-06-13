import logoBranco from "../assets/logo-branco.svg";
export default function Footer () {
  return (
    <footer className="text-gray-400 text-lg flex items-center justify-center h-18 mt-20">
      <p>
        Desenvolvido por 
      </p>
      <img src={logoBranco} alt="" className="w-28 h-20"/>
    </footer>
  )
}