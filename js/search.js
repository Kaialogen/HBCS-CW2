function submitted() {
    Input = document.getElementById("query").value
      Input = Input.toLowerCase()
      FullURL = document.URL.split("/Order.html")
      URL = FullURL[0]

      if (Input.includes("paw")){
          window.open(URL + "/Movie.html?id=2")
        }
      else if (Input.includes("patrol")){
          window.open(URL + "/Movie.html?id=2")
      }
      else if (Input.includes("demon")){
          window.open(URL + "/Movie.html?id=7")
      }
      else if (Input.includes("shang")){
        window.open(URL + "/Movie.html?id=1")
      }
      else if (Input.includes("legend")){
        window.open(URL + "/Movie.html?id=1")
      }
      else if (Input.includes("dog")){
        window.open(URL + "/Movie.html?id=8")
      }
      else if (Input.includes("power")){
        window.open(URL + "/Movie.html?id=8")
      }
      else if (Input.includes("bat")){
        window.open(URL + "/Movie.html?id=5")
      }
      else if (Input.includes("dark")){
        window.open(URL + "/Movie.html?id=5")
      }
      else if (Input.includes("knight")){
        window.open(URL + "/Movie.html?id=5")
      }
      else if (Input.includes("spider") && Input.includes("2")){
        window.open(URL + "/Movie.html?id=9")
      }
      else if (Input.includes("spider") && Input.includes("3")){
        window.open(URL + "/Movie.html?id=3")
      }
      else if (Input.includes("don't")){
        window.open(URL + "/Movie.html?id=4")
      }
      else if (Input.includes("breathe")){
        window.open(URL + "/Movie.html?id=4")
      }
      else if (Input.includes("mat")){
        window.open(URL + "/Movie.html?id=6")
      }
      else {
        alert("Sadly we couldn't identify that movie in our catalogue")
  }
}