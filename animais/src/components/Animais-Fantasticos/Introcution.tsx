export function AnimaisFantasticos() {
  const world = 'Animais Fantasticos';

  return (
    <div className="grid grid-cols-[100px_300px_1fr] gap-[20px] mb-16  px-10">
      <h1 className="text-[6rem]/[1.1] font-normal uppercase">
        {world.split(' ').map((word, index) => (
          <span key={index}>
            {word}
            {index < world.split(' ').length - 1 && <br />}
          </span>
        ))}
      </h1>
      <ul className="h-[370px] overflow-y-scroll cursor-pointer ">
        <li>
          <img className="w-sm" src="./src/assets/bear.jpg" alt="Bear" />
        </li>
        <li>
          <img className="w-sm" src="./src/assets/fox.jpg" alt="Fox" />
        </li>
        <li>
          <img className="w-sm" src="./src/assets/lion.jpg" alt="Lion" />
        </li>
        <li>
          <img className="w-sm" src="./src/assets/monkey.jpg" alt="Monkey" />
        </li>
        <li>
          <img
            className="w-sm"
            src="./src/assets/squirrel.jpg"
            alt="Squirrel"
          />
        </li>
        <li>
          <img className="w-sm" src="./src/assets/wolf.jpg" alt="Wolf" />
        </li>
      </ul>
      <div className="col-span-3">
        <section>
          <h2 className="text-xl mb-2">Urso</h2>
          <p className="text-xs">
            O urso é um grande mamífero pertencente à família Ursidae,
            caracterizado por sua força, corpo robusto, patas grandes com garras
            afiadas e uma espessa pelagem que varia em cor dependendo da
            espécie. Existem oito espécies de ursos distribuídas por diferentes
            habitats ao redor do mundo, como florestas, tundras, montanhas e
            regiões polares.
          </p>{' '}
          <span>
            <br />
          </span>
          <p className="text-xs">
            Os ursos são omnívoros, com dietas variando de carne e peixes a
            frutas, mel e vegetação. O urso-polar, no entanto, é um dos poucos
            predominantemente carnívoros.
          </p>
          <span>
            <br />
          </span>
          <p className="text-xs">
            Apesar de seu tamanho e força, a maioria dos ursos evita conflitos e
            tem comportamento solitário, exceto durante a época de acasalamento
            ou quando mães estão cuidando de filhotes. Algumas espécies, como o
            urso-pardo e o urso-negro, hibernam no inverno, reduzindo seu
            metabolismo para sobreviver aos períodos de escassez alimentar.
          </p>
          <span>
            <br />
          </span>
          <p className="text-xs">
            Culturalmente, os ursos são vistos de forma ambígua: enquanto
            representam poder e proteção em algumas tradições, também são
            associados a perigo e força incontrolável.Hoje, muitas espécies
            enfrentam ameaças devido à destruição de habitat, caça e mudanças
            climáticas, especialmente o urso-polar.
          </p>
        </section>
      </div>
    </div>
  );
}
