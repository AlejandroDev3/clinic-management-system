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

function LoginPage() {
  const [selectedRole, setSelectedRole] = useState("patient");
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Iniciar sesión
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-6">

            {/* Selector de rol */}

              <div className="mt-3 grid grid-cols-2 gap-3">

                <RoleCard
                  icon={<User size={40} />}
                  title="Paciente"
                  selected={selectedRole === "patient"}
                  onClick={() => setSelectedRole("patient")}
                />

                <RoleCard
                  icon={<Stethoscope size={40} />}
                  title="Doctor"
                  selected={selectedRole === "doctor"}
                  onClick={() => setSelectedRole("doctor")}
                />

              </div>

            {/* Correo */}

            <div className="space-y-2">
              <Label htmlFor="email">
                Correo electrónico
              </Label>

              <div className="relative transition-all hover:scale-105 hover:bg-slate-100">

                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 "
                />

                <Input
                  id="email"
                  type="email"
                  placeholder="correo@hospital.com"
                  className="h-12 rounded-xl pl-10"
                />

              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">
                Contraseña
              </Label>

              <div className="relative transition-all hover:scale-105 hover:bg-slate-100">

                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="h-12 rounded-xl pl-10"
                />

              </div>
            </div>

            <Button
              className="h-12 w-full rounded-xl text-base font-semibold transition-all hover:scale-105 cursor-pointer"
            >
              Iniciar sesión
            </Button>
            <div className="m-w flex items-center justify-center pb-5">
              <Label htmlFor="register">
                Si no tienes cuenta<button className="cursor-pointer hover:text-blue-800"   
                onClick={() =>
                  navigate(
                    selectedRole === "patient"
                      ? "/register/patient"
                      : "/register/doctor"
                  )
                }>registrate</button>
              </Label>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginPage;