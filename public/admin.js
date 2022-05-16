const main = async () => {
  const response = await fetch("http://localhost:3001/listBooks");
  const books = await response.json();
  books.forEach(renderBook)
}; 

const renderBook = (book) => {
    const root = document.querySelector("#root")

    const li = document.createElement("li")
    li.textContent =book.title

    const changeQuantiy = document.createElement("input")
    changeQuantiy.value = book.quantity
    
    const submitBtn = document.createElement("button")
    submitBtn.textConten = "Submit Chnges"
}

main()
