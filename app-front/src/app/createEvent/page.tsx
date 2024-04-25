'use client';
import InputField from "@/components/inputs/InputField/InputField";
import CheckBoxPrice from "@/components/atoms/CheckBoxPrice/CheckBoxPrice";
import CheckBoxLimit from "@/components/atoms/CheckBoxLimit/CheckBoxLimit";
import EventCategorySelector from "@/components/inputs/EventCategorySelector/EventCategorySelector";
import React from "react";

export default function CreateEventPage() {
    const validateText = (value: string | FileList) => {
        if (typeof value === 'string') {
            // Agrega aquí tu lógica de validación para valores de tipo string
            return value.trim() !== "";
        } else {
            // Agrega aquí tu lógica de validación para valores de tipo FileList
            // Por ahora, simplemente devolvemos true
            return true;
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '0 20px', backgroundColor: '#FFFFFF'}}>
            <div style={{ maxWidth: '800px', width: '100%' }}>
                <h1 className="text-3xl font-bold mt-10" style={{ color: '#143C3A', textAlign: 'left', borderBottom: '2px solid #143C3A' }}>Crear evento</h1>
            <InputField
                type="text"
                label="Título del evento"
                placeholder="Ingresar título del evento"
                validate={validateText}
                errorMessage="El campo es obligatorio"
                style={{ marginTop: '30px' }}
            />

            <InputField
                type={"date"}
                label={"Fecha"}
                placeholder={"Ingresar fecha del evento"}
                validate={validateText}
                errorMessage={"El campo es obligatorio"}
            />

            <InputField
                type="time"
                label="Hora del evento"
                placeholder="Ingresar hora del evento"
                validate={validateText}
                errorMessage="El campo es obligatorio"
            />

            <InputField
                type="text"
                label="Ubicación o Modalidad"
                placeholder="Ingresar ubicación del evento"
                validate={validateText}
                errorMessage="El campo es obligatorio"
            />

            <InputField
                type="description"
                label="Acerca del evento"
                placeholder="Ingresar más detalles del evento"
                validate={validateText}
                errorMessage="El campo es obligatorio"
            />

            <InputField
                type="description"
                label="Recomendaciones"
                placeholder="Ingresar recomendaciones para el evento"
                validate={validateText}
                errorMessage="El campo es obligatorio"
            />

            <InputField
                type={"description"}
                label={"Organizador(es)"}
                placeholder={"Ingresar organizadores"}
                validate={validateText}
                errorMessage={"El campo es obligatorio"}
            />

            <CheckBoxPrice
                label={"Evento pago"}
                checked={false}
                onChange={(checked) => console.log(checked)}
                style={{ marginBottom: '20px' }} // Agrega esto
            />

            <CheckBoxLimit
                label={"Límite de asistentes"}
                checked={false}
                onChange={(checked) => console.log(checked)}
            />

            <EventCategorySelector
                label={"Categoría"}
                placeholder={"Seleccionar categoría"}
            />

            <InputField
                type={"file"}
                label={"Imagen del evento"}
                placeholder={"Ingresar imagen del evento"}
                validate={validateText}
                errorMessage={"El campo es obligatorio"}
            />

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black text-white" style={{ backgroundColor: '#143C3A' }}>Crear evento</button>
            </div>
            </div>
        </div>
    );
}
