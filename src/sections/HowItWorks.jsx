import { whatsappLink } from '../data/siteConfig';
import { WhatsAppIcon } from '../components/Icons';
import './HowItWorks.css';

const STEPS = [
  {
    n: '01',
    title: 'Escolha o estilo',
    desc: 'Dá uma olhada na galeria ou no Instagram e separa referências de cor, tema e tamanho.',
  },
  {
    n: '02',
    title: 'Fale no WhatsApp',
    desc: 'Conta a data, quantas pessoas e o que não pode faltar. Você recebe o orçamento por lá mesmo.',
  },
  {
    n: '03',
    title: 'Aprovamos o projeto',
    desc: 'Alinhamos sabor, recheio e visual antes de colocar a mão na massa, sem surpresas.',
  },
  {
    n: '04',
    title: 'Retirada ou entrega',
    desc: 'Combinamos o melhor jeito de o bolo chegar até você, fresquinho e intacto.',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="how">
      <div className="container">
        <div className="how__head">
          <span className="eyebrow">como pedir</span>
          <h2 className="section-heading">Do orçamento à mesa da festa</h2>
        </div>

        <ol className="how__list">
          {STEPS.map((s) => (
            <li key={s.n} className="how__step">
              <span className="how__num">{s.n}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="how__cta">
          <p>Já sabe a data? Fala com a gente e garante o seu bolo.</p>
          <a className="btn btn-primary" href={whatsappLink()} target="_blank" rel="noreferrer">
            <WhatsAppIcon size={17} /> Iniciar conversa
          </a>
        </div>
      </div>
    </section>
  );
}
