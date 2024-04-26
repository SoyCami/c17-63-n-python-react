'use client';
import InputField from "@/components/inputs/InputField/InputField";
import CheckBoxPrice from "@/components/atoms/CheckBoxPrice/CheckBoxPrice";
import CheckBoxLimit from "@/components/atoms/CheckBoxLimit/CheckBoxLimit";
import EventCategorySelector from "@/components/inputs/EventCategorySelector/EventCategorySelector";
import {saveEvent} from "@/api/createEvent";
import React, {useState} from "react";

const CreateEventPage: React.FC = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [recomendation, setRecomendation] = useState("");
    const [picture, setPicture] = useState<FileList>();
    const [paid, setPaid] = useState(false);
    const [price, setPrice] = useState(0);
    const [hasLimit, setHasLimit] = useState(false);
    const [limit, setLimit] = useState(0);
    const [category, setCategory] = useState("");
    const [pictureError, setPictureError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [dateError, setDateError] = useState("");
    const [timeError, setTimeError] = useState("");
    const [locationError, setLocationError] = useState("");

    const handleSubmit = async () => {
        const token = localStorage.getItem('token');
        let isValid = true;

        if (!title) {
            console.log("title", title);
            setTitleError("El campo es obligatorio");
            isValid = false;
        }

        if (!description) {
            console.log("description", description)
            setDescriptionError("El campo es obligatorio");
            isValid = false;
        }

        if (!picture || picture.length === 0) {
            setPictureError("La imagen es obligatoria");
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        const formData = new FormData();
        const formattedDate = new Date(date).toISOString().slice(0, 10);
        formData.append('event_name', title);
        formData.append('event_description', description);
        formData.append('is_online', 'true');
        formData.append('event_location', location);
        formData.append('event_date', formattedDate);
        formData.append('event_hour', time);
        formData.append('recommendations', recomendation);
        if (picture && picture.length > 0) {
            formData.append('event_picture', picture[0]);
        }
        formData.append('paid', paid.toString());
        formData.append('price', price.toString());
        formData.append('has_limit', hasLimit.toString());
        formData.append('limit', limit.toString());
        formData.append('event_category', category);

        try {
            const response = await saveEvent(formData, token);
            if (!response.success) {
                console.error("Error al crear el evento", response.error);
            } else {
                console.log("Evento creado con éxito", response.data);
                window.location.href = '/';
            }
        } catch (error) {
            console.error("Error al crear el evento", error);
        }
    }


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

    const validateFile = (value: string | FileList) => {
        if (value instanceof FileList) {
            // Verificar si se seleccionó un archivo
            return value.length > 0;
        } else {
            // Por ahora, simplemente devolvemos true para valores de tipo string
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
                errorMessage={titleError}
                style={{ marginTop: '30px' }}
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                    setTitleError(""); // Limpiar el error cuando el usuario cambia el valor
                }}
            />

            <InputField
                type={"date"}
                label={"Fecha"}
                placeholder={"Ingresar fecha del evento"}
                validate={validateText}
                errorMessage={dateError}
                value={date}
                onChange={(e) => {
                    setDate(e.target.value);
                    setDateError("");
                }}
            />

            <InputField
                type="time"
                label="Hora del evento"
                placeholder="Ingresar hora del evento"
                validate={validateText}
                errorMessage={timeError}
                value={time}
                onChange={(e) => {
                    setTime(e.target.value);
                    setTimeError("");
                }}
            />

            <InputField
                type="text"
                label="Ubicación"
                placeholder="Ingresar ubicación del evento"
                validate={validateText}
                errorMessage={locationError}
                value={location}
                onChange={(e) => {
                    setLocation(e.target.value)
                    setLocationError("");
                }}
            />

            <InputField
                type="description"
                label="Acerca del evento"
                placeholder="Ingresar más detalles del evento"
                validate={validateText}
                errorMessage={descriptionError}
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                    setDescriptionError(""); // Limpiar el error cuando el usuario cambia el valor
                }}
            />

            <InputField
                type="description"
                label="Recomendaciones"
                placeholder="Ingresar recomendaciones para el evento"
                errorMessage=""
                value={recomendation}
                onChange={(e) => setRecomendation(e.target.value)}
            />

            <CheckBoxPrice
                label={"Evento pago"}
                checked={paid}
                onChange={(checked, price) => {
                    setPaid(checked);
                    setPrice(parseFloat(price)); // Asegúrate de convertir el precio a un número
                }}
                style={{ marginBottom: '20px' }}
            />

            <CheckBoxLimit
                label={"Límite de asistentes"}
                checked={hasLimit}
                onChange={(checked, limit) => {
                    setHasLimit(checked);
                    setLimit(limit); // Actualiza el límite
                }}
            />

            <EventCategorySelector
                label={"Categoría"}
                placeholder={"Seleccionar categoría"}
                style={{ marginTop: '20px' }}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />

            <InputField
                type={"file"}
                label={"Imagen del evento"}
                placeholder={"Ingresar imagen del evento"}
                validate={validateFile}
                errorMessage={pictureError}
                value={picture}
                onChange={(e) => {
                    setPicture((e.target as HTMLInputElement).files!);
                    setPictureError(""); // Limpiar el error cuando el usuario cambia el valor
                }}
            />

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                <button onClick={handleSubmit} className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black text-white" style={{ backgroundColor: '#143C3A' }}>Crear evento</button>
            </div>
            </div>
        </div>
    );
}

export default CreateEventPage;