import React from 'react'
import FujiElectric from '../components/svg/FujiElectric'
import Daikin from '../components/svg/Daikin'
import Fujitsu from '../components/svg/Fujitsu'
import Gree from '../components/svg/Gree'
import Lg from '../components/svg/Lg'
import Mitsubishi from '../components/svg/Mitsubishi'
import Panasonic from '../components/svg/Panasonic'
import Samsung from '../components/svg/Samsung'
import fujiElectric from '../assets/logos/fujiElectric.jpg'
import fujitsuTower from '../assets/logos/fujitsuTower.jpg'
import LGBuilding from '../assets/logos/LGBuilding.jpg'
import seoulNight from '../assets/logos/seoulNight.jpg'

const techData = [
  {
    name: 'Samsung',
    picture: seoulNight,
    logo: <Samsung />,
    motto: 'Niezawodne produkty, które pracują dla Ciebie.',
    description:
      'Jako światowy lider w zakresie technologii firma Samsung nieustannie wykorzystuje innowacje i nowe odkrycia, aby w sposób ciągły zmieniać oblicze branży elektronicznej. Przez ostatnie czterdzieści lat stosowaliśmy te same przełomowe innowacje w systemach klimatyzacji. Dzięki niesamowitej konstrukcji oraz zaawansowanym funkcjom systemy klimatyzacji firmy Samsung rewolucjonizują branżę klimatyzacyjną.',
    link: 'https://www.samsung.com/pl/business/climate/',
  },
  {
    name: 'Fuji Electric',
    picture: fujiElectric,
    logo: <FujiElectric />,
    motto: 'Innovating Energy Technology',
    description:
      'Fuji Electric uses its core competence in electric and thermal energy technology in order to contribute to responsible and sustainable societies.',
    link: 'https://www.fujielectric-europe.com/',
  },

  {
    name: 'Fujitsu',
    picture: fujitsuTower,
    logo: <Fujitsu />,
    motto: 'Living together for our future',
    description:
      'Fujitsu General creates high-quality and environmentally-friendly products that provide good comfort in accordance with our basic policy to a "create comfortable environment" by utilizing the air conditioning technology and creativity we have fostered over many years.',
    link: 'https://www.fujitsu.com/pl/',
  },
  {
    name: 'Lg',
    picture: LGBuilding,
    logo: <Lg />,
    motto: "Żyj zdrowo - Life's good.",
    description:
      'LG oferuje szeroki wybór klimatyzatorów. Dzięki klimatyzacji możesz cieszyć się optymalną temperaturą wszędzie, o każdej porze dnia i nocy. Kontroluj temperaturę Twojego pomieszczenia dzięki różnorodnym opcjom klimatyzacji LG, w tym systemom single- i multi-split, Multi V™ i heat recovery, które sprawiają, że powietrze jest świeższe i czystsze. ',
    link: 'https://www.lg.com/pl/klimatyzacja',
  },
  {
    name: 'Mitsubishi',
    picture: LGBuilding,
    logo: <Mitsubishi />,
    motto: 'Zmieniamy świat na lepsze przy użyciu zaawansowanych technologii.',
    description:
      'Od momentu powstania w 1921 roku Mitsubishi Electric jest liderem rozwoju myśli technicznej i innowacyjnych produktów w Japonii.',
    link: 'https://pl.mitsubishielectric.com/pl/index.html',
  },

  {
    name: 'Daikin',
    picture: LGBuilding,
    logo: <Daikin />,
    motto: 'Energooszczędna klimatyzacja w twoim domu',
    description:
      'Ponad 90 lat doświadczenia w klimatyzacji umożliwia nam oferowanie najbardziej komfortowych, energooszczędnych i niezawodnych rozwiązań dostępnych na rynku.',
    link:
      'https://www.daikin.pl/pl_pl/klimatyzacja-ogrzewanie-wentylacja/do-domu/klimatyzator.html',
  },

  {
    name: 'Gree',
    picture: LGBuilding,
    logo: <Gree />,
    motto: '30 lat doświadczenia',
    description:
      'Gree stale realizuje misję od „made in China” do „create in China”. Dzięki doskonałej jakości i niezawodności, nowoczesnym technologiom oraz dbałości o środowisko, Gree zapracowała na miano marki godnej zaufania. Klimatyzatory Gree są znane i cenione na całym świecie. Sprzedawane są w ponad 160 krajach, a liczba użytkowników przekracza 300 milionów osób. W Polsce obecne są od ponad 14 lat dzięki Free Polska – wyłącznemu importerowi klimatyzatorów marki Gree w Polsce.',
    link: 'https://gree.pl/',
  },
  {
    name: 'Panasonic',
    picture: LGBuilding,
    logo: <Panasonic />,
    motto: 'Wydajność i oszczędności.',
    description:
      'Oddany idei ochrony środowiska oraz oszczędności energii, Panasonic Heating and Cooling Solutions oferuje najlepszą wydajność i pracę jednostek, tym samym prowadząc do znacznie niższych rachunków za energię. Dzięki doświadczeniu gromadzonemu od ponad 30 lat oraz sprzedaży produktów do ponad 120 krajów, firma Panasonic niezaprzeczalnie zajmuje czołową pozycję w sektorze ogrzewania i chłodzenia.',
    link: 'https://www.aircon.panasonic.eu/PL_pl/',
  },
]

export { techData }
