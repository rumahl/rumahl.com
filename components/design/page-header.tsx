import type {ReactNode} from 'react';
import {Eyebrow, Heading, Section, Tag, Text} from '@/components/rwds';

/** Shared header for every design-site page: eyebrow, title, lead, actions and status tags. */
export function PageHeader({
  eyebrow,
  title,
  lead,
  actions,
  tags,
  compact = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  actions?: ReactNode;
  tags?: string[];
  compact?: boolean;
}) {
  return (
    <div className="design-page-header">
    <Section spacing="tight">
        <div style={{display: 'grid', gap: 20, maxWidth: 820}}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading level={1} size={compact ? 'xl' : 'display'}>
            {title}
          </Heading>
          <Text size="lead">{lead}</Text>
          {actions ? <div style={{display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', marginTop: 8}}>{actions}</div> : null}
          {tags?.length ? (
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4}}>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          ) : null}
        </div>
    </Section>
    </div>
  );
}

