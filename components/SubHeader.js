export default function SubHeader(props) {
  const { children } = props;
  return (
    <h2 className="text-2xl xl:text-4xl my-5 font-light font-josefin">
      {children}
    </h2>
  );
}
