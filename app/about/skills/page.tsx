'use client';

import {
  SiPhp,
  SiJavascript,
  SiPython,
  SiLaravel,
  SiSpringboot,
  SiNextdotjs,
  SiReact,
  SiMysql,
  SiMariadb,
  SiMongodb,
  SiGit,
  SiDocker,
} from 'react-icons/si';
import { FaJava, FaAws, FaMicrosoft } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface SkillBadgeProps {
  name: string;
  icon: IconType;
  level: 'many' | 'few';
}

export default function AboutSkills() {
  return (
    <div className="container mx-auto max-w-4xl py-8">
      <h1 className="mb-4 text-4xl font-bold dark:text-gray-100">🛠 Skills and Tools</h1>
      <p className="mb-12 text-gray-600 dark:text-gray-300">
        * 파란색으로 표시된 항목은 주력 기술 스택입니다 😁
      </p>

      <div className="space-y-12">
        {/* Language */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold dark:text-gray-100">Language</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {languages.map((skill, index) => (
              <SkillBadge key={index} {...skill} />
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold dark:text-gray-100">Backend</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {backend.map((skill, index) => (
              <SkillBadge key={index} {...skill} />
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold dark:text-gray-100">Frontend</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {frontend.map((skill, index) => (
              <SkillBadge key={index} {...skill} />
            ))}
          </div>
        </div>

        {/* Database */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold dark:text-gray-100">Database</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {databases.map((skill, index) => (
              <SkillBadge key={index} {...skill} />
            ))}
          </div>
        </div>

        {/* DevOps */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold dark:text-gray-100">DevOps</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {devops.map((skill, index) => (
              <SkillBadge key={index} {...skill} />
            ))}
          </div>
        </div>

        {/* Cloud */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold dark:text-gray-100">Cloud</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {cloud.map((skill, index) => (
              <SkillBadge key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillBadge({ name, icon: Icon, level }: SkillBadgeProps) {
  return (
    <div
      className={`flex items-center gap-3 rounded-lg border p-4 transition-all hover:shadow-md ${
        level === 'many'
          ? 'border-blue-200 bg-blue-50/50 hover:border-blue-300 dark:border-blue-500/30 dark:bg-blue-900/20 dark:hover:border-blue-500/50'
          : 'border-gray-200 bg-gray-50/50 hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600'
      }`}
    >
      <Icon
        className={`text-2xl ${
          level === 'many' ? 'text-blue-500 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
        }`}
      />
      <span
        className={`font-medium ${
          level === 'many' ? 'text-blue-700 dark:text-blue-300' : 'text-gray-700 dark:text-gray-300'
        }`}
      >
        {name}
      </span>
    </div>
  );
}

const languages: SkillBadgeProps[] = [
  { name: 'PHP', icon: SiPhp, level: 'many' },
  { name: 'JavaScript', icon: SiJavascript, level: 'many' },
  { name: 'Java', icon: FaJava, level: 'few' },
  { name: 'Python', icon: SiPython, level: 'few' },
];

const backend: SkillBadgeProps[] = [
  { name: 'Laravel', icon: SiLaravel, level: 'many' },
  { name: 'JSP', icon: FaJava, level: 'few' },
  { name: 'Springboot', icon: SiSpringboot, level: 'few' },
];

const frontend: SkillBadgeProps[] = [
  { name: 'Next.js', icon: SiNextdotjs, level: 'many' },
  { name: 'React', icon: SiReact, level: 'few' },
];

const databases: SkillBadgeProps[] = [
  { name: 'MySQL', icon: SiMysql, level: 'many' },
  { name: 'MariaDB', icon: SiMariadb, level: 'many' },
  { name: 'MongoDB', icon: SiMongodb, level: 'many' },
];

const devops: SkillBadgeProps[] = [
  { name: 'Git', icon: SiGit, level: 'many' },
  { name: 'Docker', icon: SiDocker, level: 'many' },
];

const cloud: SkillBadgeProps[] = [
  { name: 'AWS', icon: FaAws, level: 'many' },
  { name: 'Azure', icon: FaMicrosoft, level: 'few' },
];
