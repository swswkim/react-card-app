import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img className="photo" src={require("../images/fb-default.png")} width="317" height="317"/>

            <h3>Steve Kim</h3>
            <h4>Frontend Developer</h4>
            <p>https://github.com/swswkim</p>

            <div className="buttons">
                <button className="button1"><img className="icon1" src={require("../images/email.png")} width="20" height="20"></img>Email</button>
                <button className="button2"><img className="icon2" src={require("../images/linkedin.png")} width="20" height="20"></img>LinkedIn</button>
            </div>
        </div>
    )
}