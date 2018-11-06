// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"

// Usage:
// <app-drawer trigger="#trigger" content="#content">
//   <button id="trigger">Click Here</button>
//   <div id="content">
//     Here is some hidden content
//  </div>
// </app-drawer>
class AppDrawer extends HTMLElement {
  constructor() {
    super()
    const button = this.querySelector(this.getAttribute("trigger"))
    const el = this.querySelector(this.getAttribute("content"))
    button.addEventListener("click", e => this.toggle(el))
    this.toggle(el)
  }

  get open() {
    return this.hasAttribute("open")
  }

  toggle(el) {
    if (el.style.display == "") {
      el.style.display = "none"
    } else {
      el.style.display = ""
    }
  }
}

window.customElements.define('app-drawer', AppDrawer)
