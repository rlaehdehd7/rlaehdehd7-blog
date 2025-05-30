'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  period: string;
  skills: string[];
  thumbnail: string;
  githubUrl?: string;
  demoUrl?: string;
  awards?: string[];
  role?: string[];
  slug: string;
}

export default function AboutProjects() {
  return (
    <div className="container mx-auto max-w-4xl py-8">
      <h1 className="mb-4 text-4xl font-bold dark:text-gray-100">🚀 Projects</h1>
      <p className="mb-12 text-gray-600 dark:text-gray-300">지금까지 진행한 프로젝트입니다 ✌️</p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* 앞으로 추가될 프로젝트 안내 메시지 */}
      <div className="mt-16 rounded-lg border-2 border-dashed border-yellow-400 bg-yellow-50 p-8 text-center dark:border-yellow-500/50 dark:bg-yellow-900/20">
        <div className="mb-4 flex items-center justify-center gap-2 text-2xl">
          <span>🚧</span>
          <span className="dark:text-gray-100">공사중</span>
          <span>🚧</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          앞으로 다른 프로젝트도 추가될 예정이에요! 🏗️
          <br />
          조금만 기다려주세요! 👷‍♂️
        </p>
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  period,
  skills,
  thumbnail,
  githubUrl,
  demoUrl,
  slug,
}: ProjectCardProps) {
  return (
    <Link href={`/about/projects/${slug}`}>
      <div className="group hover:border-primary/30 overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-start justify-between">
            <h3 className="group-hover:text-primary dark:group-hover:text-primary-light text-xl font-bold transition-colors dark:text-gray-100">
              {title}
            </h3>
          </div>

          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{period}</p>
          <p className="mb-4 line-clamp-2 text-gray-700 dark:text-gray-300">{description}</p>

          <div className="mb-4 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="rounded-full bg-gray-100 px-2 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary dark:hover:text-primary-light text-gray-600 transition-colors dark:text-gray-400"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub className="text-xl" />
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary dark:hover:text-primary-light text-gray-600 transition-colors dark:text-gray-400"
                onClick={(e) => e.stopPropagation()}
              >
                {demoUrl.includes('youtu') ? (
                  <FaYoutube className="text-xl" />
                ) : (
                  <FaExternalLinkAlt className="text-lg" />
                )}
              </a>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

const projects: ProjectCardProps[] = [
  {
    title: 'SILK ROAD - 옷 촉감 정보 제공 서비스',
    description:
      '인터넷 쇼핑 환경에서 사용자에게 옷에 대한 촉감 정보를 제공하는 크롬 확장 프로그램 서비스입니다.',
    period: '2024.03 ~ 2024.06',
    skills: ['React', 'Node.js', 'MySQL', 'AI/ML', 'Chrome Extension'],
    thumbnail: '/images/projects/silkroad/main.png',
    githubUrl: 'https://github.com/INISW4-SILKROAD/Silk-Road-Extension',
    demoUrl: 'https://youtu.be/yuQeEynIFVE',
    awards: ['2024 지능정보 SW 개발 프로젝트 대회 최우수상 (한국지능정보사회진흥원장상)'],
    role: [
      '아이디어 구상 및 와이어 프레임, 서비스 플로우 구성',
      '데이터베이스 설계 및 구축, 관리 (MySQL)',
      '크롬 확장 프로그램 개발 (React, Node.js)',
      'AI 모델 및 크롤러 연동',
      'UI 디자인 (Figma)',
    ],
    slug: 'silkroad',
  },
  {
    title: 'Pi-T HOME',
    description:
      '사물인터넷과 연결된 웹인 월패드에서 해킹을 감지하고 사용자에게 경고를 제공하는 알람 및 모니터링 프로그램입니다.',
    period: '2023.09 ~ 2023.12',
    skills: ['Spring Boot', 'Arduino', 'Raspberry Pi', 'AWS', 'Azure', 'MySQL'],
    thumbnail: '/images/projects/pit-home/main.png',
    githubUrl: 'https://github.com/PiT-HOME/PiT-HOME_WEBAPP',
    demoUrl: 'https://youtu.be/e-ZxwxvD8uc',
    awards: ['한국정보처리학회 ASK 2024 학술발표대회 논문집 (31권 1호) 논문 기재'],
    role: [
      '팀장으로서 회의 주도 및 팀원 역할 분담',
      'IoT 기기 개발 (Arduino, Raspberry Pi)',
      '백엔드 서버 개발 (Spring Boot)',
      'AWS, Azure 배포 및 IoT 통신 연결',
      '데이터베이스 설계 및 관리 (MySQL)',
    ],
    slug: 'pit',
  },
];
