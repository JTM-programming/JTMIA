import { FC } from "react";

interface ITestimony {
  titulo: string;
  contenido: string;
  usuario: string;
  puntuacion: number;
}

interface IPropsTestimony {
  testimonio?: ITestimony;
}

const CardTestimony: FC<IPropsTestimony> = ({ testimonio }) => {
  if (!testimonio) {
    return null;
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center min-w-60 h-80 foreground rounded-md gap-3">
        <h6 className="titleColor font-semibold text-2xl">
          {testimonio.titulo}
        </h6>
        <p className="mx-4">{testimonio.contenido}</p>
        <div className="flex items-center gap-2">
          <img src="" alt="" className="w-10 h-10 rounded-full" />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-medium">{testimonio.usuario}</p>
            <div className="flex justify-center">
              {Array.from({ length: 5 }, (_, index) => (
                <i key={index} className="text-blue-600 text-xl">
                  &#9733;
                </i>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTestimony;
