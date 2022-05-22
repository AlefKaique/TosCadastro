import { User, Lock, ArrowUUpLeft } from "phosphor-react";


export function Cadastro() {
    return(

    <>
        <div className=" scroll-smooth flex justify-center items-center mt-40">

                <div className="w-422 h-350 flex flex-col">

                    <h1 className="flex justify-center items-center text-[#FF8F3F] text-[30px] ">REGISTRAR</h1>

            <div className="p-[0.7rem]">
                    <div className="flex">
                        <label className="text-xs">Username</label> <User weight="bold" className="p-[0.2rem]"/>
                    </div>
                        <input type="text"  className= " min-w-full px-8 py-1 text-sm border-orange-500 border-style:solid border-[1px] rounded-[6px]  bg-[#181818] "  />
            </div>        

            <div className="p-[0.7rem]">
                    <div className="flex">
                        <label className="text-xs">Password</label><Lock weight="bold" className="p-[0.2rem]" />
                    </div>
                        <input type="password"  className= " px-8 py-1 text-sm border-orange-500 border-style:solid border-[1px] rounded-[6px]  bg-[#181818] "  />
            </div>

            <div className="p-[0.7rem]">
                    <div className="flex">
                        <label className="text-xs">Confirm Password</label>
                    </div>
                        <input type="password"  className= " px-8 py-1 text-sm border-orange-500 border-style:solid border-[1px] rounded-[6px]  bg-[#181818] "  />
            </div>


                    <div className="flex ml-[0.8rem] gap-8 mt-[1rem]">

                    <button className="text-white py-1 px-3 text-sm hover:bg-orange-600 transition-all duration-150 ease-linear bg-orange-500 border-0 cursor-pointer rounded-[6px] px-6">
                        REGISTRAR
                    </button>
    
                <div className="flex gap-1">
                    <a className="text-[0.5rem]  " href="#">Já Tenho um cadastro</a> <ArrowUUpLeft className="text-[0.5rem]" weight="bold" />
                </div>

                    </div>

                </div>

        </div>
    </>
    )
}