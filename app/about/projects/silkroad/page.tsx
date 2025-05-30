'use client';

import Image from 'next/image';
import { FaGithub, FaYoutube } from 'react-icons/fa';

export default function SilkroadProject() {
  return (
    <div className="container mx-auto max-w-4xl py-8">
      {/* 프로젝트 헤더 */}
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold dark:text-gray-100">SILK ROAD</h1>
        <p className="mb-6 text-xl text-gray-600 dark:text-gray-300">
          인터넷 쇼핑 환경에서 사용자에게 옷에 대한 촉감 정보를 제공하는 서비스
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/INISW4-SILKROAD/Silk-Road-Extension"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </a>
          <a
            href="https://youtu.be/yuQeEynIFVE"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
          >
            <FaYoutube className="text-xl" />
            <span>시연 영상</span>
          </a>
        </div>
      </div>

      {/* 프로젝트 개요 */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold dark:text-gray-100">📖 프로젝트 개요</h2>
        <div className="prose max-w-none">
          <div className="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-300">
              인터넷 쇼핑 환경에서 사용자에게 옷에 대한 촉감 정보를 제공하는 서비스입니다.
            </p>
          </div>
          <div className="relative h-115 overflow-hidden rounded-lg">
            <Image
              src="/images/projects/silkroad/silkroad-intro.png"
              alt="실크로드 프로젝트 소개"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* 수상 내역 */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold dark:text-gray-100">🏆 수상 내역</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-primary dark:text-primary-light">•</span>
            <span className="dark:text-gray-300">
              2024 지능정보 SW 개발 프로젝트 대회 최우수상 (한국지능정보사회진흥원장상)
            </span>
          </li>
        </ul>
      </section>

      {/* 담당 역할 */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold dark:text-gray-100">🙋‍♂️ 담당 역할</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-primary dark:text-primary-light">•</span>
            <span className="dark:text-gray-300">
              아이디어 구상 및 와이어 프레임, 서비스 플로우 구성하여 서비스 기획 전반에 참여
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary dark:text-primary-light">•</span>
            <span className="dark:text-gray-300">데이터베이스 설계 및 구축, 관리 (MySQL)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary dark:text-primary-light">•</span>
            <span className="dark:text-gray-300">
              크롬 확장 프로그램 개발 및 AI 모델, 크롤러 연동 (React, Node.js)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary dark:text-primary-light">•</span>
            <span className="dark:text-gray-300">UI 디자인 (Figma)</span>
          </li>
        </ul>
      </section>

      {/* 프로젝트 구조 */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold dark:text-gray-100">🔍 프로젝트 구조</h2>
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-xl font-semibold dark:text-gray-100">유저 파이프라인</h3>
            <div className="relative h-96 overflow-hidden rounded-lg">
              <Image
                src="/images/projects/silkroad/user-pipeline.png"
                alt="유저 파이프라인"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold dark:text-gray-100">백엔드 파이프라인</h3>
            <div className="relative h-60 overflow-hidden rounded-lg">
              <Image
                src="/images/projects/silkroad/backend-pipeline.png"
                alt="백엔드 파이프라인"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 데이터베이스 구조 */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold dark:text-gray-100">💾 데이터베이스 구조</h2>
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-xl font-semibold dark:text-gray-100">전처리 전 DB</h3>
            <div className="relative h-96 overflow-hidden rounded-lg">
              <Image
                src="/images/projects/silkroad/db-before.png"
                alt="전처리 전 DB ERD"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold dark:text-gray-100">전처리 후 서비스 DB</h3>
            <div className="relative h-96 overflow-hidden rounded-lg">
              <Image
                src="/images/projects/silkroad/db-after.png"
                alt="전처리 후 서비스 DB ERD"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
