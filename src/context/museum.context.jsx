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
                toast.custom((t) => (
                    <div className={`bg-green-100 border-l-4 border-green-500 text-green-700 p-4 font-mono ${t.visible ? 'animate-enter' : 'animate-leave'}`} style={{ transition: 'all 0.3s ease' }}>
                        <p className="font-bold">{body.name} created successfully.</p>
                    </div>
                ));

                getAllMuseums();
                navigate("/museums");
            }
        } catch (error) {
            console.log("error while creating museum",error);
        }
    };

    const updateMuseum = async (body, id, toggle) => {
        try {
            const response = await api.put("/museum/" + id, body)

            if(response.status === 200 || response.status === 201) {
                toast.custom((t) => (
                    <div className={`bg-green-100 border-l-4 border-green-500 text-green-700 p-4 font-mono ${t.visible ? 'animate-enter' : 'animate-leave'}`} style={{ transition: 'all 0.3s ease' }}>
                        <p className="font-bold">{body.name} edited successfully.</p>
                    </div>
                ));
                getAllMuseums();
                toggle(false);
            }
        } catch (error) {
            toast.error("Error updating this museum.")
            console.log(error)
        }
    };

    const deleteMuseum =  async (id) => {
        try {
            const confirmDelete = confirm("Are you sure you want to delete this museum?");

            if (confirmDelete) {
                const response = await api.delete("/museum/" + id);

                if(response.status === 200) {
                    toast.custom((t) => (
                        <div className={`bg-green-100 border-l-4 border-green-500 text-green-700 p-4 font-mono ${t.visible ? 'animate-enter' : 'animate-leave'}`} style={{ transition: 'all 0.3s ease' }}>
                            <p className="font-bold">museum deleted successfully.</p>
                        </div>
                    ));
                    getAllMuseums();

                    navigate(-1);
                } 
            }
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getAllMuseums();
    }, []);

    return (
    <MuseumContext.Provider 
    value={{ museums, createMuseum, updateMuseum, deleteMuseum }}> 
        {children}
    </MuseumContext.Provider>
    );
}
export { MuseumContext, MuseumProvider };