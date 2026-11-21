import type {Article} from '@/components/rumahl/knowledge';

export function groupArticles(articles: Article[]) {
  const groups: {group: string; areas: {area: string; items: Article[]}[]}[] = [];
  for (const article of articles) {
    let group = groups.find((item) => item.group === article.group);
    if (!group) {
      group = {group: article.group, areas: []};
      groups.push(group);
    }
    let area = group.areas.find((item) => item.area === article.area);
    if (!area) {
      area = {area: article.area, items: []};
      group.areas.push(area);
    }
    area.items.push(article);
  }
  return groups;
}
