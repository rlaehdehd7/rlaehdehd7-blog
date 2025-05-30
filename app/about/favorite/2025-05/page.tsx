export default function MonthlyDev202505() {
  return (
    <div className="container mx-auto max-w-4xl py-8">
      {/* 헤더 섹션 */}
      <div className="mb-12">
        <div className="bg-primary/10 text-primary dark:bg-primary/20 mb-4 inline-block rounded-full px-3 py-1">
          2025년 5월호
        </div>
        <h1 className="mb-6 text-4xl font-bold dark:text-gray-100">
          AWS Associate 자격증 취득을 목표로!
        </h1>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300">
            AWS
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300">
            Cloud
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300">
            Solutions Architect
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300">
            Infrastructure
          </span>
        </div>
      </div>

      {/* 본문 섹션 */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2>AWS 자격증 도전 배경</h2>
        <p>
          클라우드 기술이 IT 업계의 표준이 되어가는 현재, AWS Solutions Architect Associate 자격증
          취득을 통해 클라우드 아키텍처에 대한 이해도를 높이고 실무 역량을 강화하고자 합니다.
        </p>

        <h2>학습 계획</h2>
        <p>
          인프런의{' '}
          <a
            href="https://www.inflearn.com/course/aws-%EC%9E%90%EA%B2%A9%EC%A6%9D-%EC%96%B4%EC%86%8C%EC%8B%9C%EC%97%90%EC%9D%B4%ED%8A%B8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 dark:text-primary-light dark:hover:text-primary-light/80 underline"
          >
            AWS 자격증 Solutions Architect - Associate 강의
          </a>
          를 통해 체계적으로 학습을 진행하고 있습니다. 이 강의는 AWS의 핵심 서비스들을 실습과 함께
          학습할 수 있고, 실전 문제 풀이도 포함되어 있어 선택하게 되었습니다.
        </p>

        <h3>주요 학습 내용</h3>
        <ul>
          <li>EC2, S3, RDS 등 AWS의 핵심 서비스 이해</li>
          <li>고가용성과 확장성을 갖춘 아키텍처 설계 원칙</li>
          <li>보안 및 비용 최적화 전략</li>
          <li>실전 문제 풀이를 통한 시험 대비</li>
        </ul>

        <h2>현재 진행 상황</h2>
        <div className="not-prose mb-8 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
          <div className="flex items-center">
            <span className="mr-2 text-yellow-800 dark:text-yellow-200">🎯</span>
            <span className="font-medium text-yellow-800 dark:text-yellow-200">진행중</span>
          </div>
          <p className="mt-2 text-yellow-700 dark:text-yellow-100">
            현재 AWS의 기본 서비스들에 대한 학습을 진행하고 있으며, 실습을 통해 실제 서비스 구성
            방법을 익히고 있습니다.
          </p>
        </div>

        <h2>앞으로의 계획</h2>
        <p>
          강의 수강과 함께 AWS 공식 문서를 참고하여 심도 있는 학습을 진행할 예정입니다. 또한, 실제
          프로젝트에 AWS 서비스를 적용해보면서 실무 경험도 쌓아갈 계획입니다.
        </p>
      </div>
    </div>
  );
}
