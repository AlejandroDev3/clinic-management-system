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

function PatientRegisterPage(){
    return(
        <div className="flex min-h-screen items-center justify-center bg-slate-100">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-center text-2xl">
                            Registro de Usuarios
                    </CardTitle>
                </CardHeader>
            </Card>
        </div>
    )
}

export default PatientRegisterPage