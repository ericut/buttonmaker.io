import { useState } from "react";
import html2canvas from "html2canvas";
import "./App.css";

function App() {
  const [buttonLabel, setButtonLabel] = useState("");

  function handleDownload() {
    html2canvas(document.querySelector("#button")).then(function (canvas) {
      document.querySelector("#finalversion").appendChild(canvas);
    });
  }

  return (
    <div className="App">
      <header className="title">
        Button Maker
        <span className="info">
          (Digite a label do botão -> Confira se está correto -> Clique em
          "Gerar Botão" -> Faça o download no quadro abaixo!)
        </span>
      </header>
      <div className="container">
        <span className="input-container">
          <label>Qual é a label do botão?</label>
          <input
            value={buttonLabel}
            onChange={(e) => setButtonLabel(e.target.value)}
          ></input>
        </span>
        <span className="preview">
          <label>Button Preview</label>
          <div id="button" className="button">
            <span className="left" />
            <span className="label">{buttonLabel}</span>
            <span className="right" />
          </div>
        </span>
        <span className="button-download">
          <button onClick={() => handleDownload()}>Gerar Botão</button>
        </span>
      </div>
      <div className="download-container-info">
        <span className="subtitle">Download botão abaixo:</span>
        <span className="info">(Botão direito -> Salvar imagem como...)</span>
      </div>
      <div className="download-container">
        <div id="finalversion"></div>
      </div>
    </div>
  );
}

export default App;
