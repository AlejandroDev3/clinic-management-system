import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { ReactNode } from "react";
import { UserRound, Stethoscope } from "lucide-react";
import RoleCard from "@/components/RoleCard";
import { useState } from "react";



function RegisterPage(){
    const [role, setRole] = useState<"patient" | "doctor">("patient");
    return(
            <section className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-indigo-200">
                <div className="w-230 bg-blue-100 inset-0 h-120 relative fit flex justify-center items-center overflow-hidden rounded-md  shadow-xl backdrop-blur-[2px]">
                  <div className="w-230 bg-blue-100 h-120 relative fit flex justify-center items-center overflow-hidden rounded-md transition-all shadow-xl">
                      <div className="w-260 h-60 bg-blue-300 rounded-full rotate-49 absolute mr-100 shadow-xl">
                      </div>
                      <div className="w-260 h-60 bg-blue-400 rounded-full rotate-49 absolute mr-170 shadow-xl">
                      </div>
                      <div className="w-260 h-60 bg-blue-500 rounded-full rotate-49 absolute mr-240 shadow-xl">
                      </div>
                      <div className="w-260 h-60 bg-blue-600 rounded-full rotate-49 absolute mr-310 shadow-xl">
                      </div>
                      <div className="w-100 h-20 bg-blue-300 rounded-full rotate-49 absolute mr-200 mb-50 shadow-xl">
                      </div>
                      <div className="w-100 h-30 bg-blue-500 rounded-full rotate-49 absolute ml-15 mt-100 shadow-xl">
                      </div>
                      <div className="w-90 h-20 bg-blue-200 rounded-full rotate-49 absolute mr-135 mt-110 shadow-xl ">
                      </div>
                      <div className="w-100 h-15 bg-blue-600 rounded-full rotate-49 absolute mr-220 mb-160 shadow-xl"></div>
                  </div>
                    <form action="login"  className="grid grid-cols-2  items-center h-full">
                        <div className="absolute inset-0 z-10 grid grid-cols-2 p-15 gap-15 backdrop-blur-[1px]">
                        <div className="grid grid-cols-1  items-center ">
                      <Label
                        htmlFor="tittle"
                        className="block text-center text-6xl font-righteous text-blue-700 text-shadow-lg"
                      >
                        <span className="text-yellow-500">Health</span>Match
                      </Label>
                            <Label
                            htmlFor="role"
                            className="block text-center text-xl font-bold font-caveat text-gray-100 text-shadow-lg"
                            >
                            ¿Cómo deseas registrarte?
                            </Label>

                            <div className="grid grid-cols-2 gap-4">
                            <RoleCard
                                title="Paciente"
                                icon={<UserRound size={40} className="text-blue-600" />}
                                selected={role === "patient"}
                                onClick={() => setRole("patient")}
                            />

                            <RoleCard
                                title="Especialista"
                                icon={<Stethoscope size={40} className="text-blue-600" />}
                                selected={role === "doctor"}
                                onClick={() => setRole("doctor")}
                            />
                            </div>
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
                            "
                          >
                            Registrate
                          </Button>
                        </div>
                        </div>
                    </form>
                </div>
            </section>
    )
}

export default RegisterPage