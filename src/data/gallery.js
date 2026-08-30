import boloTemaBrasil from '../assets/images/bolo-tema-brasil.jpg';
import boloLeviBrasil from '../assets/images/bolo-alt2.jpg';
import boloMargaridas from '../assets/images/bolo-margaridas-abelhas.jpg';
import boloCasamento from '../assets/images/bolo-casamento-tres-andares.jpg';
import boloDiaDosPais from '../assets/images/bolos-dia-dos-pais.jpg';
import boloJardimRosas from '../assets/images/bolo-jardim-rosas.jpg';
import boloClassicoRosa from '../assets/images/bolo-classico-rosa.jpg';
import boloLacoPink from '../assets/images/bolo-laco-pink.jpg';
import boloPedrarias from '../assets/images/bolo-pedrarias.jpg';
import caixaDiaDasMaes from '../assets/images/caixa-presente-dia-das-maes.jpg';
import tableteFerrero from '../assets/images/tablete-ferrero.jpg';
import tabletePistache from '../assets/images/tablete-pistache.jpg';
import boloLacosBrancos from '../assets/images/bolo-lacos-brancos.jpg';
import boloFloralDourado from '../assets/images/bolo-floral-rosa-dourado.jpg';
import boloHappyBirthday from '../assets/images/bolo-happy-birthday.jpg';
import boloSara40 from '../assets/images/bolo-sara-40.jpg';

// Categorias usadas nos filtros da galeria e nas categorias em destaque
export const CATEGORIES = [
  { slug: 'todos', label: 'Todos' },
  { slug: 'aniversario', label: 'Aniversário' },
  { slug: 'casamento', label: 'Casamento' },
  { slug: 'tematico', label: 'Temáticos' },
  { slug: 'doces', label: 'Docinhos & caixas' },
];

export const GALLERY = [
  {
    id: 'jardim-rosas',
    src: boloJardimRosas,
    title: 'Jardim de rosas',
    desc: 'Bolo aniversário com portal e trepadeira de rosas em buttercream',
    category: 'tematico',
    size: 'tall',
  },
  {
    id: 'casamento',
    src: boloCasamento,
    title: 'Três andares clássico',
    desc: 'Bolo de casamento em três andares, drapeados em buttercream branco',
    category: 'casamento',
    size: 'tall',
  },
  {
    id: 'tema-brasil',
    src: boloTemaBrasil,
    title: 'Verde e amarelo',
    desc: 'Bolo temático seleção brasileira, degradê em buttercream',
    category: 'tematico',
    size: 'wide',
  },
  {
    id: 'levi-brasil',
    src: boloLeviBrasil,
    title: 'Camisa 10',
    desc: 'Bolo de mesversário com camisa da seleção em buttercream',
    category: 'aniversario',
    size: 'normal',
  },
  {
    id: 'margaridas',
    src: boloMargaridas,
    title: 'Margaridas & abelhinhas',
    desc: 'Bolo pintado à mão com margaridas e trilha de abelhas',
    category: 'aniversario',
    size: 'normal',
  },
  {
    id: 'classico-rosa',
    src: boloClassicoRosa,
    title: 'Laços & buquês',
    desc: 'Bolo clássico com drapeados, laços e buquês em buttercream rosa',
    category: 'casamento',
    size: 'normal',
  },
  {
    id: 'laco-pink',
    src: boloLacoPink,
    title: 'Laço pink',
    desc: 'Bolo canelado com pérolas e laço de organza pink',
    category: 'aniversario',
    size: 'tall',
  },
  {
    id: 'pedrarias',
    src: boloPedrarias,
    title: 'Pedraria colorida',
    desc: 'Bolo coberto com aplicação de pedrarias coloridas',
    category: 'aniversario',
    size: 'normal',
  },
  {
    id: 'lacos-brancos',
    src: boloLacosBrancos,
    title: 'Laços de noiva',
    desc: 'Bolo branco com laços de organza e pérolas, para casamentos e bodas',
    category: 'casamento',
    size: 'normal',
  },
  {
    id: 'floral-dourado',
    src: boloFloralDourado,
    title: 'Pintura floral & folha de ouro',
    desc: 'Flores pintadas à mão com detalhes em folha de ouro comestível',
    category: 'aniversario',
    size: 'wide',
  },
  {
    id: 'happy-birthday',
    src: boloHappyBirthday,
    title: 'Happy Birthday colorido',
    desc: 'Lettering colorido feito à mão em buttercream branco',
    category: 'aniversario',
    size: 'normal',
  },
  {
    id: 'sara-40',
    src: boloSara40,
    title: 'Flores pintadas',
    desc: 'Bolo com flores pintadas à mão e topper personalizado',
    category: 'aniversario',
    size: 'normal',
  },
  {
    id: 'dia-dos-pais',
    src: boloDiaDosPais,
    title: 'Caixas Dia dos Pais',
    desc: 'Mini bolos e brigadeiros temáticos em caixa presente',
    category: 'doces',
    size: 'wide',
  },
  {
    id: 'dia-das-maes',
    src: caixaDiaDasMaes,
    title: 'Caixa Dia das Mães',
    desc: 'Mini bolo e brigadeiros florais em caixa presente com fita',
    category: 'doces',
    size: 'normal',
  },
  {
    id: 'tablete-ferrero',
    src: tableteFerrero,
    title: 'Tablete Ferrero',
    desc: 'Tablete de chocolate ao leite com trufas e avelãs',
    category: 'doces',
    size: 'normal',
  },
  {
    id: 'tablete-pistache',
    src: tabletePistache,
    title: 'Tablete pistache',
    desc: 'Tablete de chocolate com ganache e brigadeiro de pistache',
    category: 'doces',
    size: 'normal',
  },
];

export const CATEGORY_CARDS = [
  {
    slug: 'aniversario',
    title: 'Bolos de aniversário',
    desc: 'Temas, cores e personagens escolhidos por você, do smash cake aos 100 anos.',
    img: boloFloralDourado,
  },
  {
    slug: 'casamento',
    title: 'Bolos de casamento',
    desc: 'Andares, drapeados e sabores para o dia mais importante.',
    img: boloCasamento,
  },
  {
    slug: 'doces',
    title: 'Docinhos & caixas presente',
    desc: 'Brigadeiros gourmet, tabletes e mini bolos para presentear.',
    img: tableteFerrero,
  },
  {
    slug: 'tematico',
    title: 'Bolos temáticos',
    desc: 'Pintura à mão, esculturas e cenários, sem limite pra criatividade.',
    img: boloJardimRosas,
  },
];
