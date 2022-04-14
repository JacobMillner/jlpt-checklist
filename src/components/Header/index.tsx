import { HeaderProps } from './types';

const Header = (props: HeaderProps) => {
  const { isDirty } = props;
  const saveIndicator = isDirty ? '⚠️' : '✅';
  return (
    <>
      <div className="mb-10 p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
        <main>
          <h2 className="font-semibold text-3xl mb-5">
            JLPT Grammar Checklist {saveIndicator}
          </h2>
        </main>
      </div>
      <div className="mb-2 ml-4">
        Track your study progress in relation to the{' '}
        <a
          href="https://www.jlpt.jp/e/"
          target="_blank"
          rel="noreferrer"
        >
          JLPT
        </a>
        {' '}-{' '}
        <a
          href="https://github.com/JacobMillner/jlpt-checklist"
          target="_blank"
          rel="noreferrer"
        >
          Github Repo
        </a>{' '}
        -{' '}
        <a href="https://jacobmillner.dev/" target="_blank" rel="noreferrer">
          jacobmillner.dev
        </a>
      </div>
    </>
  );
};

export default Header;
