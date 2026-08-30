import { CATEGORY_CARDS } from '../data/gallery';
import { ArrowIcon } from '../components/Icons';
import './Categories.css';

export default function Categories() {
  return (
    <section id="categorias" className="categories">
      <div className="container">
        <div className="categories__head">
          <span className="eyebrow">o que fazemos</span>
          <h2 className="section-heading">Cada encomenda começa com uma conversa</h2>
          <p className="section-lede">
            Conte a ocasião, as cores e o gosto de quem vai comemorar: o
            resto é traduzido em açúcar, manteiga e muita paciência com o
            saco de confeitar.
          </p>
        </div>

        <div className="categories__grid">
          {CATEGORY_CARDS.map((c, i) => (
            <a href="#galeria" key={c.slug} className={`cat-card cat-card--${i}`}>
              <div className="cat-card__img">
                <img src={c.img} alt={c.title} loading="lazy" />
              </div>
              <div className="cat-card__body">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <span className="cat-card__link">
                  Ver exemplos <ArrowIcon size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
