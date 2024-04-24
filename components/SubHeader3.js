export default function SubHeader3(props) {
  const { children } = props;
  return (
    <h3 className="text-xl xl:text-2xl mb-5 font-medium font-josefin">
      {children}
    </h3>
  );
}
