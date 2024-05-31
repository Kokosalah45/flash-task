type Props = {
  StartComponent?: React.ReactNode;
  MiddleComponent?: React.ReactNode;
  EndComponent?: React.ReactNode;
};

const Header = ({
  StartComponent = <span></span>,
  MiddleComponent = <span></span>,
  EndComponent = <span></span>,
}: Props) => {
  return (
    <header className="flex justify-between items-center p-4 shadow-sm shadow-black">
      {StartComponent}
      {MiddleComponent}
      {EndComponent}
    </header>
  );
};

export default Header;
