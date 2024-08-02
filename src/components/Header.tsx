export function Header() {
  return (
    <header className="flex justify-between px-5">
      <div className="flex flex-col gap-1">
        <span className="font-bold font-nunito text-3xl tracking-[-0.25px] uppercase">
          Lucas de Moraes Souza
        </span>
        <span className="text-subtitle-main/60 font-medium font-inter text-xl ">
          Desenvolvedor Frontend
        </span>
      </div>
      <div className="w-1/2 flex justify-between">
        <div className="flex gap-10">
          <span className=" text-[#545454] font-inter font-medium text-lg">
            Email:
          </span>
          <span className="font-inter font-normal text-lg">
            lucas.msouza@hotmail.com
          </span>
        </div>
        <div className="flex gap-10">
          <span className=" text-[#545454] font-inter font-medium text-lg">
            Telefone:
          </span>
          <span className="font-inter font-normal text-lg">
            +55 (15) 99770-3244
          </span>
        </div>
      </div>
    </header>
  );
}
