import React, { PropsWithChildren } from 'react';

type PageProps = PropsWithChildren & React.HTMLAttributes<HTMLDivElement>;

const Page = ({ children, className, ...rest }: PageProps) => {
  return (
    <div className={`flex-1 p-3 ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Page;
