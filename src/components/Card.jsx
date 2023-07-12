
export default function Card({ imagem, descricao,sub }) {
  return (
    <div className="w-80 md:w-96 p-5">
      <div className='md:w-96 drop-shadow-sm '>{imagem}</div>
      <div className="flex justify-center flex-col items-center">
        <h2 className="text-white font-black text-xl text-center">{descricao}</h2>
        <h2 className="text-white">{sub}</h2>
      </div>
    </div>
  )
}