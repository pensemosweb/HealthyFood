export default function Button(props) {
  return (
    <div data-testid="button">
      {props.children}
    </div>
  );
}