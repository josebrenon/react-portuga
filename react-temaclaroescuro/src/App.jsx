import React, { useState } from "react";

export default function App() {
  const [escuro, setEscuro] = useState(false);

  const tema = {
    backgroundColor: escuro ? "black" : "white",
    color: escuro ? "white" : "black",
  };
  return (
    <div style={tema}>
      <h1>React - Tema Claro / Escuro</h1>
      <hr />
      <button
        onClick={() => {
          setEscuro((old) => !old);
        }}
      >
        Tema
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, officiis
        pariatur maiores molestiae sapiente doloremque aspernatur vel fugiat
        nostrum eaque asperiores maxime nisi quos minus quis dignissimos omnis.
        Nemo, facilis! Incidunt commodi fuga, eligendi necessitatibus molestias
        quos ab eaque nam nostrum quam tenetur numquam deleniti. Tempora magni
        vitae voluptatum illo aut, deleniti, iste fuga molestias expedita
        consectetur exercitationem voluptatem quidem. Perspiciatis, iste
        officia, voluptate neque modi non accusamus aliquid praesentium
        obcaecati vitae hic! Earum corporis obcaecati ratione nam accusantium!
        Error iste quos totam atque eligendi accusamus est numquam a minus?
        Accusantium repellat perspiciatis enim quo est aspernatur? Quisquam,
        expedita. Animi deserunt hic minima praesentium sunt fuga voluptatem
        itaque eius? Neque perspiciatis architecto nesciunt. Beatae, in
        explicabo aut molestiae officiis eligendi? Rem ab minus aut! Iste quasi,
        nesciunt numquam modi aliquid neque ullam error nam rem? Soluta alias
        repudiandae excepturi veritatis at facilis nihil facere optio, cumque
        repellat necessitatibus eveniet voluptate! Quasi suscipit, vel odio
        rerum cumque modi velit. Quae, dolor velit. Architecto facilis labore
        fugiat minima, obcaecati molestias, sint delectus illum asperiores,
        ratione corrupti atque! Cum optio nulla a facilis? Recusandae tempora,
        animi ea labore accusantium voluptas necessitatibus corporis
        praesentium, et est rem tenetur atque magni adipisci optio obcaecati quo
        doloribus neque. Aperiam delectus nostrum placeat odio laudantium
        maiores enim. Maxime, rerum nostrum, natus illum voluptatem, nam nihil
        dolorum non fugit dolores eius. Eveniet ipsam est porro culpa molestias,
        pariatur saepe laborum! Minima dignissimos ipsa vitae debitis neque
        illum ratione. Iusto doloribus blanditiis facere quos aspernatur, harum
        dolore non est reprehenderit numquam tempore asperiores alias recusandae
        ratione unde ullam. Iure tempore itaque dolorem sint tenetur? Ut
        veritatis delectus consequuntur beatae. Debitis vel at odit eum optio
        ipsum possimus quaerat vitae odio quo tenetur dignissimos facilis nulla,
        numquam consequatur perspiciatis animi deserunt alias delectus omnis
        modi voluptatibus nisi fuga dolore? Exercitationem!
      </p>
    </div>
  );
}
