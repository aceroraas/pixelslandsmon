'use client'
import { useEffect, useState, useRef, useCallback } from "react";

const LandTreeTimer = ({ land }) => {
   const [treeTimer, setTreeTimer] = useState(false);
   const [showMsg, setShowMsg] = useState(false);
   const intervalRef = useRef(null); // Nueva referencia para almacenar el intervalo

   const startTimer = (time = false) => {
      let now = time ? time : Date.now();
      let hour7 = now + ((7 * 60 * 60 * 1000) + (15 * 60 * 1000));
      let fechaFinal = new Date(hour7);
      localStorage.setItem(land.plot, JSON.stringify({ ...land, treeTimer: fechaFinal }));
      setTreeTimer(true);
      launchIterval();
   }

   const clearTimer = useCallback(() => {
      if (treeTimer) {
         console.log("is stop");
         localStorage.setItem(land.plot, JSON.stringify({ ...land, treeTimer: false }));
         setTreeTimer(false);
         setShowMsg(false);
         clearInterval(intervalRef.current);
      }
   }, [land, treeTimer]);

   const autoResetTimer = useCallback(() => {
      setTimeout(() => {
         console.log("is auto reset stop");
         setShowMsg(false);
         let metadata = JSON.parse(localStorage.getItem(land.plot));
         if (metadata?.treeTimer && metadata?.treeTimer !== false) {
            let time = new Date(metadata.treeTimer);
            startTimer(time);
         } else {
            startTimer();
         }
      }, 10000);
   }, [land, startTimer]);

   const launchIterval = useCallback(() => {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
         let metadata = JSON.parse(localStorage.getItem(land.plot));
         if (metadata?.treeTimer && metadata?.treeTimer != false) {
            let ahora = new Date();
            let time = new Date(metadata?.treeTimer);
            let diferencia = time - ahora;
            if (diferencia <= 0) {
               clearInterval(intervalRef.current);
               localStorage.setItem(land.plot, JSON.stringify({ ...land, treeTimer: ahora }));
               setShowMsg("AHORA 🪓");
               autoResetTimer();
               return;
            }
            let horas = Math.floor(diferencia / (1000 * 60 * 60));
            let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
            let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
            let horasFormateadas = horas.toString().padStart(2, '0');
            let minutosFormateados = minutos.toString().padStart(2, '0');
            let segundosFormateados = segundos.toString().padStart(2, '0');
            if (treeTimer) {
               setShowMsg(`${horasFormateadas}:${minutosFormateados}:${segundosFormateados}`);
            } else {
               clearTimer();
               return;
            }
         } else {
            clearTimer();
            return;
         }
      }, 1000);
   }, [clearTimer, autoResetTimer, treeTimer]);



   const handleStartStopTimer = () => {
      if (treeTimer) {
         clearTimer();
      } else {
         startTimer();
      }
   }
   useEffect(() => {
      let metadata = JSON.parse(localStorage.getItem(land.plot));
      if (metadata?.treeTimer && metadata?.treeTimer !== false) {
         let time = new Date(metadata.treeTimer);
         startTimer(time);
      }
   }, []);
   return <span onClick={handleStartStopTimer} className="cursor-pointer font-bold text-2xl">{`🌳${land.treeCount} ${treeTimer ? showMsg ? showMsg : "" : ""}`}</span>
};

export default LandTreeTimer;