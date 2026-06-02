// Presents Youth for God 2026 sermon and music videos from the conference archive.
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Media.scss";

type MediaItem = {
  title: string;
  type: "Sermon" | "Music Video";
  youtubeId: string;
  speaker?: string;
  published: string;
};

const sermons: MediaItem[] = [
  {
    title: "Христос в истории",
    type: "Sermon",
    speaker: "Балацкий Роман",
    youtubeId: "xKLiXmKJbxg",
    published: "May 28, 2026",
  },
  {
    title: "Христос - Пророк",
    type: "Sermon",
    speaker: "Нейман Константин",
    youtubeId: "HUkhuyhsts0",
    published: "May 28, 2026",
  },
];

const musicVideos: MediaItem[] = [
  {
    title: "Jesus - There's Just Something About That Name",
    type: "Music Video",
    youtubeId: "FtxesjxIH8g",
    published: "May 28, 2026",
  },
  {
    title: "Ты вошел в жизнь мою",
    type: "Music Video",
    youtubeId: "lKL5ExQV53s",
    published: "May 28, 2026",
  },
  {
    title: "Господи, услыши",
    type: "Music Video",
    youtubeId: "ZHEvi9W7sww",
    published: "May 28, 2026",
  },
  {
    title: "Ты достоин принять всю славу и честь",
    type: "Music Video",
    youtubeId: "e-vxVBHxWV0",
    published: "May 26, 2026",
  },
  {
    title: "Мне есть за что благодарить Творца",
    type: "Music Video",
    youtubeId: "CHZbMItY3L0",
    published: "May 26, 2026",
  },
  {
    title: "Разве ты не знаешь?",
    type: "Music Video",
    youtubeId: "pqLcJxnH3h8",
    published: "May 26, 2026",
  },
  {
    title: "Великий Бог!",
    type: "Music Video",
    youtubeId: "E8HwdWr8z9M",
    published: "May 26, 2026",
  },
  {
    title: "Кто приносит в жертву хвалу",
    type: "Music Video",
    youtubeId: "hnFKywbVMAU",
    published: "May 26, 2026",
  },
];

function getWatchUrl(youtubeId: string) {
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}

function getThumbnailUrl(youtubeId: string) {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

function MediaCard({ item }: { item: MediaItem }) {
  const meta = [item.type, item.speaker, item.published]
    .filter(Boolean)
    .join(" · ");

  return (
    <article className="media__card">
      <a
        className="media__thumbnail-link"
        href={getWatchUrl(item.youtubeId)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch ${item.title} on YouTube`}
      >
        <img
          src={getThumbnailUrl(item.youtubeId)}
          alt=""
          loading="lazy"
        />
        <span className="media__play">Watch</span>
      </a>
      <div className="media__card-body">
        <p className="media__meta">{meta}</p>
        <h3>{item.title}</h3>
        <a
          className="media__watch-link"
          href={getWatchUrl(item.youtubeId)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch on YouTube
        </a>
      </div>
    </article>
  );
}

function MediaSection({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: MediaItem[];
}) {
  return (
    <section className="media__section">
      <div className="media__section-header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="media__grid">
        {items.map((item) => (
          <MediaCard key={item.youtubeId} item={item} />
        ))}
      </div>
    </section>
  );
}

export function MediaPage() {
  return (
    <>
      <Header />
      <main className="media">
        <section className="media__hero">
          <p className="media__eyebrow">Conference archive</p>
          <h1>2026 Conference Media</h1>
          <p className="media__lead">
            Watch sermons and music videos from Youth for God Conference 2026,
            gathered from the Bible Baptist Church YouTube channel.
          </p>
        </section>

        <div className="media__content">
          <MediaSection
            title="Sermons"
            description="Messages preached during the 2026 conference."
            items={sermons}
          />
          <MediaSection
            title="Music Videos"
            description="Choir, orchestra, and worship videos from the conference."
            items={musicVideos}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
