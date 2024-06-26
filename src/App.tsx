import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { MyButton, ButtonWithCustomText, YesOrNoButtons } from './components';
import { Profile } from './components/1.react-components';
import { user } from './components/model';

function App() {
  const components = [
    {
      name: 'MyButton',
      component: <MyButton/>,
    },
    {
      name: 'ButtonWithCustomText',
      component: <ButtonWithCustomText text='Custom text' />,
    },
    {
      name: 'YesOrNoButtons',
      component: <YesOrNoButtons />
    },
    {
      name: 'Profile',
      component: <Profile user={user} />
    },
  ];
  return (
    <>
      <div className="grid gap-4 grid-cols-3 ">
        <a href="https://vitejs.dev" target="_blank" className="grid items-center justify-items-end">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <div className="my-10">
          <h1>Vite + React</h1>
        </div>
        <a href="https://react.dev" target="_blank" className="grid items-center justify-items-start">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <table className="w-full border-2 border-indigo-500/100">
        <tbody>
          {components.map(({ name, component }, index) => (
            <tr key={index}>
              <td className="border-2 border-indigo-500/100">
                {name}
              </td>
              <td className="border-2 border-indigo-500/100">
                <div className="grid items-center justify-items-center">
                  {component}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
