function submitted() {
    Input = document.getElementById("query").value
      Input = Input.toLowerCase()
      FullURL = document.URL.split("/Order.html")

      if (Input.includes("paw")){
          window.open("http://localhost:8080/Movie.html?id=2")
        }
      else if (Input.includes("patrol")){
          window.open("http://localhost:8080//Movie.html?id=2")
      }
      else if (Input.includes("demon")){
          window.open("http://localhost:8080//Movie.html?id=7")
      }
      else if (Input.includes("shang")){
        window.open("http://localhost:8080//Movie.html?id=1")
      }
      else if (Input.includes("legend")){
        window.open("http://localhost:8080//Movie.html?id=1")
      }
      else if (Input.includes("dog")){
        window.open("http://localhost:8080//Movie.html?id=8")
      }
      else if (Input.includes("power")){
        window.open("http://localhost:8080//Movie.html?id=8")
      }
      else if (Input.includes("bat")){
        window.open("http://localhost:8080//Movie.html?id=5")
      }
      else if (Input.includes("dark")){
        window.open("http://localhost:8080//Movie.html?id=5")
      }
      else if (Input.includes("knight")){
        window.open("http://localhost:8080//Movie.html?id=5")
      }
      else if (Input.includes("spider") && Input.includes("2")){
        window.open("http://localhost:8080//Movie.html?id=9")
      }
      else if (Input.includes("spider") && Input.includes("3")){
        window.open("http://localhost:8080//Movie.html?id=3")
      }
      else if (Input.includes("don't")){
        window.open("http://localhost:8080//Movie.html?id=4")
      }
      else if (Input.includes("breathe")){
        window.open("http://localhost:8080//Movie.html?id=4")
      }
      else if (Input.includes("mat")){
        window.open("http://localhost:8080//Movie.html?id=6")
      }
      else {
        alert("Sadly we couldn't identify that movie in our catalogue")
  }
}