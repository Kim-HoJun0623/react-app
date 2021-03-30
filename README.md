## 2021-03-30

<img src="/public/logo512.png" >

Reactstudy


Public->React 에서 파일을 찾는 곳

TERMINAL

npm run start //서버 실행

npm run build //build파일 생성

build로 서비스를 한다.서버환경 구축

npm install -g serve //serve 다운
or
npx serve -s build //주소를 알려줌(네트워크 리로드)

위에 행동에 의해 용량이 가벼워짐

HTML 작성
><header>
            <h1>WEB</h1>
             world wide web!
> </header>

App.js 작성
class Subject extends Component{
  render(){
    return (
      <header>
        <h1>WEB</h1>
         world wide web!
      </header>
    );
  }  
}


class App extends Component {
  render(){
  
  return (
    <div className="App">
      <Subject></Subject>//위에서 만든 클래스를 가져와서 사용!!
    </div>
   );
  }
}
HTML 에 복잡도가 줄고 js파일을 사용하여 HTML 코드 이해도를 높인다





