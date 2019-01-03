import React, { Component } from "react";

import '../css/App.less';

class App extends Component {
  constructor() {
    super();

    this.text = `
      I hope there is an end of this story, fuck\n
      \n
      Everywhere I go, every time I sleep\n
      I go around in the circle\n
      Again and again, on my way\n
      To a better life, with a free heart\n
      A carefree mind\n
      It's joining me through time and distance\n
      Like my fucking shadow\n
      \n
      Invisible scars, caused by myself\n
      So deep, deep inside me\n
      I played with the fire in my heart\n
      \n
      It has finally caught me\n
      \n
      They told me\n
      It's time for change\n
      The beauty enticed me\n
      To risk so many mistakes\n
      Why not, why not?\n
      The signs were clear\n
      The clouds were here\n
      Who knows? who knows? Maybe they're still right\n
      Maybe there will be rain again\n
      
      Maybe I can forget, to forget the sadness\n
      Just another aberration?\n
      Just a delusion?\n

      So here we go, so here we go\n
      Round 3, and I'm doubtful again\n
      The shadow of the past so dark\n
      Making my life look empty\n
      I hope there is an end of this story\n
      \n
      Every night I dream of the love I lived twice\n
      \n
      Every morning I wake up with memories of things that never happened\n
      \n
      Alone in the crowd, maybe already forgotten\n
      \n
      I see the time is working against me\n
      I guess I can't stop this\n
      Because it's stronger than me\n
      Impossible to learn the lesson\n
      As long as my heart won't listen\n
      As long as my heart won't listen\n
      \n
      The circle holds me back, I am strapped down\n
      \n
      Waiting for the day I can break through\n
      \n
      The moment I can catch up all the love\n
      Waiting for the day\n
      You aren't just a dream, no!\n
      \n
      (Ready? Go!)
    `;
  }

  render() {
    return (
      <div className="app">
        <div className="page">
          <h1>Invisible Scars</h1>
          <h2>Breakdown Of Sanity</h2>
          <h3>Album: Perseption</h3>
          <pre className="text">
            {this.text}
          </pre>
        </div>
        
      </div>
    );
  }
}
export default App;