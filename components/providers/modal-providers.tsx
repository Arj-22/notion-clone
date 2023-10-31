"use client"

import { useEffect, useState } from "react";
import SettingsModals from "../models/SettingsModals";
import CoverImageModel from "../models/CoverImageModel";


export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if(!isMounted){
     return null;   
    }

    return(
        <>
            <SettingsModals/>
            <CoverImageModel/>
        </>
    )
}