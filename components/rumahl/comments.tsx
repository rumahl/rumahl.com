import {ArrowUpRight, MessageSquare} from 'lucide-react';
import {RichMarkdown} from './rich-markdown';
import {formatPostDate} from '@/lib/blog';

export type CommentItem = {
  id: number;
  author: string;
  authorUrl?: string;
  avatar?: string;
  date: string;
  body: string;
};

/**
 * Inline comments rendered from a Discourse topic's replies, in the website's
 * own design. Replies are read from the community instance; to take part, users
 * follow the link to the topic on community.rumahl.com.
 */
export function Comments({comments, topicUrl}: {comments: CommentItem[]; topicUrl?: string}) {
  return (
    <section className="blog-comments" aria-label="Comments">
      <div className="blog-comments-head">
        <div className="blog-comments-intro">
          <h2>Comments{comments.length > 0 ? ` (${comments.length})` : ''}</h2>
          <p>Comments live in the rumahl community on Discourse. This website stores nothing.</p>
        </div>
        {topicUrl && (
          <a className="button small blog-comments-button" href={topicUrl} target="_blank" rel="noreferrer">
            Open on Discourse <ArrowUpRight size={14} />
          </a>
        )}
      </div>

      {comments.length > 0 ? (
        <ul className="blog-comments-list">
          {comments.map((comment) => (
            <li key={comment.id}>
              <div className="blog-comment-meta">
                {comment.avatar &&
                  (comment.authorUrl ? (
                    <a className="blog-comment-avatar" href={comment.authorUrl} target="_blank" rel="noreferrer">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={comment.avatar} alt="" width={28} height={28} loading="lazy" />
                    </a>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={comment.avatar} alt="" width={28} height={28} loading="lazy" />
                  ))}
                {comment.authorUrl ? (
                  <a className="blog-comment-author" href={comment.authorUrl} target="_blank" rel="noreferrer">
                    {comment.author}
                  </a>
                ) : (
                  <strong>{comment.author}</strong>
                )}
                <time dateTime={comment.date}>{formatPostDate(comment.date)}</time>
              </div>
              <div className="blog-comment-body">
                <RichMarkdown>{comment.body}</RichMarkdown>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="blog-comments-empty">
          <MessageSquare size={20} />
          <p>
            No comments yet.
            {topicUrl ? (
              <>
                {' '}
                <a href={topicUrl} target="_blank" rel="noreferrer">
                  Be the first in the community.
                </a>
              </>
            ) : (
              ' Be the first in the community.'
            )}
          </p>
        </div>
      )}
    </section>
  );
}
