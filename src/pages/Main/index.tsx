import { FC } from 'react';
import './index.scss';

const bannerUrl =
  'https://socialify.git.ci/Lmmmmmm-bb/React-Ts-Tailwind/image?description=1';
const Main: FC = () => {
  return (
    <div className='main-wrapper flex flex-col justify-center items-center h-full'>
      <img className='main-banner' alt='GitHub Banner' src={bannerUrl} />
      <div className='main-section'>
        <p className='section-title'>主要模块</p>
        <div className='section-main'>
          <ul className='section-list'>
            <li className='section-list-item'>React</li>
            <li className='section-list-item'>React-Router-DOM</li>
            <li className='section-list-item'>TypeScript</li>
            <li className='section-list-item'>Scss</li>
            <li className='section-list-item'>Tailwind CSS</li>
          </ul>
          <p className='section-desc'>
            改造 <code className='section-code'>create-react-app</code>{' '}
            创建的项目，添加了 <code className='section-code'>Scss</code>，
            <code className='section-code'>Tailwind</code>
            CSS 支持。
          </p>
        </div>
      </div>
      <div className='main-section'>
        <p className='section-title'>代码风格检查和格式化</p>
        <div className='section-main'>
          <p className='section-desc'>
            支持 <code className='section-code'>Eslint</code>，
            <code className='section-code'>Prettier</code> 和{' '}
            <code className='section-code'>EditorConfig</code>{' '}
            进行代码检查和格式化。
          </p>
          <p className='section-desc'>可以根据自己需要修改各项配置。</p>
        </div>
      </div>
      <div className='main-section'>
        <p className='section-title'>Commit 检查</p>
        <div className='section-main'>
          <p className='section-desc'>
            支持 <code className='section-code'>Commitlint</code> 和定制 Commit
            信息，可使用 <code className='section-code'>npm run commit</code>{' '}
            代替 <code className='section-code'>git commit</code> 进行提交。
          </p>
          <p className='section-desc'>
            可以通过修改 <code className='section-code'>.cz-config.js</code>{' '}
            来对提示信息进行定制。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
