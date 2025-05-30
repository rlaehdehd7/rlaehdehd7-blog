'use client';

import { FaGithub, FaYoutube } from 'react-icons/fa';

export default function PitProject() {
  return (
    <div className="container mx-auto max-w-4xl py-8">
      {/* 프로젝트 헤더 */}
      <div className="mb-12">
        <h1 className="mb-2 text-4xl font-bold dark:text-gray-100">Pi-T HOME</h1>
        <p className="mb-6 text-xl text-gray-600 dark:text-gray-300">
          클라우드를 활용한 IoT 스마트홈 침입탐지 모니터링 시스템
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/PiT-HOME/PiT-HOME_WEBAPP"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </a>
          <a
            href="https://youtu.be/e-ZxwxvD8uc"
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
              사물인터넷과 연결된 웹인 월패드에서 해킹을 감지하고 사용자에게 경고를 제공하는 알람 및
              모니터링 프로그램입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 주요 기능 */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold dark:text-gray-100">👀 주요 기능</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-xl font-semibold dark:text-gray-100">
              IoT 기기 제어 (IoT Device Control)
            </h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              &apos;홈 제어&apos; 페이지에서 IoT 기기들의 작동을 제어합니다.
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                &apos;전등 스위치&apos;는 on/off 버튼 조작을 통해 전등을 웹 페이지에서 키거나 끌 수
                있습니다.
              </li>
              <li>
                &apos;멀티탭&apos;은 on/off 버튼 조작을 통해 멀티탭 전원을 키거나 끌 수 있습니다.
              </li>
              <li>
                가정 내 설치된 &apos;카메라&apos;는, on/off 버튼 조작을 통해 실시간 모니터링이
                가능하도록 카메라 렌즈를 키거나 끌 수 있습니다.
              </li>
              <li>
                &apos;도어락&apos;의 경우, open/close 버튼 조작을 통해 문을 개폐할 수 있습니다.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold dark:text-gray-100">회원가입 & 로그인</h3>
            <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                사용자는 회원가입을 통해 개인 정보를 입력하고, 자신의 IoT 기기를 시스템에 등록할 수
                있습니다.
              </li>
              <li>
                사용자는 권한이 있는 기기에만 접근이 가능하며 관리자 계정이 사용자 계정들을 관리하여
                보안을 강화할 수 있습니다.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold dark:text-gray-100">
              침입탐지 모니터링 대시보드
            </h3>
            <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
              <li>사용자는 웹앱의 실시간 탐지 결과를 대시보드로 확인할 수 있습니다.</li>
              <li>
                관리자가 설정한 탐지 규칙에 따라 악성 트래픽이 발생할 때, 시스템은 푸시 알림과
                메일을 통해 사용자와 관리자에게 경고를 전달하여 공격에 신속하게 대응할 수 있습니다.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 담당 역할 */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold dark:text-gray-100">🙋‍♂️ 담당 역할</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-primary dark:text-primary-light">•</span>
            <span className="dark:text-gray-300">
              팀장으로서 회의를 주도하고 팀원들의 역할 분담하여 프로젝트 진행
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary dark:text-primary-light">•</span>
            <span className="dark:text-gray-300">
              아두이노, 라즈베리파이를 활용하여 미니 스마트홈의 IoT
              기기(도어락,멀티탭,전등,카메라)를 개발
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary dark:text-primary-light">•</span>
            <span className="dark:text-gray-300">
              월패드 역할의 웹앱의 백엔드 서버를 Spring boot로 개발하고 프론트엔드와 협업
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary dark:text-primary-light">•</span>
            <span className="dark:text-gray-300">
              AWS와 Microsoft Azure를 통해 서비스를 배포하고, IoT 기기와 웹앱 간의 데이터 통신 연결
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary dark:text-primary-light">•</span>
            <span className="dark:text-gray-300">데이터베이스 설계 및 구축, 관리 (MySQL)</span>
          </li>
        </ul>
      </section>

      {/* 결과 */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold dark:text-gray-100">📑 결과</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-primary dark:text-primary-light">•</span>
            <span className="dark:text-gray-300">
              한국정보처리학회 ASK 2024 학술발표대회 논문집 (31권 1호) 논문 기재
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
