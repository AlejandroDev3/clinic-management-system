import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail } from "lucide-react";


function LoginPage(){
    return(
              


              <section className="w-screen h-screen flex justify-center items-center bg-indigo-500">
                <div className="w-230 bg-blue-100 inset-0 h-120 relative fit flex justify-center items-center overflow-hidden rounded-md  shadow-xl">
                  {[
                    { width: 260, height: 60, bg: 'bg-blue-300', ml: 100 },
                    { width: 260, height: 60, bg: 'bg-blue-400', ml: 170 },
                    { width: 260, height: 60, bg: 'bg-blue-500', ml: 240 },
                    { width: 260, height: 60, bg: 'bg-blue-600', ml: 310 },
                    { width: 100, height: 20, bg: 'bg-blue-300', ml: 200, mb: 50 },
                    { width: 100, height: 30, bg: 'bg-blue-500', ml: 10, mt: 100 },
                    { width: 90, height: 20, bg: 'bg-blue-200', ml: 160, mt: 100 },
                    { width: 100, height: 15, bg: 'bg-blue-600', ml: 220, mb: 160 },
                  ].map((circle, index) => (
                    <div
                      key={index}
                      className={`
                        rounded-full rotate-130 absolute
                        w-${circle.width} h-${circle.height}
                        ${circle.bg}
                        ml-${circle.ml}
                        ${circle.mt ? `mt-${circle.mt}` : ''}
                        ${circle.mb ? `mb-${circle.mb}` : ''}
                      `}
                    />
                  ))}
                  <div className="absolute inset-0 z-10 grid grid-cols-2 p-8 gap-5">
                    <div className="grid grid-cols-1  items-center ">
                        <Label htmlFor="login" className="block text-center text-xl font-sans font-bold font-caveat text-blue-400">
                          INICIAR SESIÓN
                        </Label>
                            <input
                            id="User"
                              type="text"
                              placeholder="Usuario"
                              className="
                                transition-all hover:scale-105 
                                border-none 
                                rounded-none 
                                outline-none focus:outline-none 
                                focus:ring-0 focus:ring-offset-0
                                border-b-2 border-solid border-blue-700 
                              "
                            />
                            <input
                            id="Email"
                              type="email"
                              placeholder="correo@ejemplo.com"
                              className="
                                transition-all hover:scale-105 
                                border-none 
                                rounded-none 
                                outline-none focus:outline-none 
                                focus:ring-0 focus:ring-offset-0
                                border-b-2 border-solid border-blue-700 
                              "
                            />
                            <input
                            id="PassWord"
                              type="password"
                              placeholder="Contraseña"
                              className="
                                transition-all hover:scale-105 
                                border-none 
                                rounded-none 
                                outline-none focus:outline-none 
                                focus:ring-0 focus:ring-offset-0
                                border-b-2 border-solid border-blue-700 
                              "
                            />
                    </div>
                    <div>

                    </div>
                  </div>
                </div>
              </section>




    )
}

export default LoginPage