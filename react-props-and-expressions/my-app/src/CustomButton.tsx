type CustomButtonProps = {
  className: string;
  text: string;
};
export default function CustomButton(Props: CustomButtonProps) {
  return <button className={Props.className}>{Props.text}</button>;
}
