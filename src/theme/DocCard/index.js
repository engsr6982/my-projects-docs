import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  findFirstSidebarItemLink,
  useDocById,
} from '@docusaurus/theme-common/internal';
import isInternalUrl from '@docusaurus/isInternalUrl';
import { translate } from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

function CardContainer({ href, children }) {
  return (
    <Link
      href={href}
      className={clsx('card padding--lg', styles.cardContainer)}>
      {children}
    </Link>
  );
}
function CardLayout({ href, icon, title, description }) {
  return (
    <CardContainer href={href}>
      <Heading
        as="h2"
        className={clsx('text--truncate', styles.cardTitle)}
        title={title}>
        {icon} {title}
      </Heading>
      {description && (
        <p
          className={clsx('text--truncate', styles.cardDescription)}
          title={description}>
          {description}
        </p>
      )}
    </CardContainer>
  );
}

/// Custom Start

function Card({ item }) {
  return (
    <CardLayout
      href={item.href}
      icon={item.icon}
      title={item.title}
      description={item.description}
    />
  );
}

export default function ProjectCard({ title, href, description, icon }) {
  const it = {
    href: href,
    icon: icon ? icon : "",
    title: title,
    description: description ? description : ""
  }
  if (!it.href) throw new Error("ProjectCard.href error");
  if (!it.title) throw new Error("ProjectCard.title error");
  if (icon == "") it.icon = isInternalUrl(it.href) ? '📄️' : '🔗';
  if (it.description == "") it.description = "点击查看文档";
  return <Card item={it} />
}
