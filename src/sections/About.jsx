import boloPedrarias from '../assets/images/bolo-pedrarias.jpg';
import boloLacosBrancos from '../assets/images/bolo-lacos-brancos.jpg';
import tabletePistache from '../assets/images/tablete-pistache.jpg';
import PipedBorder from '../components/PipedBorder';
import './About.css';

export default function About() {
  return (
    <section id="sobre" className="about">
      <PipedBorder color="var(--wine)" background="var(--peach)" flip height={26} />
      <div className="container about__grid">
        <div className="about__text">
          <span className="eyebrow eyebrow--on-dark">o ateliê</span>
          <h2 className="section-heading about__heading">
            Confeitaria autoral, feita à mão, do começo ao fim
          </h2>
          <p>
            A Doçuras da Havs nasceu da mesma vontade que move todo ateliê
            caseiro: transformar uma data especial em algo que dá gosto de
            fotografar, e mais gosto ainda de comer. Cada bolo é planejado
            do zero: esboço, paleta de cores, escolha do recheio e só depois
            as horas de saco de confeitar.
          </p>
          <p>
            Trabalhamos com pintura à mão, texturas em buttercream, flores
            comestíveis, folha de ouro e toppers personalizados, sempre sob
            encomenda, sempre um projeto único para cada cliente.
          </p>

          <ul className="about__facts">
            <li>
              <strong>Sob encomenda</strong>
              <span>Cada bolo é planejado com antecedência, sem produção em série</span>
            </li>
            <li>
              <strong>Design personalizado</strong>
              <span>Cores, tema e tamanho combinados com quem encomenda</span>
            </li>
            <li>
              <strong>Retirada combinada</strong>
              <span>Combinamos entrega ou retirada direto pelo WhatsApp</span>
            </li>
          </ul>
        </div>

        <div className="about__photos">
          <figure className="about__photo about__photo--a">
            <img src={boloLacosBrancos} alt="Bolo branco com laços de organza e pérolas" loading="lazy" />
          </figure>
          <figure className="about__photo about__photo--b">
            <img src={boloPedrarias} alt="Bolo coberto com pedrarias coloridas" loading="lazy" />
          </figure>
          <figure className="about__photo about__photo--c">
            <img src={tabletePistache} alt="Tablete de chocolate com brigadeiro de pistache" loading="lazy" />
          </figure>
        </div>
      </div>
    </section>
  );
}
