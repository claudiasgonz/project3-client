import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const MuseumContext = createContext();

function MuseumProvider ({ children }) {
    const [museums, setMuseums] = useState(null);
    const navigate = useNavigate();

    const getAllMuseums = async () => {
        try {
            const response = await api.get("/museum/all");

            setMuseums(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const createMuseum = async (body) => {
        try {
            const response = await api.post("/museum", body);

            if(response.status === 200 || response.status === 201) {
                toast.success(body.name + " created succesfully.");

                getAllMuseums();
                navigate("/museums");
            }
        } catch (error) {
            console.log("error while creating museum",error);
        }
    };

    useEffect(() => {
        getAllMuseums();
    }, []);

    return (
    <MuseumContext.Provider 
    value={{ museums, createMuseum }}> 
        {children}
    </MuseumContext.Provider>
    );
}
export { MuseumContext, MuseumProvider };