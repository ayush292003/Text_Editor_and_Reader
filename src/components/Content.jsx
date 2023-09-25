import React, { useState } from "react"

const Content = () => {
  const [text, setText] = useState("")

  const changeHandle = (event) => {
    setText(event.target.value)
  }

  const upperCaseText = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }

  const lowerCaseText = () => {
    let newText = text.toLowerCase()
    setText(newText)
  }

  const capitalizeText = () => {

    let newText = text.replace(/\b(\w)/g, (text) => text.toUpperCase())
    setText(newText)
  }

  const copyText = () => {
    navigator.clipboard.writeText(text)
  }

  const clearText = () => {
    setText("")
  }

  const undoText = async () => {
    const text = await navigator.clipboard.readText()
    setText(text)
  }

  const removeSpace = () => {
   
    let newText = text.split(/[ ] + /)
    setText(newText.join(" "))
  }

  const underlineText = () => {
    document.querySelector("#text").style.textDecoration = "underline"
  }
  const boldText = () => {
    document.querySelector("#text").style.fontWeight = "700"
  }
  const fontSizeInc = () => {
    document.querySelector("#text").style.fontSize = "20px"
  }
  const italicText = () => {
    document.querySelector("#text").style.fontStyle = "italic"
  }

  const searchText = () => {
    let str = prompt("enter the string you wanna search :")
    let newText = text.includes(str, 0)
    if (newText == true) {
      setText("the string " + str + " is present..")
    } else {
      setText("the string " + str + " is not present..")
    }
  }

  const readText = () => {
    let speech = new SpeechSynthesisUtterance()
    speech.text = text
    window.speechSynthesis.speak(speech)
  }
  const downloadFile = () => {
   
    const file = document.createElement("a")
    let newText = new Blob([text], {
      type: "text/plain",
    })
    file.href = URL.createObjectURL(newText)
    file.download = "myFile.txt"
    document.body.appendChild(file)
    file.click()
  }

  const centerText = () => {
    document.querySelector("#text").style.textAlign = "center"
  }
  const leftText = () => {
    document.querySelector("#text").style.textAlign = "left"
  }
  const rightText = () => {
    document.querySelector("#text").style.textAlign = "right"
  }
  const rightJustify = () => {
    document.querySelector("#text").style.textAlign = "justify"
  }

  return (
    <>
      <section className='content'>
        <div className='functionButton'>
          <button onClick={upperCaseText}>
            <i>Aa</i>
            <span>UpperCase</span>
          </button>
          <button onClick={lowerCaseText}>
            <i>a</i>
            <span>LowerCase</span>
          </button>
          <button onClick={capitalizeText}>
            <i>Aa</i>
            <span>capitalize </span>
          </button>
          <button onClick={copyText}>
            <i className='fa fa-copy'></i>
            <span>copy </span>
          </button>
          <button onClick={clearText}>
            <i class='fa fa-eraser'></i>
            <span>clear </span>
          </button>
          <button onClick={undoText}>
            <i class='fa fa-paste'></i>
            <span>paste </span>
          </button>
          <button onClick={removeSpace}>
            <i> - </i>
            <span>Remove Space </span>
          </button>
          <button onClick={underlineText}>
            <i class='fa fa-underline'></i>
            <span>underline </span>
          </button>
          <button onClick={boldText}>
            <i class='fa fa-bold'></i>
            <span>bold </span>
          </button>
          <button onClick={fontSizeInc}>
            <i class='fa fa-arrow-up'></i>
            <span>font Size </span>
          </button>
          <button onClick={italicText}>
            <i class='fa fa-italic'></i>
            <span>italic </span>
          </button>
          <button onClick={searchText}>
            <i class='fa fa-search'></i>
            <span>search </span>
          </button>
          <button onClick={readText}>
            <i class='fa fa-bullhorn'></i>
            <span>read Text </span>
          </button>
          <button onClick={downloadFile}>
            <i class='fa fa-download'></i> <span>download </span>
          </button>
          <button onClick={leftText}>
            <i class='fa fa-align-left'></i>
            <span>left text </span>
          </button>
          <button onClick={centerText}>
            <i class='fa fa-align-center'></i> <span>center text </span>
          </button>
          <button onClick={rightText}>
            <i class='fa fa-align-right'></i>
            <span>center text </span>
          </button>
          <button onClick={rightJustify}>
            <i class='fa fa-align-justify'></i>
            <span> justify text</span>
          </button>
        </div>
        {}
        <div className='textView'>
          <textarea cols='30' rows='10' value={text} onChange={changeHandle} id='text'></textarea>

          <h3>
            {text.split(" ").length} Word {text.length} Character
          </h3>
          {/*<p className='text'>{text}</p>*/}
        </div>
      </section>
    </>
  )
}

export default Content
