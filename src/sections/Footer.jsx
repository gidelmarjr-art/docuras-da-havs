import { SITE, whatsappLink } from '../data/siteConfig';
import { WhatsAppIcon, InstagramIcon, PinIcon } from '../components/Icons';
import PipedBorder from '../components/PipedBorder';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="contato" className="footer">
      <PipedBorder color="var(--wine)" background="var(--peach)" height={26} />
      <div className="container footer__inner">
        <div className="footer__main">
          <div className="footer__brand">
            <p className="footer__logo">
              Doçuras <span>da Hav's</span>
            </p>
            <p className="footer__tagline">{SITE.tagline}, sob encomenda.</p>

            <div className="footer__socials">
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="footer__social">
                <WhatsAppIcon size={16} /> WhatsApp
              </a>
              <a href={SITE.instagramUrl} target="_blank" rel="noreferrer" className="footer__social">
                <InstagramIcon size={16} /> {SITE.instagramHandle}
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Navegação</h4>
            <a href="#categorias">Nosso Trabalho</a>
            <a href="#sobre">Ateliê</a>
            <a href="#galeria">Galeria</a>
            <a href="#como-funciona">Como pedir</a>
          </div>

          <div className="footer__col">
            <h4>Contato</h4>
            <span className="footer__line">
              <PinIcon size={14} /> {SITE.city}
            </span>
            <span className="footer__line">{SITE.email}</span>
            <a className="btn btn-primary footer__cta" href={whatsappLink()} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={16} /> Pedir orçamento
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Doçuras da Hav's. Todos os direitos reservados.</p>
          <p>Feito à mão, pixel a pixel 🍰</p>
        </div>
      </div>
    </footer>
  );
}
