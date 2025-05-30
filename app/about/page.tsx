import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto max-w-4xl py-8">
      {/* 프로필 섹션 */}
      <div className="mb-16 flex flex-col items-start gap-8 md:flex-row">
        <div className="w-full md:w-1/3">
          <Image
            src="/images/profile.jpg"
            alt="김동주 프로필"
            width={300}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="mb-4 text-4xl font-bold dark:text-gray-100">안녕하세요 👋</h1>
          <p className="mb-6 text-xl text-gray-600 dark:text-gray-300">
            꾸준함이 재능인 개발자 김동주입니다.
          </p>

          {/* 연락처 정보 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-gray-600 dark:text-gray-400">🎂 Birth</span>
              <span className="dark:text-gray-200">2001.07.14</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600 dark:text-gray-400">📞 Tel</span>
              <span className="dark:text-gray-200">010-9915-0870</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600 dark:text-gray-400">📧 E-Mail</span>
              <span className="dark:text-gray-200">rlaehdehd20@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* 경력 섹션 */}
      <div className="mt-16">
        <h2 className="mb-8 text-3xl font-bold dark:text-gray-100">💼 Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group hover:border-primary/20 relative rounded-lg border border-gray-200 bg-white p-6 transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="absolute top-6 right-6 text-sm text-gray-500 dark:text-gray-400">
                {exp.period}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{exp.company}</h3>
              <p className="text-primary dark:text-primary-light mt-1">{exp.position}</p>
              <p className="mt-4 text-gray-600 dark:text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 학력 섹션 */}
      <div className="mt-16">
        <h2 className="mb-8 text-3xl font-bold dark:text-gray-100">📚 Educations</h2>
        <div className="space-y-6">
          {educations.map((edu, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold dark:text-gray-100">{edu.school}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 자격증 섹션 */}
      <div className="mt-16">
        <h2 className="mb-8 text-3xl font-bold dark:text-gray-100">🏅 Certifications</h2>
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-lg bg-gray-50 p-4 md:flex-row md:items-center dark:bg-gray-800"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold dark:text-gray-100">{cert.name}</h3>
              </div>
              <div className="mt-2 flex items-center gap-8 md:mt-0">
                <span className="text-gray-600 dark:text-gray-300">{cert.date}</span>
                <span className="text-gray-700 dark:text-gray-200">{cert.organization}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 활동 내역 */}
      <div className="mt-16">
        <h2 className="mb-8 text-3xl font-bold dark:text-gray-100">🎒 Activities</h2>
        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 dark:border-gray-700">
              <h3 className="mb-2 text-xl font-semibold dark:text-gray-100">{activity.title}</h3>
              <p className="mb-3 text-gray-600 dark:text-gray-300">{activity.period}</p>
              <ul className="list-inside list-disc space-y-2">
                {activity.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-700 dark:text-gray-300">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const certifications = [
  {
    name: '정보처리기사',
    date: '2024년 09월 10일',
    organization: '한국산업인력공단',
  },
  {
    name: 'SQLD',
    date: '2024년 4월 5일',
    organization: '한국데이터산업진흥원',
  },
  {
    name: 'TOPCIT 수준3',
    date: '2024년 6월 25일',
    organization: '정보통신기획평가원',
  },
];

const educations = [
  {
    school: '서울여자대학교 정보보호학과',
    period: '2020.3 ~ 2025.8',
  },
];

const activities = [
  {
    title: '정보보호학과 과학생회 보도국장',
    period: '2021.3~2021.12',
    details: [
      '보안 전문 언론사 "보안뉴스"의 뉴스를 학우들에게 카드뉴스 형태로 제공',
      '언론사와의 협업 컨텐츠',
    ],
  },
  {
    title: '알락달락 대학생 교육기부단',
    period: '2021.6~2021.11',
    details: ['초등생 대상 SW 블록코딩 교육 기부 동아리', '활용 툴 : 엔트리'],
  },
  {
    title: '2022 대학생 금융보안캠프',
    period: '2022.6 ~ 2022.8',
    details: ['금융보안원에서 주관하는 금융보안 관련 교육 캠프'],
  },
  {
    title: '디랩 코딩학원 잠실점 튜터',
    period: '2022.12 ~ 2023.8',
    details: ['초,중등 학생 대상으로 블록 코딩 강의', '활용 툴 : 스크래치, 앱인벤터'],
  },
  {
    title: 'KISA 인터넷 거버넌스 집중교육',
    period: '2022.7.18 ~ 2022.7.20',
    details: ['KISA 주관 인터넷 거버넌스 교육 프로그램'],
  },
  {
    title: '개발동아리 UMC 2기',
    period: '2022.3 ~ 2022.7',
    details: ['연합 개발 동아리', 'iOS 파트장 담당'],
  },
  {
    title: '고려대학교 지능정보 SW 아카데미 4기',
    period: '2024.3 ~ 2024.6',
    details: [
      '고려대학교에서 주관하는 AI, 데이터분석 부트캠프 수료',
      '크롤 확장 프로그램 풀스택 개발',
    ],
  },
];

const experiences = [
  {
    company: '(주)지란지교소프트',
    position: '오피스키퍼테크그룹 웹개발팀 인턴',
    period: '2024.09.03 ~ 2024.12.20',
    description: '백오피스 기획 및 개발',
  },
  {
    company: '(주)지란지교소프트',
    position: '오피스키퍼테크그룹 웹개발팀 사원',
    period: '2025.01 ~ 현재',
    description: '오피스키퍼3.0 웹 유지보수 및 개발',
  },
];
