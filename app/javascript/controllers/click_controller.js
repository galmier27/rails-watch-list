import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="click"
export default class extends Controller {
  connect() {
    console.log("hello worlds")
  }
}
