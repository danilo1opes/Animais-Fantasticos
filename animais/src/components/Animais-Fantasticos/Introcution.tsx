import { useState } from 'react';
import { animaisData } from '../data/animaisParagrafos';

export function AnimaisFantasticos() {
  const world = 'Animais Fantasticos';

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
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-[20px] mb-16 px-10">
      <div className="col-span-1 md:col-span-2 mb-8">
        <h1 className="text-[6rem]/[1.1] font-normal uppercase">
          {world.split(' ').map((word, index) => (
            <span key={index}>
              {word}
              {index < world.split(' ').length - 1 && <br />}
            </span>
          ))}
        </h1>
      </div>

      <div className="col-span-1">
        <ul
          className="h-[370px] overflow-y-scroll cursor-pointer scrollbar-custom"
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
              className={`${
                selectedAnimalIndex === index ? 'bg-gray-200' : ''
              }`}
            >
              <img
                className="w-sm"
                src={imageSrc}
                alt={`Animal ${index + 1}`}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-1">
        <section>
          <h2 className="text-2xl mb-2 before-h2">
            {animaisData[selectedAnimalIndex].nome}
          </h2>
          {animaisData[selectedAnimalIndex].descricao.map(
            (paragrafo, index) => (
              <p key={index} className={`text-sm ${index > 0 ? 'mb-4' : ''}`}>
                {paragrafo}
              </p>
            )
          )}
        </section>
      </div>
    </div>
  );
}
