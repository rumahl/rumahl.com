import {PhotoCredit} from '@/components/rumahl/photo-credit';
import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import Link from 'next/link';
import {ArrowLeft, CalendarDays, Clock, FileText} from 'lucide-react';
import {Navigation} from '@/components/rumahl/navigation';
import {Footer} from '@/components/rumahl/sections';
import {RichMarkdown} from '@/components/rumahl/rich-markdown';
import {Comments} from '@/components/rumahl/comments';
import {BrandIcon} from '@/components/rumahl/brand';
import {postMetas, formatPostDate, type BlogPost, type BlogPostMeta} from '@/lib/blog';
import {getBlogThread, getRelatedPosts, communityUrl} from '@/lib/discourse';
import {CommunityUnavailable} from '@/components/rumahl/community-unavailable';

export function generateStaticParams() {
  return postMetas.map((post) => ({slug: post.slug}));
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const {slug} = await params;
  const {thread} = await getBlogThread(slug);
  if (!thread) return {title: 'Post not found — rumahl blog'};
  const path = `/blog/${thread.post.slug}`;
  return {
    title: `${thread.post.title} — rumahl blog`,
    description: thread.post.excerpt,
    alternates: {canonical: path, types: {'text/markdown': path + '.md'}},
  };
}

function Cover({post}: {post: BlogPost}) {
  if (post.cover) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={post.cover} alt="" />;
  }
  return <div className={'blog-cover-gradient ' + (post.coverClass ?? 'cover-green')} />;
}

function RelatedCard({post}: {post: BlogPostMeta}) {
  return (
    <Link href={'/blog/' + post.slug} className="blog-card">
      <span className="cover">
        {post.cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.cover} alt="" loading="lazy" />
        ) : (
          <div className={post.coverClass ?? 'cover-green'} />
        )}
      </span>
      <span className="body">
        <span className="blog-meta">
          <span className="blog-cat">{post.category}</span>
          <span>{formatPostDate(post.date)}</span>
        </span>
        <h3>{post.title}</h3>
      </span>
    </Link>
  );
}

export default async function BlogPostPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const {thread, status} = await getBlogThread(slug);

  if (status === 'unavailable') {
    return (
      <>
        <Navigation />
        <main className="portal-scope" style={{paddingTop: 128}}>
          <CommunityUnavailable url={communityUrl} />
        </main>
        <Footer />
      </>
    );
  }

  if (!thread) notFound();
  const {post, comments, topicUrl} = thread;
  const related = await getRelatedPosts(post.slug);

  return (
    <>
      <Navigation />
      <main className="portal-scope">
        <article>
          <header className="blog-article-hero">
            <Link className="blog-back" href="/blog">
              <ArrowLeft size={15} /> All stories
            </Link>
            <div style={{marginTop: 22}}>
              <span className="blog-eyebrow">{post.category}</span>
            </div>
            <h1>{post.title}</h1>
            {post.excerpt && <p className="excerpt">{post.excerpt}</p>}
            <div className="blog-article-meta">
              <span>
                <CalendarDays size={14} /> {formatPostDate(post.date)}
              </span>
              {post.readTime > 0 && (
                <span>
                  <Clock size={14} /> {post.readTime} min read
                </span>
              )}
              <a href={`/blog/${post.slug}.md`} type="text/markdown">
                <FileText size={14} /> Markdown
              </a>
            </div>
          </header>

          {post.cover && (
            <div className="blog-cover">
              <Cover post={post} />
            </div>
          )}

          <PhotoCredit src={post.cover} linked />

          <div className="blog-prose">
            <RichMarkdown prefix={'blog-' + post.slug}>{post.body}</RichMarkdown>
          </div>

          {post.tags.length > 0 && (
            <div className="blog-tags">
              {post.tags.map((tag) => (
                <span className="blog-tag" key={tag}>
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div className="blog-author">
            <span className="avatar">
              {post.authorAvatar ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={post.authorAvatar} alt="" width={50} height={50} />
              ) : (
                <BrandIcon className="h-6" />
              )}
            </span>
            <span>
              {post.authorUrl ? (
                <a className="blog-author-name" href={post.authorUrl} target="_blank" rel="noreferrer">
                  {post.author}
                </a>
              ) : (
                <strong>{post.author}</strong>
              )}
              <small>Writing about local-first software and life at home.</small>
            </span>
          </div>
        </article>

        <Comments comments={comments} topicUrl={topicUrl || undefined} />

        {related.length > 0 && (
          <section className="blog-related">
            <h2>Keep reading</h2>
            <div className="blog-related-grid">
              {related.map((entry) => (
                <RelatedCard key={entry.slug} post={entry} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
