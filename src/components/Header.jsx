import { useEffect, useState } from 'react';
import { SITE, whatsappLink } from '../data/siteConfig';
import { WhatsAppIcon, MenuIcon, CloseIcon } from './Icons';
import './Header.css';

const LINKS = [
  { href: '#categorias', label: 'O que fazemos' },
  { href: '#sobre', label: 'Ateliê' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#como-funciona', label: 'Como pedir' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a href="#topo" className="site-header__logo">
          Doçuras <span>da Hav's</span>
        </a>

        <nav className="site-header__nav">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a
            className="btn btn-primary site-header__cta"
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon size={16} /> Pedir orçamento
          </a>
          <button
            className="site-header__burger"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div className={`site-header__mobile ${open ? 'is-open' : ''}`}>
        <nav>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <a
          className="btn btn-primary"
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          <WhatsAppIcon size={16} /> Pedir orçamento
        </a>
        <p className="site-header__handle">{SITE.instagramHandle}</p>
      </div>
    </header>
  );
}
