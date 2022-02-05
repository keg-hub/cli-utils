
;(() => {
  const nodes = [...document.querySelectorAll('h4.name')]
  nodes.map(node => {
    const div = document.createElement("div")
    const h3 = document.createElement("h3")
    h3.className = 'method-name'
    h3.textContent = node.id.replace('~', '').replace('.', '')

    div.className = 'method-border'
    div.append(h3)
    
    node.parentElement.insertBefore(div, node)
  })

  const sections = [...document.querySelectorAll('div#main > section')]
  sections.shift()
  sections.map(section => !section.classList.contains(`readme`) && section.remove())

})()

