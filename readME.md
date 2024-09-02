Next.js를 사용해서 간단한 movie사이트를 만들어봤고 일반 리액트에서 쓰임새가 없는 suspense컴포넌트를 next에서 사용했습니다.
유튜브 비디오를 iframe으로 사용하는 법이 담겨있습니다.

넥스트는 http스트리밍을 이용해서 loading과 page를 보여줍니다.
즉 res.sendFile(html)이 아닌 (res.write(로딩html), res.write(페이지html), res.end())같은
일련의 과정을 거쳐서 클라이언트에게 순서대로 보여주는것이죠.