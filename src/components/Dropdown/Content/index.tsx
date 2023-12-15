import { FC } from 'react';

interface Content {
  body: string;
  title?: string;
}

export interface DropdownContentProps {
  content?: Content[];
}

export const DropdownContent: FC<DropdownContentProps> = ({ content }) => {
  return (
    <div>
      {content?.map(({ title, body }) => (
        <article className="p-10" key={title}>
          <h3 className="mb-2">{title}</h3>
          <p className="text-purple">{body}</p>
        </article>
      ))}
    </div>
  );
};
