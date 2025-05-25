import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/rlaehdehd7',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/dongju-kim-104a602a9/',
  },
];

export default function ProfileSection() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="bg-muted rounded-full p-2">
              <div className="h-36 w-36 overflow-hidden rounded-full">
                <Image
                  src="/images/profile.jpeg"
                  alt="프로필"
                  width={144}
                  height={144}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-bold">KDJ</h3>
            <p className="text-primary text-sm">Web Developer</p>
          </div>

          <div className="flex justify-center gap-2">
            {socialLinks.map((item, index) => (
              <Button key={index} variant="ghost" className="bg-primary/10" size="icon" asChild>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <item.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>

          <p className="bg-primary/10 rounded p-2 text-center text-sm">🌱 주니어 개발자 🌱</p>
        </div>
      </CardContent>
    </Card>
  );
}
