interface Props {
  title: string;
  thumbnail: string;
}

export default function VideoPlayer(props: Props) {
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src={props.thumbnail}
      title={props.title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
