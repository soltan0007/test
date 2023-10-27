import React, { useState, useEffect } from "react";
import { TextField, FormControlLabel, Checkbox } from "@mui/material";
import ApiItem from "../components/ApiItem";
import { fetchApiData } from "../services/ApiService"
import "../App.css"

const ApiList = () => {
    const [apiData, setApiData] = useState([]);
    const [filteredApiData, setFilteredApiData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterAnimals, setFilterAnimals] = useState(false);

    useEffect(() => {
        fetchApiData().then((data) => {
            setApiData(data);
            setFilteredApiData(data);
        });
    }, []);

    useEffect(() => {
        const filteredByName = apiData.filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const filteredByAnimals = filterAnimals
            ? apiData.filter((item) => item.category === "Animals")
            : apiData;

        setFilteredApiData(
            filteredByName.filter((item) => filteredByAnimals.includes(item))
        );
    }, [searchTerm, filterAnimals, apiData]);

    return (
        <div>
            <TextField
                label="Search by name"
                variant="outlined"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={filterAnimals}
                        onChange={(e) => setFilterAnimals(e.target.checked)}
                    />
                }
                label="Filter by Animals"
            />
            {filteredApiData.map((item) => (
                <ApiItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ApiList;
