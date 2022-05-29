import React from "react"

export default function Footer() {
    return (
        <div className="footer">
            <ul>
                <li><img src={require("../images/twitter.png")} width="25" height="25"></img></li>
                <li><img src={require("../images/fb.png")} width="25" height="25"></img></li>
                <li><img src={require("../images/insta.png")} width="25" height="25"></img></li>
                <li><img src={require("../images/github.png")} width="25" height="25"></img></li>
            </ul>
        </div>
    )
}