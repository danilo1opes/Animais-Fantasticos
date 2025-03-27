import { useState } from 'react';
import { animaisData } from '../data/animaisParagrafos';

export function AnimaisFantasticos() {
  const world = 'Animais Fantásticos';

  const [selectedAnimalIndex, setSelectedAnimalIndex] = useState(0);

  const animalImages = [
    './src/assets/bear.jpg',
    './src/assets/fox.jpg',
    './src/assets/lion.jpg',
    './src/assets/monkey.jpg',
    './src/assets/squirrel.jpg',
    './src/assets/wolf.jpg',
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_2fr] gap-6 px-6 md:px-10 mb-16">
      {/* Título */}
      <div className="col-span-1 md:col-span-2">
        <h1 className="text-4xl mt-8 xl:text-[6rem]/[1.1]  uppercase">
          {world.split(' ').map((word, index) => (
            <span key={index}>
              {word}
              {index < world.split(' ').length - 1 && <br />}
            </span>
          ))}
        </h1>
      </div>

      {/* Lista de animais */}
      <div className="col-span-1">
        <ul
          className="h-[370px] max-h-[300px] md:max-h-[370px] overflow-auto cursor-pointer border border-gray-300 rounded-lg p-2"
          onClick={(e) => {
            const li = (e.target as HTMLElement).closest('li');
            if (li) {
              const index = Array.from(
                li.parentElement?.children || []
              ).indexOf(li);
              setSelectedAnimalIndex(index);
            }
          }}
        >
          {animalImages.map((imageSrc, index) => (
            <li
              key={index}
              className={`flex items-center gap-2 p-2 transition-all rounded-lg ${
                selectedAnimalIndex === index
                  ? 'bg-gray-300'
                  : 'hover:bg-gray-200'
              }`}
            >
              <img
                className="w-16 h-16 object-cover rounded-lg"
                src={imageSrc}
                alt={`Animal ${index + 1}`}
              />
              <span className="text-lg font-semibold capitalize">
                {animaisData[index].nome}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Descrição do animal */}
      <div className="col-span-1 md:col-span-2 xl:col-span-1">
        <section className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-3 border-b pb-2">
            {animaisData[selectedAnimalIndex].nome}
          </h2>
          {animaisData[selectedAnimalIndex].descricao.map(
            (paragrafo, index) => (
              <p key={index} className="text-base leading-relaxed mb-3">
                {paragrafo}
              </p>
            )
          )}
        </section>
      </div>
    </div>
  );
}
