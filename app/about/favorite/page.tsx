import Link from 'next/link';

interface MonthlyDevProps {
  month: string;
  title: string;
  description: string;
  tags: string[];
  status: 'completed' | 'in-progress';
  link?: string;
}

const monthlyDevs: MonthlyDevProps[] = [
  {
    month: '2025년 5월호',
    title: 'AWS Associate 자격증 취득을 목표로!',
    description:
      'AWS 클라우드 아키텍처를 설계하고 구현하는 능력을 검증하는 Solutions Architect Associate 자격증 취득을 위한 공부를 시작했습니다. 인프런의 AWS 자격증 강의와 함께 클라우드 여정을 시작해보려 합니다.',
    tags: ['AWS', 'Cloud', 'Solutions Architect', 'Infrastructure'],
    status: 'in-progress',
    link: '/about/favorite/2025-05',
  },
];

export default function AboutFavorite() {
  return (
    <div className="container mx-auto max-w-4xl py-8">
      {/* 섹션 제목 */}
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">📚 요즘 관심사(a.k.a 월간 개발)</h1>
        <p className="text-xl text-gray-600">
          매월 관심있는 개발 기술을 공부하거나 프로젝트를 진행하면서 느낀 점들을 기록합니다.
        </p>
      </div>

      {/* 월간 개발 */}
      <div className="space-y-8">
        {monthlyDevs.map((dev, index) => (
          <Link
            key={index}
            href={dev.link || '#'}
            className="group hover:border-primary/20 block rounded-lg border border-gray-200 bg-white p-6 transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <span className="bg-primary/10 text-primary dark:bg-primary/20 mb-2 inline-block rounded-full px-3 py-1 text-sm">
                  {dev.month}
                </span>
                <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {dev.title}
                </h2>
              </div>
              {dev.status === 'in-progress' && (
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
                  진행중
                </span>
              )}
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-300">{dev.description}</p>
            <div className="flex flex-wrap gap-2">
              {dev.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {/* 다음 월간 개발 안내 메시지 */}
      <div className="border-primary/30 bg-primary/5 dark:bg-primary/10 dark:border-primary/20 mt-12 rounded-lg border-2 border-dashed p-8 text-center">
        <div className="mb-4 flex items-center justify-center gap-2 text-2xl">
          <span>📝</span>
          <span className="dark:text-gray-100">월간 개발 준비중</span>
          <span>💻</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          다음 달의 새로운 개발 관심사를 준비하고 있어요!
          <br />
          기대해주세요 ~ 🤗
        </p>
      </div>
    </div>
  );
}
