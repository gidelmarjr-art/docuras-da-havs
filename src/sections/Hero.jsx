import boloJardimRosas from '../assets/images/bolo-jardim-rosas.jpg';
import boloClassicoRosa from '../assets/images/bolo-classico-rosa.jpg';
import { whatsappLink, SITE } from '../data/siteConfig';
import { WhatsAppIcon, InstagramIcon } from '../components/Icons';
import PipedBorder from '../components/PipedBorder';
import './Hero.css';

export default function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="hero__grid">
        <div className="hero__copy">
          <span className="eyebrow">Feito à mão e com muito carinho</span>
          <h1 className="hero__title">
            Bolos que <em>viram</em>
            <br />
            memória afetiva
          </h1>
          <p className="hero__lede">
            Ateliê artesanal de bolos e doces personalizados. Cada encomenda é
            desenhada, esculpida e decorada à mão, do esboço à última pétala
            de buttercream, para aniversários, casamentos e qualquer data que
            mereça ser comemorada com açúcar.
          </p>
          <div className="hero__actions">
            <a className="btn btn-primary" href={whatsappLink()} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={17} /> Pedir orçamento
            </a>
            <a className="btn btn-ghost" href={SITE.instagramUrl} target="_blank" rel="noreferrer">
              <InstagramIcon size={17} /> {SITE.instagramHandle}
            </a>
          </div>

          <dl className="hero__stats">
            <div>
              <dt>100%</dt>
              <dd>Sob encomenda</dd>
            </div>
            <div>
              <dt>+</dt>
              <dd>Recheios & temas à escolha</dd>
            </div>
            <div>
              <dt>1:1</dt>
              <dd>Cada bolo, um projeto único</dd>
            </div>
          </dl>
        </div>

        <div className="hero__gallery">
          <figure className="hero__photo hero__photo--main">
            <img src={boloJardimRosas} alt="Bolo temático com portal e trepadeira de rosas em buttercream" />
          </figure>
          <figure className="hero__photo hero__photo--sub">
            <img src={boloClassicoRosa} alt="Bolo clássico com drapeados e buquês em buttercream rosa" />
          </figure>
        </div>
      </div>

      <PipedBorder color="var(--wine)" background="var(--peach)" height={30} />
    </section>
  );
}
