import "./Origins.css";
import "../global.css";
import StatusBar from "../components/StatusBar";
import AddressesList from "../components/AddressesList";
import {Button} from "@mui/material";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getDestinations} from "../store/slices/destinationsSlice";

export default function Destinations() {
    let [showError, setShowError] = useState(false),
        destinations = useSelector(getDestinations);
    const navigateToDestinations = () => {
        if (destinations.length == 0) {
            setShowError(true);
        }
    }

    useEffect(() => {
        if (destinations.length > 0) {
            setShowError(false);
        }
    })

    return (
        <div className="flex">
            <StatusBar activeStep={1} />
            <AddressesList typeOfAddress="destination" addressList={destinations} />
            <Button variant="contained" onClick={navigateToDestinations} >Calculate Best Destination</Button>
            { showError
                ? <p className="validation-error">
                    *Need at least 1 destination address*
                </p>
                : null
            }
        </div>
    )
}
