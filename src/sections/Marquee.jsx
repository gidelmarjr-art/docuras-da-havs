import './Marquee.css';

const ITEMS = [
  'feito à mão',
  'sob encomenda',
  'recheios autorais',
  'buttercream artesanal',
  'para toda ocasião',
  'brigadeiro gourmet',
];

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {track.map((item, i) => (
          <span key={i} className="marquee__item">
            {item}
            <span className="marquee__dot">✧</span>
          </span>
        ))}
      </div>
    </div>
  );
}
