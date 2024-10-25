import { useState } from "react";
import "./App.css";

import model from "./assets/images/model.jpg";

import v1 from "./assets/images/v1.png";
import v2 from "./assets/images/v2.png";
import v3 from "./assets/images/v3.png";
import v4 from "./assets/images/v4.png";
import v5 from "./assets/images/v5.png";
import v6 from "./assets/images/v6.png";
import v7 from "./assets/images/v7.png";
import v8 from "./assets/images/v8.png";
import v9 from "./assets/images/v9.png";

import g1 from "./assets/images/g1.jpg";
import g2 from "./assets/images/g2.jpg";
import g3 from "./assets/images/g3.jpg";
import g4 from "./assets/images/g4.jpg";
import g5 from "./assets/images/g5.jpg";
import g6 from "./assets/images/g6.jpg";
import g7 from "./assets/images/g7.jpg";
import g8 from "./assets/images/g8.jpg";
import g9 from "./assets/images/g9.jpg";

function App() {
    const glasses = [g1, g2, g3, g4, g5, g6, g7, g8, g9];

    let [selectedModel, setSelectedModel] = useState("model-1");
    let [glass, setGlass] = useState("");

    function getGlass(glass) {
        if (glass === g1) {
            return v1;
        } else if (glass === g2) {
            return v2;
        } else if (glass === g3) {
            return v3;
        } else if (glass === g4) {
            return v4;
        } else if (glass === g5) {
            return v5;
        } else if (glass === g6) {
            return v6;
        } else if (glass === g7) {
            return v7;
        } else if (glass === g8) {
            return v8;
        } else if (glass === g9) {
            return v9;
        } else {
            return "";
        }
    }

    return (
        <>
            <div className="wrapper">
                <header>
                    <h1>Try Glasses App Online</h1>
                </header>
                <div className="body">
                    <div className="models">
                        <div className="model-left">
                            <div
                                className="model"
                                id="model-1"
                                onClick={() => {
                                    setSelectedModel("model-1");
                                }}
                            >
                                <img
                                    className="main-model"
                                    src={model}
                                    alt="model"
                                    width={200}
                                />
                                {selectedModel == "model-1" &&
                                    getGlass(glass) && (
                                        <span className="glass-model glass-1">
                                            <img
                                                src={getGlass(glass)}
                                                alt="glass"
                                                width={100}
                                            />
                                        </span>
                                    )}
                            </div>
                        </div>
                        <div className="model-right">
                            <div
                                className="model"
                                id="model-2"
                                onClick={() => {
                                    setSelectedModel("model-2");
                                }}
                            >
                                <img
                                    className="main-model"
                                    src={model}
                                    alt="model"
                                    width={200}
                                />
                                {selectedModel == "model-2" &&
                                    getGlass(glass) && (
                                        <span className="glass-model glass-1">
                                            <img
                                                src={getGlass(glass)}
                                                alt="glass"
                                                width={100}
                                            />
                                        </span>
                                    )}
                            </div>
                        </div>
                    </div>
                    <div className="glasses">
                        {glasses.map((glass, index) => (
                            <div
                                key={index}
                                className="glass"
                                onClick={() => {
                                    setGlass(glass);
                                }}
                            >
                                <img src={glass} alt="glass" width={120} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
