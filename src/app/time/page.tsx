import Developer from "@/components/Developer/Developer";
import { developers } from "../localData/developers";

export default function Time() {
  return (
    <section className="text-center py-10">
      <h1 className="title">TIME DE DESENVOLVEDORES</h1>
      <div className="flex max-sm:flex-col justify-around text-center">
        {developers.map((dev) => (
          <Developer name={dev.name} rm={dev.rm} img={dev.img} key={dev.rm} />
        ))}
      </div>
    </section>
  );
}
