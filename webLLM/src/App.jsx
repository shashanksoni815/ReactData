// import { useState } from 'react'

import './app.scss';

function App() {
  return (
    <main>
      <section>
        <div className="conversation-area">

          <div className="input-area">
            <input type="text" placeholder="Message LLM"/>
            <button>send</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
