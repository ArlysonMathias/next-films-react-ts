import * as T from "../assets/types/types";

export const mockedFilms: T.Film[] = [
  {
    name: "A era do gelo",
    image: "https://i.ibb.co/FzqPkpj/eradogelo.png",
    description:
      "Vinte mil anos atrás, num mundo coberto de gelo, o mamute Manfred e a preguiça Sid resgatam um bebê humano órfão. Agora, os dois vão enfrentar muitas aventuras até devolver o filhote de gente à sua tribo, que migrou para um novo acampamento. ",
    categoryId: "4334932a-8f62-4c4e-a653-da4it74d11m0",
  },
  {
    name: "As branquelas",
    image: "https://i.ibb.co/WNh9ymq/asbranquelas.png",
    description:
      "Dois irmãos agentes do FBI, Marcus e Kevin Copeland, acidentalmente evitam que bandidos sejam presos em uma apreensão de drogas. Como castigo, eles são forçados a escoltar um par de socialites nos Hamptons. Porém, quando as meninas descobrem o plano da agência, se recusam a ir. Sem opções, Marcus e Kevin decidem posar como as irmãs, transformando-se de homens afro-americanos em um par de loiras.",
    categoryId: "4334932a-8f62-4c4e-a653-da4ac59d90v0",
  },
  {
    name: "O senhor dos Anéis",
    image: "https://i.ibb.co/NYbmyDy/senhordosaneis.png",
    description:
      "Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela frente, onde encontra perigo, medo e seres bizarros. Ao seu lado para o cumprimento desta jornada, ele aos poucos pode contar com outros hobbits, um elfo, um anão, dois humanos e um mago, totalizando nove seres que formam a Sociedade do Anel.",
    categoryId: "4334932a-8f62-4c4e-a653-da4ac59d65f3",
  },
  {
    name: "Constantine",
    image: "https://i.ibb.co/1nLCMm9/constantine.png",
    description:
      "Contos sobrenaturais baseados nas histórias em quadrinhos 'Hellblazer'. O solitário Constantine tenta garantir seu lugar no paraíso enviando demônios de volta ao inferno, mas seu destino está ligado ao de Angela, uma policial que investiga o suposto suicídio de sua irmã gêmea.",
    categoryId: "4334932a-8f62-4c4e-a653-da4ac59d65f3",
  },
  {
    name: "O auto da compadecida",
    image: "https://i.ibb.co/t2pCPjP/auto-compadecida.png",
    description:
      "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
    categoryId: "4334932a-8f62-4c4e-a653-da4ac59d90v0",
  },
  {
    name: "Top Gun",
    image: "https://i.ibb.co/pzzh5bB/topgun.png",
    description:
      "A escola naval de pilotos é onde o melhor dos melhores treinam para refinar suas habilidades de voo de elite. Quando o piloto Maverick é enviado para a escola, sua atitude irresponsável e comportamento arrogante o colocam em desacordo com os outros pilotos, especialmente Iceman. Porém Maverick não está apenas competindo para ser o piloto superior de caça, ele também está lutando pela atenção de sua bonita instrutora de voo, Charlotte Blackwood.",
    categoryId: "4334932a-8f62-4c4e-a653-da4it74d11m0",
  },
];

export const mockedCategories: T.Categories[] = [
  {
    id: "4334932a-8f62-4c4e-a653-da4ac59d65f3",
    name: "Ação",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4334932a-8f62-4c4e-a653-da4it74d11m0",
    name: "Aventura",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4334932a-8f62-4c4e-a653-da4ac59d90v0",
    name: "Comédia",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockedUser: T.User[] = [
  {
    id: "0225cec9-49ff-4446-be3b-8a56921dbcda",
    name: "Arlyson",
    email: "mathias@gmail.com",
    password: "ABCD1234",
    createdAt: new Date(),
  },
  {
    id: "4b6e3edc-8046-4192-b124-f5c27d86097b",
    name: "Julia",
    email: "julia@gmail.com",
    password: "ABCD1234",
    createdAt: new Date(),
  },
];

export const mockedFavoritiesFilms: T.Favorites[] = [
  {
    id: "581c1bfe-5152-4790-90f6-3da38eb77af7",
    filmName: "As branquelas",
    userId: "0225cec9-49ff-4446-be3b-8a56921dbcda",
  },
  {
    id: "da9d0bde-53cb-4930-936d-ffaaa34fc1f0",
    filmName: "A era do gelo",
    userId: "581c1bfe-5152-4790-90f6-3da38eb77af7",
  },
  {
    id: "eeb1b715-9c5d-4821-8bb2-52c9fde20573",
    filmName: "A era do gelo",
    userId: "4b6e3edc-8046-4192-b124-f5c27d86097b",
  },
];
