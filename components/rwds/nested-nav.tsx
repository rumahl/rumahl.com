'use client';
import Link from 'next/link';
import {useRef, useState, type ReactNode} from 'react';
import {ChevronRight} from 'lucide-react';

export type NestedNavItem = {
  id: string;
  label: string;
  href?: string;
  onSelect?: () => void;
};

export type NestedNavArea = {
  id: string;
  label: string;
  items: NestedNavItem[];
};

export type NestedNavGroup = {
  id: string;
  label: string;
  areas: NestedNavArea[];
};

function findActive(groups: NestedNavGroup[], activeId: string) {
  for (const group of groups) {
    for (const area of group.areas) {
      if (area.items.some((item) => item.id === activeId)) {
        return {group: group.id, area: area.id};
      }
    }
  }
  return {group: null, area: null};
}

/**
 * Shared nested documentation navigation.
 *
 * One group and one area are open at a time. The active path is open by
 * default, the scroll position is preserved while toggling, and the same
 * component is used by the user docs, the component explorer and later the
 * developer docs.
 */
export function NestedNav({
  groups,
  activeId,
  header,
  ariaLabel = 'Article navigation',
  forceOpen = false,
}: {
  groups: NestedNavGroup[];
  activeId: string;
  header?: ReactNode;
  ariaLabel?: string;
  forceOpen?: boolean;
}) {
  const active = findActive(groups, activeId);
  const [manual, setManual] = useState<{group?: string | null; area?: string | null}>({});
  const scrollRef = useRef<HTMLElement>(null);

  function keepScroll(action: () => void) {
    const top = scrollRef.current?.scrollTop ?? 0;
    action();
    requestAnimationFrame(() => {
      if (scrollRef.current) scrollRef.current.scrollTop = top;
    });
  }

  function toggleGroup(group: NestedNavGroup, isOpen: boolean) {
    keepScroll(() => {
      setManual({
        group: isOpen ? null : group.id,
        area: isOpen ? null : active.group === group.id ? active.area : null,
      });
    });
  }

  function toggleArea(group: NestedNavGroup, area: NestedNavArea, isOpen: boolean) {
    keepScroll(() => {
      setManual({group: group.id, area: isOpen ? null : area.id});
    });
  }

  return (
    <nav ref={scrollRef} className="content-sidenav nested-nav" aria-label={ariaLabel}>
      {header ? <div className="nested-nav-header">{header}</div> : null}
      {groups.map((group) => {
        const groupOpen = forceOpen || (manual.group !== undefined ? manual.group === group.id : active.group === group.id);
        const groupActive = group.areas.some((area) => area.items.some((item) => item.id === activeId));
        return (
          <div className="content-sidenav-group nested-nav-group" key={group.id}>
            <button
              type="button"
              className="content-sidenav-label nested-nav-group-label"
              onClick={() => toggleGroup(group, groupOpen)}
              aria-expanded={groupOpen}
              data-active={groupActive ? true : undefined}
            >
              <ChevronRight size={13} className="nested-nav-chevron" data-open={groupOpen} />
              {group.label}
            </button>
            {groupOpen ? (
              <div className="nested-nav-areas">
                {group.areas.map((area) => {
                  const areaOpen = forceOpen || (manual.area !== undefined ? manual.area === area.id : active.area === area.id);
                  const areaActive = area.items.some((item) => item.id === activeId);
                  return (
                    <div className="nested-nav-area" key={area.id}>
                      <button
                        type="button"
                        className="content-sidenav-label nested-nav-area-label"
                        onClick={() => toggleArea(group, area, areaOpen)}
                        aria-expanded={areaOpen}
                        data-active={areaActive ? true : undefined}
                      >
                        <ChevronRight size={11} className="nested-nav-chevron" data-open={areaOpen} />
                        {area.label}
                      </button>
                      {areaOpen ? (
                        <ul className="nested-nav-items">
                          {area.items.map((item) => (
                            <li key={item.id}>
                              {item.onSelect ? (
                                <a
                                  href={`#${item.id}`}
                                  aria-current={item.id === activeId ? 'page' : undefined}
                                  onClick={(event) => {
                                    event.preventDefault();
                                    item.onSelect?.();
                                  }}
                                >
                                  <span className="content-sidenav-dot" />
                                  {item.label}
                                </a>
                              ) : (
                                <Link href={item.href ?? '#'} aria-current={item.id === activeId ? 'page' : undefined}>
                                  <span className="content-sidenav-dot" />
                                  {item.label}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}
