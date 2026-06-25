import { LucideProps } from 'lucide-react';
import * as icons from 'lucide-react';

interface IconProps extends Omit<LucideProps, 'ref'> {
  name: string;
  fallback?: string;
}

const Icon = ({ name, fallback = 'CircleAlert', ...props }: IconProps) => {
  const LucideIcon =
    (icons as Record<string, React.ComponentType<LucideProps>>)[name] ||
    (icons as Record<string, React.ComponentType<LucideProps>>)[fallback];

  if (!LucideIcon) return null;

  return <LucideIcon {...props} />;
};

export default Icon;
