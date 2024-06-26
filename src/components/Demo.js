import React, {useEffect, useState} from "react";
function Demo(props) {
    const [volume, setVolume] = useState(0.5);
    const [activeKey, setActiveKey] = useState(null);
    const [colors, setColors] = useState({
        function: "#00ff00",
        tonal: "#c0ff00",
        melody: "#ff0080"
    });

    const audio = new Audio();

    useEffect(() => {
        if (activeKey) {
            audio.src = `/nota/${activeKey}.wav`;
            audio.play();
            const keyColorMapping = {
                a: { function: "#ff0000", tonal: "#ff0000", melody: "#ff0000" },
                w: { function: "#00ff00", tonal: "#0080ff", melody: "#ff4000" },
                s: { function: "#0080ff", tonal: "#ff8000", melody: "#ff8000" },
                e: { function: "#0000ff", tonal: "#8000ff", melody: "#ffc000" },
                d: { function: "#ff8000", tonal: "#ffff00", melody: "#ffff00" },
                f: { function: "#0000ff", tonal: "#ff0080", melody: "#c0ff00" },
                t: { function: "#ff00ff", tonal: "#00ff00", melody: "#00ff00" },
                g: { function: "#ffff00", tonal: "#ff4000", melody: "#0080ff" },
                y: { function: "#ff00ff", tonal: "#0000ff", melody: "#0000ff" },
                h: { function: "#ff0080", tonal: "#ffc000", melody: "#8000ff" },
                u: { function: "#c0ff00", tonal: "#ff00ff", melody: "#ff00ff" },
                j: { function: "#ff0080", tonal: "#c0ff00", melody: "#00ff00" },
                // default: { function: "#00ff00", tonal: "#c0ff00", melody: "#ff0080" },
            };

if (keyColorMapping[activeKey]) {
    setColors(keyColorMapping[activeKey]);
}

setTimeout(() => setActiveKey(null), 150); // reset active key after 150ms
}
}, [activeKey]);


const handleKeyClick = (key) => {
    setActiveKey(key);
};

const handleKeyPress = (event) => {
    const key = event.key;
    const validKeys = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j'];
    if (validKeys.includes(key)) {
        setActiveKey(key);
    }
};

useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
        document.removeEventListener("keydown", handleKeyPress);
    };
}, []);

return (
    <section className='content'>
        <div className="monitors-container">
            <div className='monitor-div'></div>
            <p className="monitorF" style={{ background: colors.function }}>Function</p>
            <p className="monitorT" style={{ background: colors.tonal }}>Tonal</p>
            <p className="monitorM" style={{ background: colors.melody }}>Melody</p>
        </div>
        <div className="wrapper">
                <ul className="piano-keys">
                    <li className={`key white ${activeKey === 'a' ? 'active' : ''}`} data-key="a"
                        onClick={() => handleKeyClick('a')}><span>a</span></li>
                    <li className={`key black ${activeKey === 'w' ? 'active' : ''}`} data-key="w"
                        onClick={() => handleKeyClick('w')}><span>w</span></li>
                    <li className={`key white ${activeKey === 's' ? 'active' : ''}`} data-key="s"
                        onClick={() => handleKeyClick('s')}><span>s</span></li>
                    <li className={`key black ${activeKey === 'e' ? 'active' : ''}`} data-key="e"
                        onClick={() => handleKeyClick('e')}><span>e</span></li>
                    <li className={`key white ${activeKey === 'd' ? 'active' : ''}`} data-key="d"
                        onClick={() => handleKeyClick('d')}><span>d</span></li>
                    <li className={`key white ${activeKey === 'f' ? 'active' : ''}`} data-key="f"
                        onClick={() => handleKeyClick('f')}><span>f</span></li>
                    <li className={`key black ${activeKey === 't' ? 'active' : ''}`} data-key="t"
                        onClick={() => handleKeyClick('t')}><span>t</span></li>
                    <li className={`key white ${activeKey === 'g' ? 'active' : ''}`} data-key="g"
                        onClick={() => handleKeyClick('g')}><span>g</span></li>
                    <li className={`key black ${activeKey === 'y' ? 'active' : ''}`} data-key="y"
                        onClick={() => handleKeyClick('y')}><span>y</span></li>
                    <li className={`key white ${activeKey === 'h' ? 'active' : ''}`} data-key="h"
                        onClick={() => handleKeyClick('h')}><span>h</span></li>
                    <li className={`key black ${activeKey === 'u' ? 'active' : ''}`} data-key="u"
                        onClick={() => handleKeyClick('u')}><span>u</span></li>
                    <li className={`key white ${activeKey === 'j' ? 'active' : ''}`} data-key="j"
                        onClick={() => handleKeyClick('j')}><span>j</span></li>
                </ul>
        </div>
    </section>
);
}

export default Demo;