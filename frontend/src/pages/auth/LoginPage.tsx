import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Lock } from "lucide-react";


function LoginPage(){
    return(
              


              <section className="w-screen h-screen flex justify-center items-center bg-indigo-400">
                <div className="w-230 bg-blue-100 inset-0 h-120 relative fit flex justify-center items-center overflow-hidden rounded-md  shadow-xl backdrop-blur-[2px]">
          <div className="w-230 bg-blue-100 h-120 relative fit flex justify-center items-center overflow-hidden rounded-md transition-all hover:scale-105 hover:bg-slate-100 shadow-xl">
              <div className="w-260 h-60 bg-blue-300 rounded-full rotate-130 absolute ml-100 shadow-xl">
              </div>
              <div className="w-260 h-60 bg-blue-400 rounded-full rotate-130 absolute ml-170 shadow-xl">
              </div>
              <div className="w-260 h-60 bg-blue-500 rounded-full rotate-130 absolute ml-240 shadow-xl">
              </div>
              <div className="w-260 h-60 bg-blue-600 rounded-full rotate-130 absolute ml-310 shadow-xl">
              </div>
              <div className="w-100 h-20 bg-blue-300 rounded-full rotate-130 absolute ml-200 mb-50 shadow-xl">
              </div>
              <div className="w-100 h-30 bg-blue-500 rounded-full rotate-130 absolute ml-10 mt-100 shadow-xl">
              </div>
              <div className="w-90 h-20 bg-blue-200 rounded-full rotate-130 absolute ml-160 mt-100 shadow-xl ">
              </div>
              <div className="w-100 h-15 bg-blue-600 rounded-full rotate-130 absolute ml-220 mb-160 shadow-xl"></div>
          </div>
                  <div className="absolute inset-0 z-10 grid grid-cols-2 p-15 gap-15 backdrop-blur-[1px]">
                    <div className="grid grid-cols-1  items-center ">
                      <form action="login"  className="grid grid-cols-1  items-center h-full">
                          <Label htmlFor="login" className="block text-center text-xl font-sans font-bold font-caveat text-blue-700">
                          INICIO DE SESIÓN
                        </Label>
                            <div className="relative w-full transition-all hover:scale-105 border-b-2 border-blue-700 border-solid p-2">
                              <User
                                size={20}
                                className="absolute left-2 top-1/2 -translate-y-1/2 text-blue-700 pointer-events-none"
                              />

                              <input
                              id="user"
                                type="text"
                                placeholder="Usuario"
                                className="
                                  w-full
                                  pl-10
                                  border-none
                                  rounded-none
                                  outline-none
                                  focus:outline-none
                                  focus:ring-0
                                  border-b-2
                                  border-blue-700
                                "
                              />
                            </div>
                            <div className="relative w-full transition-all hover:scale-105 border-b-2 border-blue-700 border-solid p-2">
                              <User
                                size={20}
                                className="absolute left-2 top-1/2 -translate-y-1/2 text-blue-700 pointer-events-none"
                              />

                              <input
                              id="email"
                                type="email"
                                placeholder="correo@ejemplo"
                                className="
                                  w-full
                                  pl-10
                                  border-none
                                  rounded-none
                                  outline-none
                                  focus:outline-none
                                  focus:ring-0
                                  border-b-2
                                  border-blue-700
                                "
                              />
                            </div>
                            <div className="relative w-full transition-all hover:scale-105 border-b-2 border-blue-700 border-solid p-2">
                              <User
                                size={20}
                                className="absolute left-2 top-1/2 -translate-y-1/2 text-blue-700 pointer-events-none"
                              />

                              <input
                              id="password"
                                type="password"
                                placeholder="Contraseña"
                                className="
                                  w-full
                                  pl-10
                                  border-none
                                  rounded-none
                                  outline-none
                                  focus:outline-none
                                  focus:ring-0
                                  border-b-2
                                  border-blue-700
                                "
                              />
                            </div>
                      </form>
                    </div>
                    <div className="grid grid-cols-1  items-center">
                      <Label
                        htmlFor="tittle"
                        className="block text-center text-6xl font-righteous text-blue-700 text-shadow-lg"
                      >
                        Health<span className="text-yellow-500">Desk</span>
                      </Label>
                          <Button
                            className="
                              px-6
                              py-3
                              bg-yellow-500/80
                              hover:bg-yellow-500/90
                              text-white
                              text-base
                              font-semibold
                              rounded-xl
                              shadow-lg
                              hover:shadow-xl
                              transition-all hover:scale-105
                              transition-all
                              duration-300
                              cursor-pointer
                              active:scale-95
                              focus:outline-none
                              focus:ring-2
                              focus:ring-blue-400
                              disabled:opacity-50
                              disabled:cursor-not-allowed
                              h-10
                              mt-40
                            "
                          >
                            Iniciar sesión
                          </Button>
                      <Label
                        htmlFor="register"
                        className="block text-center text-base font-righteous text-white text-shadow-lg"
                      >
                        Si no tienes cuenta <Button className="bg-0 p-0 text-base hover:bg-0 cursor-pointer text-white transition-all hover:scale-102 hover:text-yellow-300 text-shadow-lg">registrate</Button>
                      </Label>
                    </div>
                  </div>
                </div>
              </section>




    )
}

export default LoginPage