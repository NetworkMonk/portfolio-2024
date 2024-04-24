export default function SocialLink(props) {
  const { href, title, children } = props;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fill-gray-300 border rounded-full inline-block p-6 hover:bg-brand-foreground hover:text-brand-background hover:fill-brand-background transition-colors duration-500 mx-auto"
      title={title}
    >
      {children}
    </a>
  );
}
