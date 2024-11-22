import { StaticImageData } from "next/image";
import carmona from "@/public/img/carmona.png"
import pedro from "@/public/img/pedro.png"
import ricardo from "@/public/img/ricardo.png"

export const developers: { name: string, rm: string, img: StaticImageData | string }[] = [
   {
      name: "Pedro Abrantes Andrade",
      rm: "RM 558186",
      img: pedro.src
   },
   {
      name: "Victor Alves Carmona",
      rm: "RM 555726",
      img: carmona.src
   },
   {
      name: "Ricardo Tavares de Oliveira Filho",
      rm: "RM 556092",
      img: ricardo.src
   }
]