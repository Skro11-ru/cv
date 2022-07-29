import { defineStore } from 'pinia';

export interface ILinkedIn {
  nickName: string;
  link: string;
}

export interface ITelegram {
  nickName: string;
  link: string;
}

export interface IGithub {
  nickName: string;
  link: string;
}

export interface IContact {
  address: string;
  mail: string;
  linkedIn: ILinkedIn;
  telegram: ITelegram;
  github: IGithub;
}

export interface IEducationList {
  id: number;
  educationalInstitution: string;
  specialty: string;
  startDate: string;
  endDate: string;
}

export interface IWorkExperienceList {
  id: number;
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  project: string;
  technologyStack: string[];
  functions: string[];
}

export interface ILanguage {
  id: number;
  label: string;
  name: string;
  level: string;
}

export interface ICV {
  surname: string;
  name: string;
  gender: string;
  position: string;
  dateOfBirth: string;
  aboutMe: string;
  contact: IContact;
  educationList: IEducationList[];
  workExperienceList: IWorkExperienceList[];
  language: ILanguage[];
}

export const useCVStore = defineStore({
  id: 'storeCV',
  state: () => {
    return {
      myCV: {
        surname: 'Бунецкий',
        name: 'Дмитрий',
        gender: 'Мужской',
        position: 'Frontend-разработчик',
        dateOfBirth: '15.12.1990',
        aboutMe:
          'Добрый день! Меня зовут Дмитрий, я frontend-разработчик.\n' +
          'Большое количество времени уделяю самообразованию, не боюсь трудностей и сложных задач. В настоящее время изучаю React, Redux. Готов изучать новый стек технологий, который пригодится мне во время работы.\n' +
          'Желаю стать частью дружной и профессиональной команды, в которой я мог бы развивать свои навыки разработки для достижения командных результатов.',
        contact: {
          address: 'Россия, гор. Томск',
          mail: 'bunetskydn@gmail.com',
          linkedIn: {
            nickName: 'DmitryBunetsky',
            link: 'https://www.linkedin.com/in/dmitrybunetsky/',
          } as ILinkedIn,
          telegram: { nickName: '@Skro11', link: 'https://t.me/skro11' } as ITelegram,
          github: { nickName: '@Skro11-ru', link: 'https://github.com/Skro11-ru' } as IGithub,
        } as IContact,
        educationList: [
          {
            id: 1,
            educationalInstitution:
              'Национальный исследовательский Томский государственный университет',
            specialty: 'Экономический факультет, Финансы и кредит (экономист)',
            startDate: '2008',
            endDate: '2013',
          },
          {
            id: 2,
            educationalInstitution:
              'Национальный исследовательский Томский политехнический университет',
            specialty: 'Энергетический институт, Электроснабжение (инженер)',
            startDate: '2013',
            endDate: '2014',
          },
          {
            id: 3,
            educationalInstitution: 'HTML Academy',
            specialty: 'Тренажёры HTML Academy',
            startDate: '2019',
            endDate: '2019',
          },
          {
            id: 4,
            educationalInstitution: 'Cisco Networking Academy',
            specialty: 'Computer Academy Step - Tula, IT Essentials',
            startDate: '2020',
            endDate: '2021',
          },
          {
            id: 5,
            educationalInstitution: 'Hexlet',
            specialty: 'Фронтенд-разработчик',
            startDate: '2021',
            endDate: '2021',
          },
        ] as IEducationList[],
        workExperienceList: [
          {
            id: 1,
            companyName: 'Томская распределительная компания, ОАО',
            position:
              'Заместитель начальника службы учета электроэнергии, нормирования потерь и энергоснабжения',
            startDate: '2013.07',
            endDate: '2021.12',
            project: '',
            technologyStack: [],
            functions: [
              'Организация работы службы.',
              'Реализация программы перспективного развития системы учета электроэнергии.',
              'Взаимодействие с заводами изготовителями приборов учета электроэнергии и подрядными организациями.',
            ],
          },
          {
            id: 2,
            companyName: 'SMART ACADEMY',
            position: 'Frontend-разработчик (стажер)',
            startDate: '2021.08',
            endDate: '2022.01',
            project: '',
            technologyStack: [
              'Vue.js',
              'Vue Router',
              'Vuex',
              'JS',
              'HTML5',
              'SSC3',
              'SASS',
              'REST API',
            ],
            functions: [
              'Адаптивная верстка веб приложений.',
              'Разработка логики пользовательского интерфейса.',
              'Создание и настройка маршрутизации.',
              'Интеграция с сервером.',
            ],
          },
          {
            id: 3,
            companyName: 'SMART WORLD',
            position: 'Frontend-разработчик',
            startDate: '2022.01',
            endDate: 'наст. вр.',
            project: 'Автоматизация производства',
            technologyStack: [
              'Vue.js',
              'Vue Router',
              'Vuex',
              'JS',
              'TS',
              'HTML5',
              'SSC3',
              'SASS',
              'REST API',
              'Figma',
            ],
            functions: [
              'Разработка пользовательского интерфейса.',
              'Разработка независимых модулей.',
              'Участие в проектировании архитектуры проекта.',
              'Адаптивная верстка.',
              'Разработка и поддержка уникального UiKit.',
              'Интеграция с сервером.',
            ],
          },
        ] as IWorkExperienceList[],
        language: [
          { id: 1, label: 'ru', name: 'Русский', level: 'родной' },
          { id: 2, label: 'en', name: 'Английский', level: 'A2' },
        ] as ILanguage[],
      } as ICV,
    };
  },
  actions: {},
  getters: {
    getMyCV: (state) => state.myCV,
    getMyEducationList: (state) => [...state.myCV.educationList].reverse(),
    getMyWorkExperienceList: (state) => [...state.myCV.workExperienceList].reverse(),
    getAboutMe: (state) => state.myCV.aboutMe.split('\n'),
  },
});
