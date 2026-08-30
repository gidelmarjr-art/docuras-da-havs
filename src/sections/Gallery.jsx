import { useMemo, useState } from 'react';
import { CATEGORIES, GALLERY } from '../data/gallery';
import './Gallery.css';

export default function Gallery() {
  const [active, setActive] = useState('todos');

  const items = useMemo(
    () => (active === 'todos' ? GALLERY : GALLERY.filter((g) => g.category === active)),
    [active]
  );

  return (
    <section id="galeria" className="gallery">
      <div className="container">
        <div className="gallery__head">
          <div>
            <span className="eyebrow">portfólio</span>
            <h2 className="section-heading">Doces que já saíram do forno por aqui</h2>
          </div>
          <p className="section-lede">
            Uma amostra do que já foi feito por encomenda, cada peça é
            única, mas serve de ponto de partida para a sua.
          </p>
        </div>

        <div className="gallery__filters" role="tablist" aria-label="Filtrar galeria por categoria">
          {CATEGORIES.map((c) => (
            <button
              key={c.slug}
              role="tab"
              aria-selected={active === c.slug}
              className={`gallery__chip ${active === c.slug ? 'is-active' : ''}`}
              onClick={() => setActive(c.slug)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="gallery__grid">
          {items.map((item) => (
            <figure key={item.id} className={`gallery__item gallery__item--${item.size}`}>
              <img src={item.src} alt={item.desc} loading="lazy" />
              <figcaption>
                <span>{item.title}</span>
                <p>{item.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
