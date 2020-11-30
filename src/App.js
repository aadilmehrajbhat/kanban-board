import AppLogo from './assets/app-logo.svg';

function App() {
  return (
    <div className="h-screen flex">
      <div className="? w-64 bg-gray-100 border-r">
        <img class="h-12 w-12" src={AppLogo} alt="" />
      </div>
      <div className="bg-white">
        <div className=""></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
