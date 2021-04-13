// import solarSaw1 from '../assets/Installation/solarSaw1.jpg'
import saw3 from '../assets/Installation/saw3.jpg'
import solarSaw3 from '../assets/Installation/solarSaw3.jpg'
import ventilationChannel from '../assets/Installation/ventilationChannel.jpg'
import CentralaVentSaw2 from '../assets/Installation/CentralaVentSaw2.jpg'

import PipesVent from '../assets/AC/PipesVent.jpg'
import PipesVentCropped from '../assets/AC/PipesVentCropped.jpg'
// import VentCeiling from '../assets/AC/VentCeiling.jpg'
const installationData = [
  {
    id: 0,
    picture: PipesVent,
    pictureCropped: PipesVentCropped,
    title: 'Przykładowe instalacje wykonane w latach 2013-2020',
    description:
      'Specjalizujemy się w instalacjach wentylacyjnych o różnych zastosowaniach.',
  },
  {
    id: 1,
    picture: ventilationChannel,
    title: 'Wentylacja mechaniczna wraz z oddymianiem',
    description: 'Budynek Hipoteki przy Al. Solidarności 58 w Warszawie.',
    description2: 'Budynek usługowy przy ul. Kasprowicza w Warszawie.',
  },

  {
    id: 3,
    picture: CentralaVentSaw2,
    title: 'Wentylacja mechaniczna i chłodzenie',
    description: 'Pomieszczenia budynku w Sądu Okręgowego w Warszawie',
    description2: 'Budynek biurowo-magazynowy w Piasecznie',
    description3: 'Pomieszczenia strefy ochronnej w kancelarii sejmu',
    description4:
      'Sale zabiegowe jednodniowej chirurgii plastycznej, Klinika przy ulicy Abrahama w Warszawie',
  },
  {
    id: 4,
    picture: saw3,
    title: 'Instalacja gazowa z urządzeniami grzewczymi',
    description:
      'Budynek biurowo-magazynowy w Piascznie. Uwzględniając: detrafikatory, przyłącze gazu, punkt redukcyjno-pomiarowy, pakietem kominowy do kotłowni.',
  },
  {
    id: 5,
    picture: solarSaw3,
    title: 'Instalacja solarna',
    description: 'Sawice, budynek użytkowy.',
  },
]

export { installationData }
