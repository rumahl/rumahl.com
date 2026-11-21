import {PhotoCredit} from '@/components/rumahl/photo-credit';
import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowUpRight, MessageSquare} from 'lucide-react';
import {Navigation} from '@/components/rumahl/navigation';
import {Footer} from '@/components/rumahl/sections';
import {formatPostDate, type BlogPostMeta} from '@/lib/blog';
import {getBlogPosts, communityUrl} from '@/lib/discourse';
import {CommunityUnavailable} from '@/components/rumahl/community-unavailable';

export const metadata: Metadata = {
  title: 'Blog — rumahl',
  description: 'Articles, releases and notes from the rumahl community.',
  alternates: {canonical: '/blog', types: {'text/markdown': '/blog.md'}},
};

function Cover({post}: {post: BlogPostMeta}) {
  if (post.cover) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={post.cover} alt="" loading="lazy" />;
  }
  return <div className={post.coverClass ?? 'cover-green'} />;
}

function PostCard({post}: {post: BlogPostMeta}) {
  return (
    <Link href={'/blog/' + post.slug} className="blog-card">
      <span className="cover">
        <Cover post={post} />
      </span>
      <span className="body">
        <span className="blog-meta">
          <span className="blog-cat">{post.category}</span>
          <span>{formatPostDate(post.date)}</span>
        </span>
        <h3>{post.title}</h3>
        <PhotoCredit src={post.cover} />
        {post.excerpt && <p>{post.excerpt}</p>}
        <span className="blog-meta blog-meta-foot">
          <span className="blog-author-mini">
            {post.authorAvatar && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={post.authorAvatar} alt="" width={22} height={22} loading="lazy" />
            )}
            {post.author}
          </span>
          {typeof post.replyCount === 'number' && post.replyCount > 0 && (
            <span className="blog-replies">
              <MessageSquare size={13} /> {post.replyCount}
            </span>
          )}
        </span>
      </span>
    </Link>
  );
}

export default async function BlogPage() {
  const {posts, status} = await getBlogPosts('all');
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const rest = featured ? posts.filter((post) => post.slug !== featured.slug) : [];

  return (
    <>
      <Navigation />
      <main className="portal-scope">
        <section className="blog-hero">
          <span className="blog-eyebrow">Blog</span>
          <h1>
            Stories from <span className="gradient-text">the community</span>.
          </h1>
          <p>
            Articles, releases and notes from the rumahl project, authored in our{' '}
            <a href="https://community.rumahl.com" target="_blank" rel="noreferrer">
              community
            </a>
            .
          </p>
        </section>

        {status === 'unavailable' ? (
          <CommunityUnavailable url={communityUrl} />
        ) : featured ? (
          <>
            <section className="blog-featured">
              <Link href={'/blog/' + featured.slug}>
                <span className="cover">
                  <Cover post={featured} />
                </span>
                <span className="body">
                  <PhotoCredit src={featured.cover} />
                  <span className="blog-meta">
                    <span className="blog-cat">{featured.category}</span>
                    <span>{formatPostDate(featured.date)}</span>
                    <span className="blog-author-mini">
                      {featured.authorAvatar && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={featured.authorAvatar} alt="" width={20} height={20} loading="lazy" />
                      )}
                      {featured.author}
                    </span>
                    {typeof featured.replyCount === 'number' && featured.replyCount > 0 && (
                      <span className="blog-replies">
                        <MessageSquare size={13} /> {featured.replyCount}
                      </span>
                    )}
                  </span>
                  <h2>{featured.title}</h2>
                  {featured.excerpt && <p>{featured.excerpt}</p>}
                  <span className="text-link">
                    Read the story <ArrowUpRight size={16} />
                  </span>
                </span>
              </Link>
            </section>

            <section className="blog-grid">
              {rest.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </section>
          </>
        ) : (
          <section className="blog-grid">
            <p className="blog-empty">
              No articles yet. Once the community is connected, posts appear here automatically.
            </p>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
