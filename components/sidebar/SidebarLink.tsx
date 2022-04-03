import Link from 'next/link';
import { useRouter } from 'next/router';
import { ComponentProps, FC } from 'react';

export type SidebarLinkProps = ComponentProps<'li'> & {
  title: string;
  path: string;
  icon?: FC<ComponentProps<'svg'>>;
};

export const SidebarLink: FC<SidebarLinkProps> = ({
  title,
  path,
  icon: Icon,
}) => {
  const router = useRouter()

  return (
    <li>
      <Link href={path}>
        <a className={`${router.pathname === path ? 'text-white bg-gray-700' : 'text-gray-400'} flex items-center p-2 text-base font-normal rounded-lg`}>
          {Icon && (
            <Icon className={`${router.pathname === path ? 'text-white' : ''} w-6 h-6 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}/>
          )}
          <span className="ml-3">{title}</span>
        </a>
      </Link>
    </li>
  )
}