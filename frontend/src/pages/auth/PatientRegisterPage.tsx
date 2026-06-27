import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import RoleCard from "@/components/RoleCard";
import { User, Stethoscope } from "lucide-react";
import { Lock, Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import SelectorDias from "@/components/Days";

function PatientRegisterPage(){
    const [date, setDate] = useState<Date>();
    return(
        <div className="flex min-h-screen items-center justify-center bg-slate-100">
            <Card className="w-full max-w-xl    ">
                <CardHeader>
                    <CardTitle className="text-center text-2xl">
                            Registro de Usuarios
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-6 ">
                            <div className= " grid grid-cols-2 gap-3 ">
                                <div>
                                    <Input 
                                        id="name"
                                        type="text"
                                        placeholder="Nombres"
                                        className="h-12 rounded-xl pl-3 transition-all hover:scale-105 hover:bg-slate-100"
                                    />
                                </div>
                                <div>
                                    <Input 
                                        id="lastnames"
                                        type="text"
                                        placeholder="Apellidos"
                                        className="h-12 rounded-xl pl-3 transition-all hover:scale-105 hover:bg-slate-100"
                                    />
                                </div>
                            </div>
                            <div className=" grid grid-cols-1">
                                <Input 
                                    id="email-register"
                                    type="email"
                                    placeholder="correo@hospital.com"
                                    className="h-12 rounded-xl pl-3 transition-all hover:scale-105 hover:bg-slate-100"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                <div>
                                    <Input
                                        id="year"
                                        type="text"
                                        placeholder="Año"
                                        className="h-12 w-full rounded-xl pl-3 transition-all hover:scale-105 hover:bg-slate-100 border border-input"                                     
                                    />
                                </div>
                                <div>
                                    <select name="Month" className="h-12 w-full rounded-xl pl-3 transition-all hover:scale-105 hover:bg-slate-100 border border-input">
                                        <option value="Other">Mes</option>
                                        <option value="Other">Enero</option>
                                        <option value="Male">Febrero</option>
                                        <option value="Female">Marzo</option>
                                        <option value="Other">Abril</option>
                                        <option value="Other">Mayo</option>
                                        <option value="Other">Junio</option>
                                        <option value="Other">Julio</option>
                                        <option value="Other">Agosto</option>
                                        <option value="Other">Septiembre</option>
                                        <option value="Other">Octubre</option>
                                        <option value="Other">Noviembre</option>
                                        <option value="Other">Diciembre</option>
                                    </select>  
                                </div>
                                <div>
                                    <SelectorDias />
                                </div>
                                <div>
                                    <select name="Genero" className="h-12 w-full rounded-xl pl-3 transition-all hover:scale-105 hover:bg-slate-100 border border-input">
                                        <option value="Other">Genero</option>
                                        <option value="Male">Hombre</option>
                                        <option value="Female">Mujer</option>
                                        <option value="Other">Otro</option>
                                    </select>                                    
                                </div>                                
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                <div>    
                                    <Input 
                                    type="text"
                                    id="country"
                                    placeholder="País"
                                    className="h-12 rounded-xl pl-3 transition-all hover:scale-105 hover:bg-slate-100"
                                    />
                                </div>  
                                    <div>
                                    <Input 
                                    type="text"
                                    id="country"
                                    placeholder="Ciudad"
                                    className="h-12 rounded-xl pl-3 transition-all hover:scale-105 hover:bg-slate-100"
                                    />
                                </div>  
                                    <div>
                                    <Input 
                                    type="text"
                                    id="country"
                                    placeholder="C.P."
                                    className="h-12 rounded-xl pl-3 transition-all hover:scale-105 hover:bg-slate-100"
                                    />
                                </div>                               
                            </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default PatientRegisterPage