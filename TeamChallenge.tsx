const signals = [
  "Colaboradores que chegam, cumprem horário, mas não se envolvem.",
  "Reuniões que não geram compromisso — só mais tarefas.",
  "Conflitos de convivência que desgastam o ambiente de trabalho.",
  "Falta de disposição para recomeçar após um período difícil.",
]

export function TeamChallenge() {
  return (
    <section
      aria-labelledby="desafio-titulo"
      className="team-challenge dark bg-[linear-gradient(90deg,var(--brand-blue),var(--brand-indigo))]!"
    >
      <div className="team-challenge__inner" data-aos="compose">
        <div data-step="1" className="team-challenge__heading">
          <h2 id="desafio-titulo">
            Sua equipe está <span>desmotivada</span> e você sente isso todos os
            dias.
          </h2>
          <p>
            Uma equipe desmotivada pode apresentar queda de produtividade, menor
            envolvimento, dificuldades de relacionamento e redução do
            comprometimento com os objetivos da organização.
          </p>
        </div>
        <ul
          className="team-challenge__signals"
          aria-label="Sinais de desmotivação"
        >
          {signals.map((signal, index) => (
            <li
              key={signal}
              data-aos="card-up"
              data-aos-delay={String(index * 75)}
            >
              <span aria-hidden="true">0{index + 1}</span>
              <p>{signal}</p>
            </li>
          ))}
        </ul>
        <p data-step="3" className="team-challenge__closing">
          Não é falta de esforço. É falta de conexão com o próprio propósito.
        </p>
      </div>
    </section>
  )
}
