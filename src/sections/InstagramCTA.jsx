import { SITE } from '../data/siteConfig';
import { InstagramIcon, ArrowIcon } from '../components/Icons';
import boloHappyBirthday from '../assets/images/bolo-happy-birthday.jpg';
import boloSara40 from '../assets/images/bolo-sara-40.jpg';
import boloTemaBrasil from '../assets/images/bolo-tema-brasil.jpg';
import caixaDiaDasMaes from '../assets/images/caixa-presente-dia-das-maes.jpg';
import boloMargaridas from '../assets/images/bolo-margaridas-abelhas.jpg';
import './InstagramCTA.css';

const TILES = [boloHappyBirthday, boloSara40, boloTemaBrasil, caixaDiaDasMaes, boloMargaridas];

export default function InstagramCTA() {
  return (
    <section className="insta">
      <div className="container insta__inner">
        <div className="insta__text">
          <span className="eyebrow eyebrow--on-dark">bastidores</span>
          <h2 className="section-heading insta__heading">
            O dia a dia do ateliê está no Instagram
          </h2>
          <p>
            Processo, encomendas do mês e novidades de sabor a gente posta lá
            primeiro. Segue pra não perder nada e mandar aquele direct com
            a sua ideia.
          </p>
          <a className="btn btn-primary" href={SITE.instagramUrl} target="_blank" rel="noreferrer">
            <InstagramIcon size={17} /> Seguir {SITE.instagramHandle} <ArrowIcon size={14} />
          </a>
        </div>

        <div className="insta__tiles">
          {TILES.map((src, i) => (
            <a
              key={i}
              href={SITE.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="insta__tile"
            >
              <img src={src} alt="Foto do Instagram do ateliê" loading="lazy" />
              <span className="insta__overlay">
                <InstagramIcon size={20} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
