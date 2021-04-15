import bacteria from '../assets/AirSound/bacteria.jpg'
import carbonFilter from '../assets/AirSound/carbonFilter.jpg'
import bubbles from '../assets/AirSound/bubbles.jpg'
// import installationDirt from '../assets/AirSound/installationDirt.jpg'
import orangeLungs from '../assets/AirSound/orangeLungs.jpg'
import particlesAir from '../assets/AirSound/particlesAir.jpg'
// import water from '../assets/AirSound/water.jpg'
import airIn from '../assets/AC/airIn.jpg'

const installationData = [
  {
    id: 0,
    picture: orangeLungs,

    title: 'Pomiary i regulacje',
    description: 'Wpływ na zdrowie i komfort użytkowników',
  },
  {
    id: 1,
    picture: airIn,
    title: 'Wentylacja grawitacyjna',
    description:
      'Wentylacja grawitacyjna, w budownictwie mieszkalnym, oraz mechaniczna np. w biurowcach, ma za zadanie dostarczyć powietrze odpowiedniej jakości dla użytkowników pomieszczeń.',
    description2:
      'Poza profesjonalnym montażem, niezbędne jest dokonywanie okresowych przeglądów, serwisów i pomiarów systemów wentylacyjnych.',
  },

  {
    id: 3,
    picture: particlesAir,

    title: 'Stężenie CO2',
    description:
      'Zbyt wysokie stężenie CO2 w powietrzu bezpośrednio wpływa na pojawienie się uczucia zmęczenia, obniżenie koncentracji oraz percepcji.',
    description2:
      'Przy wartościach powyżej 2500ppm jest to sytuacja niebezpieczna dla zdrowia.',
    description3:
      'Zaleca się okresowe przeglądy instalacji wentylacyjnych oraz pomiary przepływu powietrza. Odpowiednio wyregulowana instalacja, zgodnie z potrzebami i wartościami obliczonymi przez projektanta, zapewni użytkownikom komfort i zdrowie.',
  },
  {
    id: 4,
    picture: bacteria,
    title: 'Higiena wentylacji',
    description:
      'Zagrożenie stanowią bakterie i grzyby. Mogą się one znajdować w zabrudzonych przewodach wentylacyjnych. Ich powstawaniu sprzyja, źle odprowadzona wilgoć i odkładające się cząsteczki kurzu i brudu. Obecność takich patogenów we wdychanym powietrzu jest przyczynkiem wielu groźnych chorób płuc, skóry, oczu, a może nawet sprzyjać powstawaniu nowotworów.',
  },
  {
    id: 5,
    picture: bubbles,
    title: 'Zdrowe i bezpieczne powietrze',
    description:
      'Regulacja temperatury i komfort użytkownika nie jest jedyną funkcją klimatyzacji. Prawidłowo zadbane urządzania sprzyjają utrzymaniu zdrowia.',
    description2:
      'Zaletą klimatyzatorów oprócz np. kontroli temperatury w upalne dni jest filtrowanie powietrza. Jest to korzystne w przypadku klimatyzacji przeznaczonej dla alergików, dzieci, czy też osób chorych na astmę. W obecnych czasach jest to również przydatne dla osób zdrowych, z racji rosnącego zanieczyszczenia powietrza.',
  },
  {
    id: 6,
    picture: carbonFilter,
    title: 'Utrzymanie czystości filtrów',
    description:
      'Filtry w klimatyzatorach należy regularnie czyścić i wymieniać. Nawet najbardziej zaawansowane technologie nie zastąpią czujności odpowiedzialnego administratora.',
    description2:
      'Filtr mechaniczny siatkowy, zatrzymujący cząsteczki kurzu i pyłu należy czyścić nie rzadziej niż co 2-3 tygodnie. Dalej umieszczone delikatniejsze filtry oczyszczające i np. filtry HEPA również wymagają uwagi i troski.',
  },
]

export { installationData }
