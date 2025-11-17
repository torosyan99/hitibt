import cls from './TitleText.module.css';

interface TitleTextProps {
  text: string;
  title: string;
}

export const TitleText = ({ title, text }:TitleTextProps) => {
  return (
    <div className={cls.titleText}>
      <h3>{title}</h3>
      <p className={cls.text}>{text}</p>
    </div>
  );
};
